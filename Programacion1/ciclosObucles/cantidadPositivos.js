let readlineSync = require('readline-sync');

let contadorPositivos = 0;
let total= 0; 

let entero = readlineSync.questionInt('Ingrese un numero: ');

while( entero != 0){  
    
    if(entero>0){
        contadorPositivos ++;
    }   
    total++; 
    entero = readlineSync.questionInt('Ingrese un numero: ')
}

let porcentaje = (contadorPositivos*100)/total;

console.log(`Cantidad Positivos : ${contadorPositivos}. ${porcentaje}% Del Total`);