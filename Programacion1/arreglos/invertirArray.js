let readlineSync = require('readline-sync');

let InvertirArreglo =(array)=>{
    invertido = [];

    let j=array.length-1;
    for(let i = 0; i<array.length; i++){
        invertido[i] = array[j];
        j--;
    };

    return invertido;    
};

let dimension = readlineSync.questionInt('Ingrese Dimension de su Array: ');
let numeros = [dimension];

for (let i = 0; i<dimension; i++){
 numeros[i] = readlineSync.questionInt('Ingrese Numero: ');
};
    

console.log(InvertirArreglo(numeros));