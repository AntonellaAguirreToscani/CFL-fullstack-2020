let readlineSync = require('readline-sync');

let numeros1 = [];
let numeros2 = [];
let suma = [];

for( let i = 0; i<6; i++){
    numeros1[i] = readlineSync.questionInt('Ingrese un numero V1:');
};

for(let i = 0; i<6; i++){
    numeros2[i] = readlineSync.questionInt('Ingrese un Numero V2:');
};

for(let i = 0; i< 6; i++){
    suma[i] = numeros1[i]+ numeros2[i];
};

console.log(numeros1);
console.log(numeros2);
console.log(suma);
