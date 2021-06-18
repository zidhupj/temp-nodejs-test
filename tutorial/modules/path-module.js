const path = require('path')

console.log(path.sep);

const filePath = path.join('/tutorial','content','text.txt');
console.log(filePath);

//get the base name of the file from path
const base = path.basename(filePath);
console.log(base);

//To create the absolute path to the file
const absolute = path.resolve(__dirname,'tutorial','content','text.txt');
console.log(absolute);