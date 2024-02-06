import { resolve, isAbsolute, join, dirname } from "node:path";
import { stat, rename } from "node:fs/promises";
import fs from "node:fs";

async function renameFile(pathToFile, newFile) {
  try {
    let path = "";
    if (isAbsolute(pathToFile)) {
      path = pathToFile;
    } else {
      path = resolve(join(globalThis.currentDir, pathToFile));
    }
    const stats = await stat(path);
    if (stats.isFile()) {
      const dir = dirname(path);
      const pathToNewFile = join(dir, newFile);
      if (fs.existsSync(pathToNewFile)) {
        console.log("File already exist");
      } else {
        await rename(path, pathToNewFile);
      }
    } else {
      console.log("Invalid input");
    }
  } catch (error) {
    console.log("Operation failed");
  }
}

export default renameFile;
