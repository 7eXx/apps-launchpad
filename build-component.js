const fs = require('fs-extra');
const concat = require('concat');

build = async () => {
  const files = [
    './dist/apps-launchpad/runtime.js',
    './dist/apps-launchpad/polyfills.js',
    './dist/apps-launchpad/scripts.js',
    './dist/apps-launchpad/main.js'
  ];

  await fs.ensureDir('public');
  await concat(files, 'public/apps-launchpad.js');
}

build();
