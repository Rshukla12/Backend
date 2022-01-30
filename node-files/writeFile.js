const fs = require('fs');
const path = require('path');

fs.writeFile("name.txt", "ravi", "utf-8", err => {
    if ( err ){
        console.log(err);
        return;
    };
    console.log("Name.txt Asynchronously created successfully")
});

fs.mkdir( "meta" , err => {
    if ( err ){
        console.log(err);
        return;
    }
    console.log("Created meta directory!(async)");
});

fs.rename( "name.txt", path.join(__dirname, "meta", "my_name.txt"), err => {
    if ( err ){
        console.log(err);
        return;
    }
    console.log("name.txt renamed and placed inside the meta directory!(async)");
});


// Sync
try {
    fs.writeFileSync("nameSync.txt", "ravi sync", "utf-8");
    console.log("NameSync.txt Synchronously created successfully");
    fs.mkdirSync("metaSync");
    console.log("Created metaSync directory!(sync)");
    fs.renameSync("nameSync.txt", path.join(__dirname, "metaSync", "my_name_sync.txt"));
    console.log("name.txt renamed and placed inside the meta directory!(async)");
} catch (err) {
    console.log(err);
}