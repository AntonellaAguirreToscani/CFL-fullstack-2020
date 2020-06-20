//Mi solución al problema antes de ver la Respuesta Correcta

readlineSync = require('readline-sync');

let compra = readlineSync.questionFloat('El valor total de su compra es= ');
let descuento = compra*0.1;

if (compra>= 1000){
    console.log( 'A su compra se le aplica el sig. DTO= ', descuento);
    console.log('Tiene que abonar=', compra-descuento);
}else{
    console.log('A su compra no se le aplica Descuento, tiene que abonar: ', compra);
}

//RESPUESTA CORRECTA

let monto;
let montoConDescuento;
let descuento10;
let cantidad;
let precioTotal;

monto = readlineSync.questionFloat('Ingrese monto Unitario: ');
cantidad = readlineSync.questionFloat('ingrese cantidad: ');
precioTotal = (monto*cantidad);

if( precioTotal >= 1000){
    descuento10 = (precioTotal*10)/100;
    montoConDescuento = precioTotal-descuento10;
    console.log('Su compra tiene un descuento del 10%:', descuento10);
    console.log('Tiene que abonar: ', montoConDescuento);
}else{
    console.log('No tiene Dto. Total a abonar: ', precioTotal);
}


