import { join } from "node:path";
import fs from "node:fs";

async function createFile(fileName) {
  const promise = await new Promise((res, rej) => {
    const path = join(globalThis.currentDir, fileName);
    const writeStream = fs.createWriteStream(path, { flags: "ax" });

    writeStream.end();
    writeStream.on("close", () => {
      res();
    });
    writeStream.on("error", () => {
      rej();
    });
  });
  return promise;
}

export default createFile;
