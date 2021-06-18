//Modules

//importing values from other modules
const names = require('./1-names');
const sayHi = require('./2-utils');
const data = require('./2-alternative-flavor');

//function call
console.log('\nStart')
sayHi('sidhu');
sayHi(names.john);
sayHi(names.peter);
console.log(data);