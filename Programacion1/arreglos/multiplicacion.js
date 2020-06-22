let cargarArreglo = (length) => {
    let array = new Array(length);
    for (let i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * 10);
    }
    return array;
};


let multiplicarArreglos = (array1, array2) => {
    let resultado = [];
    for (let i = 0; i < array1.length; i++) {
        resultado[i] = array1[i] * array2[i];
    }
    return resultado;
};


let numeros1 = cargarArreglo(3);
let numeros2 = cargarArreglo(3);
let numeros3 = cargarArreglo(3);
let numeros4 = cargarArreglo(3);

let resultado1 = multiplicarArreglos(
    multiplicarArreglos(numeros1, numeros2),
    multiplicarArreglos(numeros3, numeros4));

console.log(numeros1, numeros2, numeros3, numeros4);
console.log(resultado);