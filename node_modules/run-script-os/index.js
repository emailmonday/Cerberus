#! /usr/bin/env node
"use strict";
const path = require("path");

if (!process.env["npm_config_argv"]) {
  console.log("This is meant to be run from within npm script. See https://github.com/charlesguse/run-script-os");
  return;
}

const spawn = require("child_process").spawn;

// Switch to linux platform if cygwin/gitbash detected (fixes #7)
// Allow overriding this behavior (fixes #11)
let platform = process.platform;
if (process.env.RUN_OS_WINBASH_IS_LINUX) {
  let shell = process.env.SHELL || process.env.TERM;
  shell = shell && shell.match("bash.exe") ? "bash.exe" : shell;
  platform = shell && ["bash.exe", "cygwin"].includes(shell) ? "linux" : process.platform;
}

const scripts = require(path.join(process.cwd(), "package.json")).scripts;

let npmArgs = JSON.parse(process.env["npm_config_argv"]);
let options = npmArgs.original;
if (!(options[0] === "run" || options[0] === "run-script")) {
  options.unshift("run");
}

// Check for yarn without install command; fixes #13
if (process.env.npm_config_user_agent.includes('yarn') && !options[1]) options[1] = 'install';

let osCommand = `${options[1]}:${platform}`;
let foundMatch = true;

if (!(osCommand in scripts)) {
  foundMatch = false;
  let regex = new RegExp(`^(${options[1]}):([a-zA-Z0-9-]*:)*(${platform})(:[a-zA-Z0-9-]*)*$`, "g");
  for (let command in scripts) {
    if (command.match(regex)) {
      osCommand = command;
      foundMatch = true;
      break;
    }
  }
}

// Check for :windows alias; fixes #3
if (!foundMatch && (`${options[1]}:windows` in scripts) && platform === 'win32') {
  osCommand = `${options[1]}:windows`;
  foundMatch = true;
}

// Check for :macos alias; fixes #3
if (!foundMatch && (`${options[1]}:macos` in scripts) && platform === 'darwin') {
  osCommand = `${options[1]}:macos`;
  foundMatch = true;
}

// Check for :nix script; fixes #3
if (!foundMatch && (`${options[1]}:nix` in scripts) && ['aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', 'android'].includes(platform)) {
  osCommand = `${options[1]}:nix`;
  foundMatch = true;
}

// Check for :default script if no exact match; fixes #3
if (!foundMatch && (`${options[1]}:default` in scripts)) {
  osCommand = `${options[1]}:default`;
  foundMatch = true;
}

options[1] = osCommand;

let platformSpecific;
if (platform === "win32") {
  platformSpecific = spawn("npm.cmd", options, { shell: true, stdio: "inherit"});
} else {
  platformSpecific = spawn("npm", options, { shell: true, stdio: "inherit" });
}

platformSpecific.on("exit", (code) => {
  process.exit(code);
});
