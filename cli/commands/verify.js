const chalk = require("chalk");
const BitFact = require("../../BitFact");
const helpers = require("../helpers");
const Spinner = require("cli-spinner").Spinner;
const spinner = new Spinner(chalk.blue("Verifying with chain.."));
spinner.setSpinnerString(19);

module.exports = {
  prompt: async (env) => {

    helpers.killForNoConf();
    if (!env.file && !env.text) helpers.errorExit("Must supply either -f <file> or -t <text> param.");
    if (env.file && env.text) helpers.errorExit("Cannot supply both -f <file> and -t <text> params.");
    const bitfact = new BitFact(helpers.loadConfFile());
    
    if (env.file) {
      // bitfact stamp file.
      spinner.start();
      const isStamped = await bitfact.verifyFile(env.file, env.tx);
      spinner.stop();
      helpers.verifyDone(isStamped);
    }

    if (env.text) {
      // bitfact stamp text
      spinner.start();
      const isStamped = await bitfact.verifyText(env.text, env.tx);
      spinner.stop();
      helpers.verifyDone(isStamped);
    }

  },
};
