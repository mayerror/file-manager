import fs from "node:fs";
import createAbsPath from "./createAbsPath.js";
import { basename, join } from "node:path";

async function copyFile(pathToFile, pathToDir) {
  const promise = await new Promise((res, rej) => {
    const absPathToFile = createAbsPath(pathToFile);
    const absPathToDir = createAbsPath(pathToDir);

    fs.stat(absPathToFile, (err) => {
      if (err) {
        rej();
      } else {
        fs.stat(absPathToDir, (err) => {
          if (err) {
            rej();
          } else {
            const fileName = basename(absPathToFile);
            const absPathToNewFile = join(absPathToDir, fileName);

            const readStream = fs.createReadStream(absPathToFile, "utf8");
            const writeStream = fs.createWriteStream(absPathToNewFile, {
              flags: "a",
            });
            readStream.pipe(writeStream);
            writeStream.on("close", () => {
              res();
            });
            writeStream.on("error", () => {
              rej();
            });
          }
        });
      }
    });
  });
  return promise;
}

export default copyFile;
