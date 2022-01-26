const http = require("http");
const { getAllUsers, getUserById, createUser } = require("./api/user.js");

const server = http.createServer((req,res) => {
    try {
        const url = req.url.split("?");
        if ( url[0] === "/users" ){
            const searchParams = new URLSearchParams(url[1]);
            if ( req.method === "POST" ) {
                const name = searchParams.get("name");
                res.writeHead(201, { "Content-type": "application/json" });
                res.end( JSON.stringify( createUser( name ) ) );
            } else {
                const page = searchParams.get("page") || 1;
                const perPage = searchParams.get("per_page") || 3;
                res.writeHead(200, { "Content-type": "application/json" });
                res.end( JSON.stringify( getAllUsers(page, perPage) ) );
            }     
        } else if ( url[0].startsWith("/users/") ){
            const id = url[0].split("/")[2];
            res.writeHead(200, { "Content-type": "application/json" });
            res.end( JSON.stringify( getUserById( Number(id)) ) );    
        } else {
            res.writeHead(404, { "Content-type": "application/json" });
            res.end( JSON.stringify({
                "message": "This is wrong path, or resource doesn't exist"
            } ) );
        }
    } catch ( err ) {
        res.writeHead(500, { "Content-type": "application/json" });
        console.log(err);
        res.end(JSON.stringify({
            error: err 
        }));
    }
});

server.listen(3000, () => {
    console.log("server is listening at port 3000");
});