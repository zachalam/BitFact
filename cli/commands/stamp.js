const chalk = require("chalk");
const BitFact = require("../../BitFact");
const helpers = require("../helpers");
const Spinner = require("cli-spinner").Spinner;
const spinner = new Spinner(chalk.blue("Stamping on chain.."));
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
      const stamped = await bitfact.stampFile(env.file, env.memo);
      spinner.stop();
      helpers.stampDone(stamped.hash, stamped.txid);
    }

    if (env.text) {
      // bitfact stamp text
      spinner.start();
      const stamped = await bitfact.stampText(env.text, env.memo);
      spinner.stop();
      helpers.stampDone(stamped.hash, stamped.txid);
    }

  },
};
