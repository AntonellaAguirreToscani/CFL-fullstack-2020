let readlineSync = require('readline-sync');

let nota1;
let nota2;
let nota3;
let alumno;
let notaFinal;

alumno = readlineSync.question('Alumno: ');

while(alumno!==""){
    nota1 = readlineSync.questionInt('Evaluacion Practica =');
    nota2 = readlineSync.questionInt('Resolucion de Problemas =');
    nota3 = readlineSync.questionInt('Evaluacion Teorica =');
 if(nota1, nota2, nota3 > 10){
    console.log('Usted ingreso alguna nota invalida.');
     }else{
     notaFinal = (nota1*0.1)+(nota2*0.5)+(nota3*0.4);
     console.log('La Nota final del Alumno es = ', notaFinal);
    }
    alumno = readlineSync.question('Alumno: ');
}
