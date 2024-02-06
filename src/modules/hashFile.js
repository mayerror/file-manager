import createAbsPath from "./createAbsPath.js";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

async function hashFile(pathToFile) {
  try {
    const path = createAbsPath(pathToFile);
    const content = await readFile(path, { encoding: "utf8" });

    let digest = createHash("sha256").update(content).digest("hex");
    console.log(digest);
  } catch {
    console.log("Invalid input");
  }
}

export default hashFile;
