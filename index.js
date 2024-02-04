import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import commandHandler from "./src/modules/commandHandler.js";
import os from "node:os";

const userHomeDir = os.homedir();
let currentDir = userHomeDir;

let username = "";
global.currentDir = "byby";

process.argv.forEach((arg) => {
  if (arg.includes("--username=")) {
    username = arg.split("=")[1];
    output.write(`Welcome to the File Manager, ${username}!\n`);
    output.write(`You are currently in ${currentDir}\n`);
  }
});

// readline interaction
const rl = readline.createInterface({ input, output });

rl.on("line", (line) => {
  const command = line.trim();
  const result = commandHandler(command);

  // output.write(`You are currently in ${currentDir}\n`);
  output.write(`You are currently in ${global.currentDir}\n`);

  if (!result) {
    rl.close();
  }
});

rl.on("close", () => {
  output.write(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});
