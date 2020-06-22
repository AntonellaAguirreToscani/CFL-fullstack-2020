let readlineSync= require('readline-sync');

let numDeseado= readlineSync.questionInt('Indique Numero: ');

if (numDeseado>20){

    console.log('El Numero es Mayor a 20= '+ numDeseado);
}else{
        console.log('El numero es Menor o igual a 20= '+ numDeseado);

    }
