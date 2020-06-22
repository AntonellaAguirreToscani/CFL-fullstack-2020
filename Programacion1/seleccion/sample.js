let readlineSync = require('readline-sync');

let peso = readlineSync.questionFloat('Indique su peso: ');
let altura = readlineSync.questionFloat('Ingrese su altura');

if (peso<80 && altura>1.60){
    console.log ('Su indice de masa corporal es saludable');
}else{
    console.log ('Su indice de masa corporal NO es saludable');
}
