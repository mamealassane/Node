const generator = require('generate-password');

const password = generator.generate({
    length : 15, 
    numbers : true
})

console.log(password)