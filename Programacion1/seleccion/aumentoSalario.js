readlineSync = require('readline-sync');

let salario = readlineSync.questionInt('Ingrese salario del Empleado: ');
let aumentoSalario;

if(salario <= 15000){
    aumentoSalario = salario * 1.2;
    console.log('Tiene un aumento del 20%, va a cobrar: ', aumentoSalario);
}else{
    if(salario <= 20000){
        aumentoSalario = salario * 1.1;
        console.log('El aumento que le corresponde es del 10%:', aumentoSalario);
    }else{
        if(salario <= 25000){
            aumentoSalario = salario * 1.05,
            console.log('El aumento que le corresponde es de 5%: ', aumentoSalario);
        }else{
            console.log('No le corresponde Aumento, sigue cobrando: ', salario);
        }
    }
}     

