function imprimirArregloRecursivo(arreglo, indice, largo) {
    if (indice <= largo) {
        console.log("posicion ", indice, " tiene:",

            imprimirArregloRecursivo(arreglo, indice + 1, largo));

    };
    return arreglo[indice - 1];
}

let arreglo =[5,10,15,20];
console.log(imprimirArregloRecursivo(arreglo,0,arreglo.length-1));