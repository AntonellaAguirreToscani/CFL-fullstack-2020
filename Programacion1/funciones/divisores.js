let readlineSync = require('readline-sync');

let esMultiplo = (dividendo, divisor) => {
    if (dividendo % divisor == 0) {
        return true;
    } else {
        return false;
    }
};

let cantidadDivisores = (num) => {
    while (num > 0) {
        divisores = 0;
        for (let i = 1; i <= num; i++) {
            if (esMultiplo(num, i)) {
                divisores++;
            }
        }
        return `cantidad de divisores: ${divisores}`;
    }
};


let numeroI = readlineSync.questionInt('Ingrese numero: ');

console.log(cantidadDivisores(numeroI));