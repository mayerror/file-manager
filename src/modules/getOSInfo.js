import os from "node:os";
import process from "node:process";

function getOSInfo(arg) {
  switch (arg.toLowerCase()) {
    case "--eol":
      console.log(JSON.stringify(os.EOL));
      break;
    case "--cpus":
      {
        const cpus = os.cpus();
        console.log(`CPU Model: ${cpus[0].model}`);
        console.log(`Number of Cores: ${cpus.length}`);
        cpus.forEach((cpu, index) =>
          console.log(`Core #${index + 1} clock rate: ${cpu.speed / 1000}`)
        );
      }
      break;
    case "--homedir":
      console.log(os.homedir());
      break;
    case "--username":
      console.log(os.userInfo().username);
      break;
    case "--architecture":
      console.log(process.arch);
      break;
    default:
      console.log("Invalid input");
      break;
  }
}

export default getOSInfo;
