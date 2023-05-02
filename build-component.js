const fs = require('fs');
const fsExtra = require('fs-extra');
const concat = require('concat');

build = async () => {
  const runtimePath = './dist/apps-launchpad/runtime.js';
  const polyfillsPath = './dist/apps-launchpad/polyfills.js';
  const scriptPath = './dist/apps-launchpad/scripts.js';
  const mainPath = './dist/apps-launchpad/main.js';

  const files = [];
  if (fs.existsSync(runtimePath)) {
    files.push(runtimePath);
  }

  if (fs.existsSync(polyfillsPath)) {
    files.push(polyfillsPath);
  }

  if (fs.existsSync(scriptPath)) {
    files.push(scriptPath);
  }

  if (fs.existsSync(mainPath)) {
    files.push(mainPath);
  }

  await fsExtra.ensureDir('public');
  await concat(files, 'public/apps-launchpad.js');
}

updateReadme = async () => {
  const readmePath = './README.md';
  if (fs.existsSync(readmePath)) {
    await fsExtra.copy(readmePath, 'public/README.md');
  }
}

build();
updateReadme();
