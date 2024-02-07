import { resolve, isAbsolute, join } from "node:path";

function createAbsPath(pathToFile) {
  let absPathToFile = "";
  if (isAbsolute(pathToFile)) {
    absPathToFile = pathToFile;
  } else {
    absPathToFile = resolve(join(globalThis.currentDir, pathToFile));
  }
  return absPathToFile;
}

export default createAbsPath;
