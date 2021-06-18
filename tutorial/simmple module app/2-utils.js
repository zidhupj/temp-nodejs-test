//Module where functionality is implemented

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

//exporting values to other modules
module.exports = sayHi;