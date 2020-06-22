"use-strict";
class Alumno {
    constructor(nombre, nota1, nota2, nota3) {
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
}

let botonAgregar = document.getElementById('btn-agregar');
let botonPromediar = document.getElementById('btn-promediar');
let alumnos = [];

botonAgregar.addEventListener('click', function (e) {
    let miH2 = document.getElementById('h2');
    miH2.classList.add('ver');
    agregarAlumno()
});

botonPromediar.addEventListener('click',sacarPromedio);

function agregarAlumno() {

    alumnos.push(new Alumno(document.getElementById('nombre').value,
                            Number( document.getElementById('nota-1').value),
                            Number(document.getElementById('nota-2').value),
                            Number( document.getElementById('nota-3').value)));
    let lista = document.getElementById('lista');
    let nuevoAlumno = document.createElement('li');
    nuevoAlumno.innerHTML = `NOMBRE: ${alumnos[alumnos.length-1].nombre} -- PRIMER-C:${alumnos[alumnos.length-1].nota1} -- SEG-C:${alumnos[alumnos.length-1].nota2} -- TERCER-C:${alumnos[alumnos.length-1].nota3}`
    lista.appendChild(nuevoAlumno);
    console.log(alumnos);
}

function sacarPromedio() {
    let promedio;
    let miDiv = document.getElementById('promedio');
    let alumnoElegido = document.getElementById('alumno').value;
    for( let i =0; i<alumnos.length;i++){
        if(alumnoElegido==alumnos[i].nombre){
           promedio = (alumnos[i].nota1 + alumnos[i].nota2 + alumnos[i].nota3)/3;
           let nuevoProm = document.createElement('h3');
           nuevoProm.innerHTML = `AlUMNO: ${alumnos[i].nombre}------ PROMEDIO: ${ promedio.toFixed(2)}`;
           miDiv.appendChild(nuevoProm);
        }
    }
}    
   
    
    