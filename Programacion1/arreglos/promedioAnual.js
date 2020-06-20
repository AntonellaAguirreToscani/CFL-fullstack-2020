let readlineSync = require('readline-sync');
                        
let cargarAlumnos = (length)=>{
    let array = [];
    for(let i = 0; i < length; i++){
        let alumno= readlineSync.question('Alumno: ');
        let nota1C= readlineSync.questionInt('Nota del 1.Cuatrimestre: ');
        let nota2C= readlineSync.questionInt('Nota del 2.Cuatrimestre: ');
        let nota3C= readlineSync.questionInt('Nota del 3.Cuatrimestre: ');
        array[i]= {alumno, nota1C, nota2C, nota3C};
    }
    return array;
     
};

let promedioAlumno = (array,alumno) =>{
    
    let promedio = 0;
    for(i = 0; i< array.length; i++){
        if ( array[i].alumno == alumno){
         promedio = (array[i].nota1C + array[i].nota2C + array[i].nota3C) /3;
        }
    }
    
    if (promedio>0){
        return `El promedio Anual del Alumno es: ${promedio}`;
    }else{
        return 'ERR!! Alumno no encontrado'
    }
};


let longitud = readlineSync.questionInt('Ingrese cantidad de Alumnos: ');

let listaAlumnos= cargarAlumnos(longitud);

let alumno = readlineSync.question('Ingrese Alumno a Promediar: ');

while(alumno != ""){
    console.log(promedioAlumno(listaAlumnos, alumno));
    alumno = readlineSync.question('Ingrese Alumno a Promediar:');
};