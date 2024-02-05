import { readdir, stat } from "node:fs/promises";
import path from "node:path";

async function listFiles() {
  try {
    const dirInfo = await readdir(globalThis.currentDir);
    let dirs = [];
    let files = [];

    for (let i = 0; i < dirInfo.length; i++) {
      const item = dirInfo[i];
      const nameCheck = path.join(globalThis.currentDir, item);
      const stats = await stat(nameCheck);
      if (stats.isDirectory()) {
        dirs.push(item);
      } else if (stats.isFile()) {
        files.push(item);
      }
    }

    dirs = dirFormat(dirs, "directory");
    files = dirFormat(files, "file");
    console.table([...dirs, ...files]);
  } catch {
    console.log("Operation failed");
  }
}

function dirFormat(names, type) {
  return names
    .map((name) => {
      if (name.length > 70) {
        return name.slice(0, 70) + "...";
      }
      return name;
    })
    .sort()
    .map((name) => {
      return { Name: name, Type: type };
    });
}

export default listFiles;
