let readlineSync = require('readline-sync');

let cargarArray = (array, length)=>{
    for(let i = 0; i < length; i++){
        array[i]= readlineSync.questionInt('Ingrese un Numero: ');
    }   
};

let calcularProductoEscalar = (array1, array2)=>{
    let productoEscalar = 0;
    for(i = 0; i < array1.length; i++){
        productoEscalar += array1[i]*array2[i];
    }
    return `Total Producto Escalar = ${productoEscalar}`;
};

let longitud = readlineSync.questionInt('Ingrese longitud deseada para sus Arreglos: ');
let numeros1 = [];
let numeros2 = [];

cargarArray(numeros1, longitud);
cargarArray(numeros2, longitud);
console.log(calcularProductoEscalar(numeros1, numeros2));