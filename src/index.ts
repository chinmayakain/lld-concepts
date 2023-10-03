const readline = require("readline");
const path = require("path");
const { exec } = require("child_process");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the relative path to the TypeScript file you want to run: ", (input) => {
    const filePath = input;

    const childProcess = exec(`nodemon ${filePath}`, (error) => {
        if (error) {
            throw new error(`Error running script: ${error.message}`);
        }
    });

    if (childProcess) {
        childProcess.stdout.pipe(process.stdout);
        childProcess.stderr.pipe(process.stderr);
    }

    rl.close();
});
