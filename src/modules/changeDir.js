import path from "node:path";
import { stat } from "node:fs/promises";

async function changeDir(directory) {
  try {
    if (path.isAbsolute(directory)) {
      const statObj = await stat(directory);
      if (statObj.isDirectory()) {
        globalThis.currentDir = directory;
      }
    } else {
      const absDir = path.resolve(path.join(globalThis.currentDir, directory));
      const statObj = await stat(absDir);

      if (statObj.isDirectory()) {
        globalThis.currentDir = absDir;
      }
    }
  } catch (error) {
    console.log("Invalid input");
  }
}

export default changeDir;
