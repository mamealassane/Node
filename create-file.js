const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node ' ,function (err){
    if (err) {
        return console.log(err);
    }
    console.log('Hello Node');
}) 