"use-strict";
class Compra{
    constructor(_cliente,_producto,_precio){
        this.cliente=_cliente;
        this.producto=_producto;
        this.precio=_precio;
    }
}
let btn = document.getElementById('agregar');
let btnTotal = document.getElementById('btn-total');
let compras=new Array();
let total=0;

// let form = document.getElementById('formulario');
// form.addEventListener('submit',funcion)

btn.addEventListener('click', function(e){
    agregarProducto();
});

btnTotal.addEventListener('click', function(e){
   document.getElementById('total').innerHTML = `Total a pagar = $ ${total}`; 

});

let borrarFormulario=()=>{
    document.getElementById('producto').value='';
    document.getElementById('precio').value='';
}

let agregarProducto=()=>{
    let cliente=document.getElementById('cliente').value;
    let producto=document.getElementById('producto').value;
    let precio=document.getElementById('precio').value;
    total+= parseInt(precio);
    compras.push(new Compra(cliente,producto,precio));
    borrarFormulario();
}

// let sumarCompra=(array)=>{
//     let total=0;
//     for(let i=0; i<array.length;i++){
//         total+=array[i].precio;
//     }
//     document.getElementById('total').innerHTML = `El total a pagar es de = ${total}`;
// }
