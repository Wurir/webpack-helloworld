console.log('webpack')
console.log('webpack server dziala!');

const getCurrentDate = require('./getDate.js')

const data = getCurrentDate()
console.log(data.getFullYear());
