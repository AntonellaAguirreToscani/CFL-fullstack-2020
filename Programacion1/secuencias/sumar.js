//Suma con ReadLine-Sync
let readlineSync = require('readline-sync');
let primerNumero = readlineSync.questionInt('Ingresar primer numero:');
console.log('El primer numero es: ',primerNumero);
let segundoNumero = readlineSync.questionInt('Ingresar segundo numero:');
console.log('El segundo numero es: ', segundoNumero);
let resultado = ('total: '+(primerNumero+segundoNumero));
console.log('Total:'+ resultado);

