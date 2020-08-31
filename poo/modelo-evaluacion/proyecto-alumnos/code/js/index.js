"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var note_1 = require("./note");
var school_1 = require("./school");
var student_1 = require("./student");
var cfl = new school_1.School('CFL');
var invalidStudent = new student_1.Student(36637738, '', 'AguirreToscani', 'CFL2020', [new note_1.Note('PRIMER MODULO', 10), new note_1.Note('SEGUNDO MODULO', 10),
    new note_1.Note('TERCER MODULO', 10)]);
var newStudent = new student_1.Student(36637738, 'Antonella', 'AguirreToscani', 'CFL2020', [new note_1.Note('PRIMER MODULO', 10), new note_1.Note('SEGUNDO MODULO', 10),
    new note_1.Note('TERCER MODULO', 10)]);
cfl.addStudent(newStudent);
//Promedio general eligiendo alumno! 
console.log(cfl.getAverageStudent(36637738));
// promedio general de toda la clase!
console.log(cfl.getAllAverages());
// Si se ingresa un alumno sin nombre, se ejecuta el throw Error!
cfl.addStudent(invalidStudent);
