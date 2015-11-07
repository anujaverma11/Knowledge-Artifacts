
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      line = line.split(',');
      number=line[0];
      multiple=line[1];
      counter = false;
      while (counter === false){
          multiple = multiple*2;
          if(multiple>=number)
              {
                  counter = true;
              }

        }

      console.log(multiple+'\n');
      }
});


