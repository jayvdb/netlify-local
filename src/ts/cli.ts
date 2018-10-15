#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import * as program from "commander";

import { Netlify } from "./netlify";
import { Server } from "./server";
import { Webpack } from "./webpack";
import { parseNetlifyConfig, parseWebpackConfig } from "./config";

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf8"));

program.version(packageJson.version);

program
  .option("-n --netlify <path>", "path to `netlify.toml` file (default `./netlify.toml`)")
  .option("-w --webpack <path>", "path to webpack config file (default `./webpack.config.js`)")
  .option("-p --port <port>", "port to serve from (default: 9000)")

program
  .description("Locally emulate Netlify services")
  .action(() => {
    (async () => {
      const netlifyConfig = parseNetlifyConfig(program.netlify);
      const webpackConfig = parseWebpackConfig(program.webpack);

      const server = new Server(netlifyConfig, program.port || 9000);

      await server.listen();

      if(webpackConfig) {
        const webpack = new Webpack(webpackConfig);
        webpack.watch();
      }
    })()
      .catch(error => {
        console.log(error)
        process.exit(1);
      })
  });

program.parse(process.argv);
