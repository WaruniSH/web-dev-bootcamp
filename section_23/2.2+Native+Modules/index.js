const fs = require("fs");

fs.writeFile("abc.txt", "Hello from waruni!", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 


  fs.readFile('./abc.txt', "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 

