import path from "node:path";
import changeDir from "./changeDir.js";

async function commandHandler(command) {
  if (command === ".exit") return false;
  const params = command.split(" ");
  console.log(params.length);
  try {
    switch (params.length) {
      case 1:
        await oneParamHandler(params);
        break;
      case 2:
        await twoParamHandler(params);
        break;
      default:
        console.log("Invalid input");
        break;
    }
  } catch (error) {
    console.warn("Operation failed");
  }
  return true;
}

async function oneParamHandler(params) {
  try {
    switch (params[0]) {
      case "up":
        globalThis.currentDir = path.dirname(globalThis.currentDir);
        break;

      default:
        console.log("Invalid input");
        break;
    }
  } catch (error) {
    console.warn("Operation failed");
  }
}

async function twoParamHandler(params) {
  try {
    switch (params[0]) {
      case "cd":
        await changeDir(params[1]);
        break;

      default:
        console.log("Invalid input");
        break;
    }
  } catch (error) {
    console.warn("Operation failed");
  }
}

export default commandHandler;
