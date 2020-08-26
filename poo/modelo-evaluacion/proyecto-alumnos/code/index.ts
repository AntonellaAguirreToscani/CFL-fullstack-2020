import { Note } from './note';
import {School} from './school';
import { Student } from './student';

let cfl : School= new School('CFL');
let invalidStudent: Student = new Student(36637738,'','AguirreToscani','CFL2020',[new Note('PRIMER MODULO',10),new Note('SEGUNDO MODULO',10)
                                                                                        ,new Note('TERCER MODULO',10)]);
let newStudent: Student = new Student(36637738,'Antonella','AguirreToscani','CFL2020',[new Note('PRIMER MODULO',10),new Note('SEGUNDO MODULO',10)
                                                                                        ,new Note('TERCER MODULO',10)]);
 cfl.addStudent(newStudent);
//Promedio general eligiendo alumno! 
console.log(cfl.getAverageStudent(36637738));
// promedio general de toda la clase!
console.log(cfl.getAllAverages());
// Si se ingresa un alumno sin nombre, se ejecuta el throw Error!
cfl.addStudent(invalidStudent);

