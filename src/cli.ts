const program = require('commander');
const pkg = require('../package.json');
const { translate } = require('./main.ts');

program
  .version(pkg.version)
  .name('fy')
  .usage('<English>')
  .arguments('<English>')
  .action(function (english: string) {
    translate(english)
  });

program.parse(process.argv);
