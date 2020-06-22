let readlineSync = require('readline-sync');

let valor = readlineSync.questionInt('Ingrese un Numero: ');
let mayor = valor;

if (valor == 0){
    console.log('ERROR!');
}else{
 while(valor != 0){
  valor = readlineSync.questionInt('Ingrese un Numero: '); 

   if(valor>mayor){
            mayor = valor;
        }
    } 
    console.log('El mayor es: ', mayor);
}

  
