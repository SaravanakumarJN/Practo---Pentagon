process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
function runProgram(input) {
    
}

if(process.env.USERNAME === "mandar"){
    runProgram(`4`);
}else{
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
    });

    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
