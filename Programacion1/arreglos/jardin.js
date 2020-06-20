let readlineSync = require('readline-sync');

let cargarJardin = (length) => {
    let bigArray = [];
    for (let i = 0; i < length; i++) {
        let sala = readlineSync.question('Nombre de la Sala: ');
        let salaLength = readlineSync.questionInt('Capacidad de la Sala: ');
        bigArray[i] = { sala, salaLength };
    }
    return bigArray;
};


let determinarAula = (array, bigArray) => {

    for (let i = 0; i < bigArray.length; i++) {

        if (array.length <= bigArray[i].salaLength) {
            return `Sala Asignada: ${bigArray[i].sala}`;
        }

    }
}


let longitudJardin = 3;
let jardin = cargarJardin(longitudJardin);

let alumnos = readlineSync.questionInt('Cantidad de alumnos: ');
let curso = new Array(alumnos);
console.log(jardin);
console.log(determinarAula(curso, jardin));


let ordenarArray =(array)=>{
    let auxiliar=[];
    let j = array[0]+1;
    for (let i= 0; i<array.length; i++){
        if ( array[i]>array[j]){
            auxiliar[i] = array[j];
        }else{
            auxiliar[i] = array[i];
        }

        j++;
    }
    return auxiliar;
};