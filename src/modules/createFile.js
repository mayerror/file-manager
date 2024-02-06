import { join } from "node:path";
import fs from "node:fs";

async function createFile(fileName) {
  const promise = await new Promise((res, rej) => {
    try {
      const path = join(globalThis.currentDir, fileName);
      const writeStream = fs.createWriteStream(path);
      writeStream.end();
      res();
    } catch (error) {
      rej();
    }
  });
  return promise;
}

export default createFile;
