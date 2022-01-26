// OJ's template code

// starting reading from stdin
process.stdin.resume();
// seting input's endcoding as ascii
process.stdin.setEncoding("ascii");
// declaring read variable to store input
let read = "";
// on data event callback function is executed
// it means if input is given
process.stdin.on("data", function (input) {
    // add new input to read variable
    read += input;
});

// on end event callback function is executed
// it means when all the input is read 
process.stdin.on("end", function () {
    // replacing new lines with spaces
	read = read.replace(/\n$/,"")
    // exceute main program with read input 
    runProgram(read);
});

// when interrupt signal is send or encountered to close the program
process.on("SIGINT", function () {
    // replacing new lines with spaces
    read = read.replace(/\n$/,"")
    // exceute main program with read input 
    runProgram(read);
    // exit the program with no errors
    process.exit(0);
});