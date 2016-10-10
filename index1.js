var chalk = require('chalk');
function makeRainbows(string) {

  console.log("hello world");
  console.log(chalk.green(string));
  console.log(chalk.white(string));
  console.log(chalk.yellow(string));
  console.log(chalk.red(string));
  console.log(chalk.blue(string));
  console.log(chalk.green(string));

}
  for(var i = 2; i < process.argv.length; i++) {
    setInterval(makeRainbows, 5000, process.argv[i]);
}
