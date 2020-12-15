#! /usr/bin/env node

const { program } = require("commander");
const BitFact = require("../BitFact");

const pjson = require("../package.json");
const setup = require("./commands/setup");
const stamp = require("./commands/stamp");
const verify = require("./commands/verify");

program.version(pjson.version, "-v");

program
  .command("setup")
  .description("run setup command")
  .action(() => {
    setup.prompt();
  });

program
  .command("keypair")
  .description("generates a keypair")
  .action(async () => {
    const bitfact = new BitFact({});
    console.log(await bitfact.createKeypair());
  });

program
  .command("stamp")
  .description("stamp text or files")
  .option("-f, --file <type>", "denotes filepath provided")
  .option("-t, --text <type>", "denotes raw text provided")
  .option("-m, --memo <type>", "denotes memo string")
  .action(async (env) => {
    stamp.prompt(env);
  });

program
  .command("verify")
  .description("verify text or files")
  .option("-f, --file <type>", "denotes filepath provided")
  .option("-t, --text <type>", "denotes raw text provided")
  .requiredOption("-tx, --tx <type>", "denotes transaction id.")
  .action(async (env) => {
    verify.prompt(env);
  });

program.parse(process.argv);
