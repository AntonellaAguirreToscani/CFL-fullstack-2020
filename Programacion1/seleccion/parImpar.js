readlineSync = require('readline-sync');


let valorIngresado = readlineSync.questionInt('ingrese un numero al azar: ');


if (valorIngresado == 0){
    console.log(`Numero Ingresado = ${valorIngresado} = "0"`);
}else{
    if( valorIngresado % 2 == 0){
        console.log(`Numero Ingresado = ${valorIngresado} = PAR`);
    }else{
        console.log(`Numero Ingresado = ${valorIngresado} = IMPAR`);
    }
}
