const http = require("http");
const https = require("https");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res)=> {
    res.writeHead(200);
    if ( req.url === "/" ){
        //handle homepage
        handleHome(req, res);
    } else if ( req.url.startsWith("/user/") ){
        const id = Number(req.url.split("/")[2]);
        handleUserPage(req, res, id);
        //handle user page
    } else {
        res.writeHead(200, { "Content-Type": "application/json" });
    }
});

const handleUserPage = (req, res, id) => {
    fs.readFile( path.join(__dirname, "template", "user.html"), "utf-8", (err, page) => {
        if ( err ){
            console.log(err);
            return;
        }
        https.get("https://reqres.in/api/users/" + id, (response) => {
            let data = "";
            response.on("data", (chunk) => {
                data += chunk;
            });

            response.on("end", () => {
                data = JSON.parse(data);
                const options = {
                    fullName: `${data.data.first_name} ${data.data.last_name}`,
                    imgSrc: data.data.avatar,
                    email: data.data.email
                };
                for ( const key in options ){
                    page = page.replace(`{${key}}`, options[key]);
                }
                res.end(page);
            });
        });
    });
};

const handleHome = (req, res) => {
    const options = {
        title: "Ravi's Home Page",
        description: "It works!"
    }
    fs.readFile(path.join(__dirname, "template", "index.html"), "utf-8", (err, page) => {
        if ( err ){
            console.log(err);
            return;
        };
        for ( const key in options ){
            page = page.replace( `{${key}}`, options[key] );
        }
        res.end( page );
    });
};

server.listen(3001, ()=> {
    console.log("server is running on http://localhost:3001 ");
});