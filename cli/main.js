#! /usr/bin/env node

const { program } = require("commander");
const pjson = require("../package.json");
const setup = require("./setup");

program
  .version(pjson.version)
  .option("-c, --config <path>", "set config path. defaults to ./bitfact.conf");

program
  .command("setup")
  .description("run setup commands for all envs")
  .option("-provider, --setup_mode [mode]", "Which setup mode to use")
  .option("-privateKey, --setup_mode [mode]", "Which setup mode to use")
  .option("-options, --setup_mode [mode]", "Which setup mode to use")
  .action(function (env, options) {
    setup.prompt();
  });

program.parse(process.argv);
