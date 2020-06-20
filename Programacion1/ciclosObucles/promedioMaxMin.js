let readlineSync = require('readline-sync');

let numeroI;
let mayor = 0;
let menor= 0;
let contador = 0;
let total = 0;

numeroI = readlineSync.questionInt('Ingrese un numero: ');

while(numeroI != 0){
    
 if( numeroI> mayor){
    mayor = numeroI;
    }else{
        if( numeroI< menor){
        menor = numeroI;
        }
    } 
    contador++;
    total += numeroI;

    numeroI = readlineSync.questionInt('Ingrese un numero: ');
}

console.log(`Maximo Ingresado = ${mayor}. Menor Ingresado = ${menor} `);
console.log('La Media de valores ingresados es =', total/contador);