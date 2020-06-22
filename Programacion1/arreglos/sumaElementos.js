let readlineSync = require('readline-sync');

let longitud = readlineSync.questionInt('Ingrese long. de su Array : ');

let sumaElementos = new Array(longitud)

let total = 0;
for(let i = 0 ; i < longitud; i++){
    sumaElementos[i] = readlineSync.questionInt('Ingrese un numero: ');
    total += sumaElementos[i];
};

console.log('El total es de:', total);