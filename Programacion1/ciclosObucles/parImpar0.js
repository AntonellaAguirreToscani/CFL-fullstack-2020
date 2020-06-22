let readlineSync = require('readline-sync');

let entero;

entero = readlineSync.questionInt('Ingrese un Numero al azar: ');

while (entero <= 0){
    console.log('Numero Invalido!');
    entero = readlineSync.questionInt('Ingrese un Numero al azar: ');

}

if (entero % 2 == 0){
    console.log('El Numero ingresado es PAR');
}else{
    console.log('El numero ingresado es IMPAR');
}


