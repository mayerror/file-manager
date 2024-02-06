import path from "node:path";
import changeDir from "./changeDir.js";
import listFiles from "./listFiles.js";
import catenate from "./catenate.js";
import createFile from "./createFile.js";
import renameFile from "./renameFile.js";
import copyFile from "./copyFile.js";
import deleteFile from "./deletFile.js";
import moveFile from "./moveFile.js";
import getOSInfo from "./getOSInfo.js";
import hashFile from "./hashFile.js";

async function commandHandler(command) {
  if (command === ".exit") return false;
  const params = command.split(" ");
  try {
    switch (params.length) {
      case 1:
        await oneParamHandler(params);
        break;
      case 2:
        await twoParamHandler(params);
        break;
      case 3:
        await threeParamHandler(params);
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
      case "ls":
        await listFiles();
        break;

      default:
        console.log("Invalid input");
        break;
    }
  } catch (error) {
    console.log("Operation failed");
  }
}

async function twoParamHandler(params) {
  try {
    switch (params[0]) {
      case "cd":
        await changeDir(params[1]);
        break;
      case "cat":
        await catenate(params[1]);
        break;
      case "add":
        await createFile(params[1]);
        break;
      case "rm":
        await deleteFile(params[1]);
        break;
      case "os":
        getOSInfo(params[1]);
        break;
      case "hash":
        await hashFile(params[1]);
        break;
      default:
        console.log("Invalid input");
        break;
    }
  } catch (error) {
    console.log("Operation failed");
  }
}

async function threeParamHandler(params) {
  try {
    switch (params[0]) {
      case "rn":
        await renameFile(params[1], params[2]);
        break;
      case "cp":
        await copyFile(params[1], params[2]);
        break;
      case "mv":
        await moveFile(params[1], params[2]);
        break;
      default:
        console.log("Invalid input");
        break;
    }
  } catch (error) {
    console.log("Operation failed");
  }
}

export default commandHandler;
