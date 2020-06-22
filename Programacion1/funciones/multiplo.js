let readlineSync = require('readline-sync');

let esMultiplo = (dividendo, divisor) => {
    return (dividendo % divisor == 0);
};

let num1 = readlineSync.questionInt('Ingrese dividendo: ');
let num2 = readlineSync.questionInt('Ingrese divisor: ');

console.log(esMultiplo(num1, num2));
