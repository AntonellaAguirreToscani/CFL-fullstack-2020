let readlineSync = require('readline-sync');

let numero1 = readlineSync.questionInt('Ingrese Primer Numero: ');
let numero2 = readlineSync.questionInt('Ingrese Segundo Numero: ');

let total=0;
for(numero1; numero1 <= numero2; numero1++){
    total= total + numero1;
}

console.log('El total de la suma es:', total);


