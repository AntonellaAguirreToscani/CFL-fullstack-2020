function sumar(num1,num2){
  return num1+num2;
}
console.log('la Suma es igual a:'+sumar(3,4));

//Tambien se puede hacer de la siguiente manera

let readlineSync = require('readline-sync');
let primerNumero= readlineSync.questionInt('ingresar primer numero');
let segundoNumero= readlineSync.questionInt('ingresar segundo numero');
console.log('El resultado de la suma es:'+sumar(primerNumero,segundoNumero));

//ejemplo del auto de carreras con FOR

let total = 0;
for(let iterador =0; iterador<4; iterador++){
    
    total+= readlineSync.questionInt('Tiempo vuelta :');
}
console.log('El tiempo total de las vueltas es: '+ total);
console.log('Promedio Tiempo por vuelta: '+ total/4);
