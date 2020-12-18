const chalk = require("chalk");
const BitFact = require("../../BitFact");
const helpers = require("../helpers");
const Spinner = require("cli-spinner").Spinner;
const spinner = new Spinner(chalk.blue("Verifying with chain.."));
spinner.setSpinnerString(19);

module.exports = {
  prompt: async (env) => {
    helpers.killForNoConf();
    if (!env.file && !env.text)
      helpers.errorExit("Must supply either -f <file> or -t <text> param.");
    if (env.file && env.text)
      helpers.errorExit("Cannot supply both -f <file> and -t <text> params.");
    const bitfact = new BitFact(helpers.loadConfFile());

    if (env.file) {
      // bitfact verify file.
      spinner.start();

      try {
        const isStamped = await bitfact.verifyFile(env.file, env.tx);
        helpers.verifyDone(isStamped);
      } catch (e) {
        helpers.errorExit(e);
      }

      spinner.stop();
    }

    if (env.text) {
      // bitfact verify text
      spinner.start();

      try {
        const isStamped = await bitfact.verifyText(env.text, env.tx);
        helpers.verifyDone(isStamped);
      } catch (e) {
        helpers.errorExit(e);
      }
      spinner.stop();
    }
  },
};
