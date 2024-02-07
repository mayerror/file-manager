import os from "node:os";
import process from "node:process";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import commandHandler from "./modules/commandHandler.js";

const userHomeDir = os.homedir();
globalThis.currentDir = userHomeDir;

let username = "";

process.argv.forEach((arg) => {
  if (arg.includes("--username=")) {
    username = arg.split("=")[1];
    output.write(`Welcome to the File Manager, ${username}!\n`);
    output.write(`You are currently in ${globalThis.currentDir}\n`);
  }
});

// readline interaction
const rl = readline.createInterface({ input, output });

rl.on("line", async (line) => {
  const command = line.trim();
  const result = await commandHandler(command);
  output.write(`You are currently in ${globalThis.currentDir}\n`);
  if (!result) {
    rl.close();
  }
});

rl.on("close", () => {
  output.write(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});
