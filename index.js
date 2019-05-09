var fs = require('fs');
//var StatMode = require('stat-mode');



/*fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
})*/

fs.readdir('./','utf-8', function(err, files) {
    
   // newFile = files;
    console.log(files);
    //return newFile;
    fs.writeFile('./asd.txt', files, function(err) {
        if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
        console.log('Zapisano!');
    });
    fs.readFile('./asd.txt', 'utf-8',function(err, data) {
        console.log(data);
        
    })
})




