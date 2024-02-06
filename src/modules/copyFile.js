import { resolve, isAbsolute, join, dirname } from "node:path";
import fs from "node:fs";

async function copyFile(pathToFile, pathToDir) {
  const promise = await new Promise((res, rej) => {
    let absPathToFile = "";
    let absPathToDir = "";
    if (isAbsolute(pathToFile)) {
      absPathToFile = pathToFile;
    } else {
      absPathToFile = resolve(join(globalThis.currentDir, pathToFile));
    }
    if (isAbsolute(pathToFile)) {
      absPathToFile = pathToFile;
    } else {
      absPathToFile = resolve(join(globalThis.currentDir, pathToFile));
    }
    fs.stat(absPathToFile, (err) => {
      if (err) {
        rej();
      } else {
      }
    });
  });
  return promise;
}

export default copyFile;
