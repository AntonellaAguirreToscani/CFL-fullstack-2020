readlineSync = require('readline-sync');

let num1;
let num2;
let num3;

num1 = readlineSync.questionInt('Indique valor numero1: ');
num2 = readlineSync.questionInt('Indique valor numero2: ');
num3 = readlineSync.questionInt('Indique valor numero3: ');

if (num1 > num2 && num1 > num3){
    console.log('El PRIMER numero ingresado es el mayor= ', num1);
}else{
    if( num2 > num3){
        console.log('El SEGUNDO numero ingresado es el mayor= ', num2);
    }else{
        console.log('El tercer numero ingresado es el mayor= ', num3);
    
    }
}



