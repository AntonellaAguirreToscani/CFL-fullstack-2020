let readlineSync = require('readline-sync');
                        
let cargarAlumnos = (arrayAlumnos,length,arrayNota1,arrayNota2,arrayNota3 )=>{
    
    for(let i = 0; i < length; i++){
        arrayAlumnos[i] = readlineSync.question('Alumno: ');
        arrayNota1[i] = readlineSync.questionInt('Nota del 1.Cuatrimestre:');
        arrayNota2[i]= readlineSync.questionInt('Nota del 2.Cuatrimestre:');
        arrayNota3[i]= readlineSync.questionInt('Nota del 3.Cuatrimestre: ');
    }
        
};

let promedioAlumno = (arrayAlumnos,alumno) =>{
    
    let promedio = 0;
    for(i = 0; i< arrayAlumnos.length; i++){
        if ( arrayAlumnos[i] == alumno){
         promedio = (nota1C[i] + nota2C[i] + nota3C[i]) /3;
        }
    }
    
    if (promedio>0){
        return `El promedio Anual del Alumno es: ${promedio}`;
    }else{
        return 'ERR!! Alumno no encontrado'
    }
};

let listaAlumnos = [];
let nota1C = [];
let nota2C = [];
let nota3C = [];

let longitud = readlineSync.questionInt('Ingrese cantidad de Alumnos: ');

cargarAlumnos(listaAlumnos, longitud, nota1C, nota2C, nota3C);

let alumno = readlineSync.question('Ingrese Alumno a Promediar:');

while(alumno != ""){
    console.log(promedioAlumno(listaAlumnos, alumno));
    alumno = readlineSync.question('Ingrese Alumno a Promediar:');
};





