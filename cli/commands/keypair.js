const chalk = require("chalk");
const BitFact = require("../../BitFact");
const Spinner = require("cli-spinner").Spinner;
const spinner = new Spinner(chalk.blue("Generating keys.."));
spinner.setSpinnerString(19);
const helpers = require("../helpers");

module.exports = {
  prompt: async () => {
    spinner.start();
    const keys = await new BitFact({}).createKeypair();
    spinner.stop();
    helpers.keypairDone(keys);
  },
};
