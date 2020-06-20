let readlineSync = require('readline-sync');

let precio;
let cantidad;
let total;
let mesCompra;

precio = readlineSync.questionFloat('Ingrese precio del Producto: ');
cantidad = readlineSync.questionFloat('Ingrese cantidad: ');
mesCompra = readlineSync.question('Ingrese mes de compra de forma NUMERICA: ');
total = precio*cantidad;

if( mesCompra == 10){
    let descuento = total - (total*0.15);
    console.log(' Descuento por Aniversario 15%. Total a pagar= ', descuento);
}else{
    console.log('No se le aplica ningun descuento. Total a pagar= ', total);
}
