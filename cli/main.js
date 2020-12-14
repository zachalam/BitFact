#! /usr/bin/env node

const { program } = require("commander");
const chalk = require("chalk");

const BitFact = require("../BitFact");
const Spinner = require("cli-spinner").Spinner;
const spinner = new Spinner(chalk.blue("confirming with blockchain.."));
spinner.setSpinnerString(19);

const pjson = require("../package.json");
const helpers = require("./helpers");
const setup = require("./setup");

program.version(pjson.version, "-v");

program
  .command("setup")
  .description("run setup command")
  .action(() => {
    setup.prompt();
  });

program
  .command("keypair")
  .description("generates a keypai")
  .action(async () => {
    const bitfact = new BitFact({});
    console.log(await bitfact.createKeypair());
  });

program
  .command("stamp")
  .description("stamp text")
  .option("-f, --file <type>", "denotes filepath provided")
  .option("-t, --text <type>", "denotes raw text provided")
  .option("-m, --memo <type>", "denotes memo string")
  .action(async (env, options) => {
    helpers.killForNoConf();
    if (env.file && env.text) errorExit("Cannot supply both -f and -t params.");
    const bitfact = new BitFact(helpers.loadConfFile());

    if (env.file) {
      // bitfact stamp file.
      spinner.start();
      const stamped = await bitfact.stampFile(env.file, env.memo);
      spinner.stop();
      helpers.stampSuccess(stamped.hash, stamped.txid);
    }

    if (env.text) {
      // bitfact stamp text
      spinner.start();
      const stamped = await bitfact.stampText(env.text, env.memo);
      spinner.stop();
      helpers.stampSuccess(stamped.hash, stamped.txid);
    }
  });

program.parse(process.argv);
