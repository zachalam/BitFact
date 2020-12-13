// creates a configuration file.
const prompts = require("prompts");
const chalk = require("chalk");
const fs = require("fs");

const BitFact = require("../BitFact");
const config = require("../config");
const { exit } = require("process");
const bitfact = new BitFact({});

const questions = [
  {
    type: "text",
    name: "provider",
    message: "Enter a provider URL.",
    initial: "https://eth.infura.io/v2/01Grse32",
  },
  {
    type: "text",
    name: "privateKey",
    message: "Enter a private key (pre-funded with ETH).",
    initial: "67ccc16df9e7581ec11e7b413bad46470165629cf",
  },
  {
    type: "select",
    name: "options",
    message: "Which network are you using?",
    choices: [
      { title: "Ethereum (mainnet)", value: { chain: "mainnet" } },
      { title: "Testnet (ropsten)", value: { chain: "ropsten" } },
    ],
  },
];

module.exports = {
  prompt: async () => {
    // verify file does not already exist.
    if (fs.existsSync(config.CONFIG_FILE)) {
      console.log(
        chalk.red(
          `Config file already exists, "${config.CONFIG_FILE}". You must manually remove this file before proceeding.`
        )
      );
      exit();
    }
    // proceed with creating file
    const response = await prompts(questions);
    const data = JSON.stringify(response);
    fs.writeFileSync(config.CONFIG_FILE, data);
    console.log(chalk.green("Setup file created at: " + config.CONFIG_FILE));
  },
};