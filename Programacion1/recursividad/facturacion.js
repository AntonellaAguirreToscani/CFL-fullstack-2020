let readlineSync = require('readline-sync');
let cantidad = 3;
let clientes =[];
let facturacion=[];



for (let numCliente = 0; numCliente < cantidad; numCliente++) {
    cliente = readlineSync.question("Cliente " + (numCliente + 1) + ": ");
    fact = readlineSync.questionInt("Facturacion " + (numCliente + 1) + ": ");
    // console.log('facturacion ing',fact);

    // guarda en posc."i" del num mas grande al mas peq.
    let i = 0;
    while (i < numCliente && facturacion[i] > fact) {
        console.log( 'facturacion',facturacion[i]);
        i++;
    }
    for (j = numCliente; j > i; j--) {
        // console.log('num cliente',numCliente);
        clientes[j] = clientes[j - 1];
        // console.log(clientes[j]);
        facturacion[j] = facturacion[j - 1];
        //  console.log(facturacion[j]);
    }
    // guarda los datos ingresados por el usuario ej: Anto, 100
    clientes[i] = cliente;
    facturacion[i] = fact;


}
console.log(clientes);
console.log(facturacion);

