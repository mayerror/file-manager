import fs from "node:fs";
import zlib from "node:zlib";
import { basename, join } from "node:path";
import createAbsPath from "./createAbsPath.js";

async function decompress(pathToFile, pathToDir) {
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
            const fileName = basename(absPathToFile).slice(0, -3);
            const absPathToNewFile = join(absPathToDir, fileName);

            const readStream = fs.createReadStream(absPathToFile);
            const bdStream = zlib.createBrotliDecompress();
            const writeStream = fs.createWriteStream(absPathToNewFile, {
              flags: "a",
            });
            readStream.pipe(bdStream).pipe(writeStream);
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

export default decompress;
