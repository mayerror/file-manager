function commandHandler(command) {
  if (command === ".exit") return false;
  // global.currentDir = "abracadabra";
  return true;
}

export default commandHandler;
