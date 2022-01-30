const fs = require("fs");

fs.readFile("hello.txt", 'utf-8', (err, data) => {
    if ( err ){
        console.log(err);
        return;
    }
    console.log("Reading hello.txt asynchronously: ",data);
});

try {
    const data = fs.readFileSync("hello.txt", { encoding: 'utf-8'});
    console.log("Reading hello.txt synchronously: ", data);
} catch (err) {
    console.log(err);
}