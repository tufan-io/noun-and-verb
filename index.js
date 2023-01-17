#!/usr/bin/env node
import { generatorHandler } from "@prisma/generator-helper";
import * as fs from "fs";
import * as path from "path";
import ora from "ora";
import { execa } from "execa";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let defaultOutput;

generatorHandler({
  onManifest() {
    defaultOutput = defaultOutput ?? process.cwd();
    const version = JSON.parse(
      fs.readFileSync("./package.json", "utf8")
    ).version;
    return {
      defaultOutput,
      requiresGenerators: ["prisma-client-js"],
      prettyName: `Noun & Verb - GraphQL API (${version} | API)`,
    };
  },
  async onGenerate(options) {
    try {
      let outputDir = path.resolve(
        options.generator.output?.value || defaultOutput
      );
      const file_rpc = path.resolve(`${outputDir}/.tmp/nv_rpc.json`);
      fs.mkdirSync(path.dirname(file_rpc), { recursive: true });
      fs.writeFileSync(file_rpc, JSON.stringify(options, null, 2), "utf8");
      const _exe = execa(
        `${__dirname}/bin/noun_and_verb`,
        [outputDir, file_rpc],
        { stdio: "pipe" }
      );
      _exe.stdout.pipe(process.stdout);
      _exe.stderr.pipe(process.stderr);
      await _exe;

      // if no errors found, run another install & format the source code.
      const spinner = ora();
      spinner.start(`installing dependencies`);
      await execa(`npm`, [`install`], { stdio: "pipe", cwd: outputDir });
      await execa(`npm`, [`run`, `format`], { stdio: "pipe", cwd: outputDir });
      spinner.succeed(`installed dependencies`);

      fs.rmSync(file_rpc);
    } catch (err) {
      // the deno executable prints the error, so we just silently exit here
      process.exit(-1);
    }
  },
});
