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
  if (!confFileExists()) {
    console.log(chalk.bold(chalk.red("Error! ")) + chalk.red(msg));
    exit();
  }
};

const killForNoConf = () => {
  if (!confFileExists()) {
    errorExit(
      `Missing "${config.CONFIG_FILE}". Not found in current directory. Run: "bitfact setup"`
    );
  }
};

const stampSuccess = (hash, txid) => {
  if (!hash || !txid) errorExit("Could not write to Blockchain.");
  console.log("");
  console.log(chalk.green(chalk.bold("Success! Stamped on Blockchain:")));
  console.log("Hash: " + chalk.gray(chalk.bold(hash)));
  console.log("Txid: " + chalk.gray(chalk.bold(txid)));
};

const getExplorerUrl = (txid, chain) => {
  if (chain === "ropsten") return "https://ropsten.etherscan.io/tx/" + txid;

  // default to main
  return "https://etherscan.io/tx/" + txid;
};

module.exports = {
  confFileExists,
  errorExit,
  killForNoConf,
  loadConfFile,
  stampSuccess,
  getExplorerUrl,
};
