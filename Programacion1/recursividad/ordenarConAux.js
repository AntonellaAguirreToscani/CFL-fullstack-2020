let array = [10,7,2,1,5];
let aux = [0,1,2,3,4];

function intercambiar(array, pos1, pos2) {
    let aux = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = aux;
};

function seleccion(array,aux) {

    for (let i = 0; i < array.length; i++) {
        let menor = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[menor] > array[j]) {
                menor = j;

            }
        }
        intercambiar(array,i,menor);
        intercambiar(aux, i, menor);
    }
    return aux;
};


console.log(array);
console.log(seleccion(array,aux));