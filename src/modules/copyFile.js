import fs from "node:fs";
import createAbsPath from "./createAbsPath.js";

async function copyFile(pathToFile, pathToDir) {
  const promise = await new Promise((res, rej) => {
    const absPathToFile = createAbsPath(pathToFile);
    const absPathToDir = createAbsPath(pathToDir);

    fs.stat(absPathToFile, (err) => {
      if (err) {
        rej();
      } else {
        console.log(absPathToFile);
        console.log(absPathToDir);
      }
    });
  });
  return promise;
}

export default copyFile;
