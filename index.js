import fs from "node:fs";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import commandHandler from "./src/modules/commandHandler.js";

let username = "";

process.argv.forEach((arg) => {
  if (arg.includes("--username=")) {
    username = arg.split("=")[1];
    output.write(`Welcome to the File Manager, ${username}!\n`);
  }
});

const rl = readline.createInterface({ input, output });

rl.on("close", () => {
  output.write(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});

rl.on("line", (line) => {
  const command = line.trim();
  const result = commandHandler(command);
  // console.log(result);
  if (!result) {
    rl.close();
  }
});
