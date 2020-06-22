let readlineSync = require('readline-sync');

let identificarSignos =(array)=>{
    let positivos = 0;
    let negativos = 0;
    let cero = 0;
    for(let i = 0; i< array.length; i++){
        if(array[i] > 0){
            positivos++;
        }else{
            if(array[i] < 0){
                negativos++;
            }else{
                cero++;
            }
        }
    }
    return `Cant. Positivos: ${positivos}. Cant Neg: ${negativos}. Cant."0": ${cero}`;
};

let dimension = readlineSync.questionInt('Ingrese la dimension de su Array: ');
let numeros = [dimension];

for( let i = 0; i<dimension; i++){
    numeros[i] = readlineSync.questionInt('Ingrese Numero (+,-,0): ');
};   

console.log(identificarSignos(numeros));
