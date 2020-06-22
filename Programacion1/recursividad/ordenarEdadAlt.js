let readlineSync = require('readline-sync');

class Persona {
    constructor(Nombre, Edad, Altura) {
        this.nombre = Nombre;
        this.edad = Edad;
        this.altura = Altura;
    }
};

function cargarPersonas(length) {
    let personas = [];
    for (let i = 0; i < length; i++) {
        personas.push(new Persona
            (readlineSync.question('Nombre: '),
                readlineSync.questionInt('Edad: '),
                readlineSync.questionFloat('Altura: ')));
    }
    return personas;
};

function intercambiar(array, pos1, pos2) {
    let aux = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = aux;
};

//Utilicé el metodo SELECTION - SORT!
function ordenarArray (array) {
    for (let i = 0; i < array.length; i++) {
        let menor = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[menor].edad == array[j].edad) {
                (array[menor].altura > array[j].altura) ? menor = j : menor = menor;
            } else {
                if (array[menor].edad > array[j].edad) {
                    menor = j;
                }
            }
        }
        intercambiar(array, i, menor);
    }
    return array;
};

//ejemplo de funcion .sort
//  let ListaOrdenada = listaPersonas.sort((a, b) => a.edad - b.altura);

let cantElementos = readlineSync.questionInt('Cuantas personas va a cargar? :');
let listaPersonas = cargarPersonas(cantElementos);
console.log('ORDENADO: ',ordenarArray(listaPersonas));


