

// make the program automatically print the lines bellow every 1 secend
  var colors = require('colors');

function makeRainbows(string) {

  console.log("hello world");
  console.log('colors'.green(string));
  console.log('colors'.white(string));
  console.log('colors'.yellow(string));
  console.log('colors'.red(string));
  console.log('colors'.blue(string));
  console.log('colors'.green(string));

}
  for(var i = 2; i < process.argv.length; i++) {
    setInterval(makeRainbows, 5000,process.argv[i]);
}
