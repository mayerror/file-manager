function commandHandler(command) {
  if (command === ".exit") return false;
  switch (command) {
    case 1:
      break;

    default:
      console.log("Invalid input");
      break;
  }
  return true;
}

export default commandHandler;
