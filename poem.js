//exercise: write a poem.js that prints your poem in diffrent colors.
// each line should be a diffrent or random color.
  var colors = require('colors');
   var poem = ["hjkshk","bhhjdj","hjhjdksdj"];

   function makeRainbows(poem) {


     console.log(colors.green(poem[0]));
     console.log(colors.white(poem[1]));
     console.log(colors.yellow(poem[2]));

   }

setInterval(makeRainbows, 1000, poem);
