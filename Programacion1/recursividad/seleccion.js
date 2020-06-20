let arreglo = [4, 2, 1, 3];
            
function intercambiar(array, pos1, pos2) {
    let aux = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = aux;
};

function seleccion(array) {

    for (let i = 0; i < array.length; i++) {
        let menor = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[menor] > array[j]) {
                menor = j;

            }
        }
        intercambiar(array, i, menor);
    }
    return array;
};

console.log(seleccion(arreglo));