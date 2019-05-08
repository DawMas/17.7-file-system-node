var fs = require('fs');
//var StatMode = require('stat-mode');

var newFile;

/*fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
})*/

fs.readdir('./node_modules','utf-8', function(err, files) {
    
    newFile = files;
    console.log(newFile);
    //return newFile;
    fs.writeFile('./asd.txt', newFile, function(err) {
        if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
        console.log('Zapisano!');
    });
})
fs.readFile('./asd.txt', 'utf-8',function(err, data) {
    console.log(data);
    
})



