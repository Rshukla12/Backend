const path = require("path");

const file = {
    dir: 'C:\\Users\\rshuk\\Desktop\\Masai\\backend\\node-path',
    ext: '.js',
    name: 'pathEx'
};

console.log(__dirname);
console.log(__filename);
console.log( path.basename( __filename ) );
console.log( path.extname( __filename ) );
console.log( path.parse( __filename ) );
console.log( path.format( file ) );
console.log( path.dirname( __filename ) );