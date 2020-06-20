let readlineSync = require('readline-sync');

let altura;
let alturaPermitida;

alturaPermitida = 1.30;
altura = readlineSync.questionFloat('Ingrese su Altura: ');

if(altura >= alturaPermitida){
    console.log('Usted puede pasar a la Montaña Rusa');
}else{
    console.log('No puede ingresar, mide menos de 1.30 mts');
}