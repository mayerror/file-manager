import fs from "node:fs";

// console.log(process.argv);
// console.log(process.env);

process.argv.forEach((arg) => {
  if (arg.includes("--username=")) {
    const username = arg.split("=")[1];
    process.stdout.write(`Welcome to the File Manager, ${username}!\n`);
  }
  // process.stdout.write(`${arg}\n`);
});
