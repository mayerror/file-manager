import path from "node:path";

function commandHandler(command) {
  if (command === ".exit") return false;
  switch (command) {
    case "up":
      globalThis.currentDir = path.dirname(globalThis.currentDir);
      break;

    default:
      console.log("Invalid input");
      break;
  }
  return true;
}

export default commandHandler;
