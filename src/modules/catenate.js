import fs from "node:fs";
import { stdout } from "node:process";
import createAbsPath from "./createAbsPath.js";

async function catenate(pathToFile) {
  const promise = await new Promise((res, rej) => {
    try {
      const path = createAbsPath(pathToFile);

      fs.stat(path, (err) => {
        if (err) {
          rej();
        } else {
          const readStream = fs.createReadStream(path, "utf8");
          readStream.pipe(stdout);
          readStream.on("end", () => {
            console.log("\n");
            res();
          });
        }
      });
    } catch (error) {
      rej(error.code);
    }
  });
  return promise;
}

export default catenate;
