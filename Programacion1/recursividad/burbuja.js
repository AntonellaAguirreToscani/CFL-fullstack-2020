function cargarArreglo (longitud){
    let array=[];
    let tope=10;
    for(let i=0;i<longitud;i++){
        array.push(Math.floor(Math.random()*tope));
    }
    return array;
};

function intercambiar (array,pos1, pos2){
   let intercambio = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = intercambio;
};

function burbuja (array){
    for(let i=0; i<array.length;i++){
        for(let j=0; j<array.length-1;j++){
            if (array[j]>array[j+1]){
                 intercambiar(array,j,j+1);
            }
        }
    }
    return array;
};

let arreglo = cargarArreglo(10);
console.log('DESORDENADO:', arreglo);
console.log('ORDENADO:',burbuja(arreglo));
