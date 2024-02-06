import { rm } from "node:fs/promises";
import createAbsPath from "./createAbsPath.js";

async function deleteFile(pathToFile) {
  try {
    const absfilePath = createAbsPath(pathToFile);
    await rm(absfilePath);
  } catch {
    console.log("Operation failed");
  }
}

export default deleteFile;
