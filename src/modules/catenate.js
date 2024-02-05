import fs from "node:fs";
import { resolve, isAbsolute, join } from "node:path";
import { stdout } from "node:process";

async function catenate(pathToFile) {
  const promise = await new Promise((res, rej) => {
    try {
      let path = "";
      if (isAbsolute(pathToFile)) {
        path = pathToFile;
      } else {
        path = resolve(join(globalThis.currentDir, pathToFile));
      }
      const stats = fs.stat(path);
      if (stats.isFile()) {
        const readStream = fs.createReadStream(path, "utf8");
        readStream.pipe(stdout);
        readStream.on("end", () => {
          console.log("\n");
          res();
        });
      } else {
        rej();
      }
    } catch (error) {
      rej(error.code);
    }
  });
  return promise;
}

export default catenate;
