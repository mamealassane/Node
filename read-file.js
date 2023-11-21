const fs = require('fs');

fs.readFile('hello.txt', function(err, data){
    if (err) {
        console.error(err);
    }
    console.log(data);

})