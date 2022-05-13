#!/usr/bin/env node
import { generatorHandler } from "@prisma/generator-helper";
import * as fs from "fs";
import * as path from "path";
import { execa } from "execa";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let defaultOutput;

generatorHandler({
  onManifest() {
    defaultOutput = defaultOutput ?? process.cwd();
    return {
      defaultOutput,
      requiresGenerators: ['prisma-client-js'],
      prettyName: "Noun & Verb - GraphQL generator for Prisma",
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
      const _exe = execa(`${__dirname}/bin/noun_and_verb`, [outputDir, file_rpc], { stdio: 'pipe'});
      _exe.stdout.pipe(process.stdout);
      _exe.stderr.pipe(process.stderr);
      await _exe;
      fs.rmSync(file_rpc);
    } catch (err) {
      console.log(err);
      // the deno executable prints the error, so we just silently exit here
      process.exit(-1);
    }
  },
});
