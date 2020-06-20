"use-strict";
let botonAgregar = document.getElementById('btn-agregar');
let botonTotal = document.getElementById('btn-total');
let botonQuitar = document.getElementById('btn-quitar');
let botonBorrar = document.getElementById('btn-quitar-todos');
let compras =[];

botonAgregar.addEventListener('click', function(e){
    let tituloResultado = document.getElementById('h2');
    tituloResultado.classList.add('ver');
    agregarProducto()
});

botonTotal.addEventListener('click', function(e){
    let tituloTotal = document.getElementById('h3');
    tituloTotal.classList.add('ver');
    calcularTotal();
});

botonQuitar.addEventListener('click', quitarUltimo);

botonBorrar.addEventListener('click', function(e){
    reiniciarCompra();
});

function agregarProducto(){
    let inputProducto = document.getElementById('producto').value;
    let inputPrecio = document.getElementById('precio').value;
    compras.push(inputPrecio);
    let listaProd = document.getElementById('lista');
    let nuevoProd = document.createElement('li');
    nuevoProd.innerHTML = `Producto: ${inputProducto}---- Precio: $ ${inputPrecio}`;
    listaProd.appendChild(nuevoProd);
    reiniciarInput();
}

function calcularTotal(){
    let contador = 0;
    for (let i=0; i<compras.length; i++){
        contador += parseInt(compras[i]);
    }
    let total = document.getElementById('total');
    let nuevoTotal = document.createElement('h1');
    nuevoTotal.innerHTML= `$ ${contador}`;
    total.appendChild(nuevoTotal);
}

function quitarUltimo(){
    let miLista = document.getElementById('lista');
    let ultimoItem = miLista.lastElementChild;
    miLista.removeChild(ultimoItem);
    compras.pop();
   
}

function reiniciarCompra(){
    let listaBorrar = document.getElementById('lista');
    listaBorrar.innerHTML="";
    let quitarTotal = document.getElementById('total');
    quitarTotal.innerHTML="";
    compras=[];
}

function reiniciarInput(){
    document.getElementById('producto').value='';
    document.getElementById('precio').value='';
}

