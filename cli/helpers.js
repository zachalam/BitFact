const fs = require("fs");
const config = require("../config");
const chalk = require("chalk");
const { exit } = require("process");

const loadConfFile = () => {
  let rawdata = fs.readFileSync(config.CONFIG_FILE);
  return JSON.parse(rawdata);
};

const confFileExists = () => {
  return Boolean(fs.existsSync(config.CONFIG_FILE));
};

const errorExit = (msg) => {
    console.log(chalk.bold(chalk.red("Error! ")) + chalk.red(msg));
    exit();
};

const killForNoConf = () => {
  if (!confFileExists()) {
    errorExit(
      `Missing "${config.CONFIG_FILE}". Not found in current directory. Run: "bitfact setup"`
    );
  }
};

const stampDone = (hash, txid) => {
  if (!hash || !txid) errorExit("Could not write to Blockchain.");
  console.log("");
  console.log(chalk.green(chalk.bold("Success! Stamped on Blockchain.")));
  console.log("Hash: " + chalk.gray(chalk.bold(hash)));
  console.log("Txid: " + chalk.gray(chalk.bold(txid)));
};

const verifyDone = (status) => {
  if (status === undefined) errorExit("Could not read from Blockchain.");
  console.log("");
  console.log(chalk.gray(chalk.bold("Response received from Blockchain.")));
  console.log(
    "Stamped: " + chalk.bold(status ? chalk.green("YES") : chalk.red("NO"))
  );
};

module.exports = {
  confFileExists,
  errorExit,
  killForNoConf,
  loadConfFile,
  stampDone,
  verifyDone,
};
