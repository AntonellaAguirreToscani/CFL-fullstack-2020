//Ejercicio descuento10%

let precio = 450.50;
let porcentaje = 10;
let descuento = (porcentaje/100)*precio;
let resultado = (precio-descuento);
console.log('Precio Producto con descuento del 10%: '+ resultado);

/*También se puede resolver con Readline-Sync
para que el Usuario ingrese los valores que necesite.*/ 

let readlineSync = require('readline-sync');
let precioProducto = readlineSync.questionFloat('Ingrese valor del producto: ');
let porcentajeAplicar = readlineSync.questionFloat('Ingrese porcentaje de descuento: ');
let descuentoP = (porcentajeAplicar/100)*precioProducto;
let total = (precioProducto-descuentoP);
console.log('Precio del Producto con descuento aplicado: '+ total);