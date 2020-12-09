//Sync

// var fs = require('fs');
// var readMe = fs.readFileSync('planet.txt', 'utf8');
// console.log(readMe);

//Async
var fs = require('fs');

fs.readFile('planet.txt', (err,data) => {
    if (err) {
    console.log(err);
    } else {
        console.log(data.toString())
    };
})