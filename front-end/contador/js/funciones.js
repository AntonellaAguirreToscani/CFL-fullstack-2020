"use strict";

let contador = 0;
let number = document.getElementById('numero');
let mih1 = document.getElementById('numIngresado');
let number2 = document.getElementById('sumarEntero');

function mostrarValor() {
    contador = number.value;
    // number.innerHTML = contador;
    mih1.innerHTML = contador;
}

function sumarUno() {
    contador++;
    mih1.innerHTML = contador;
}

function restarUno() {
   contador--;
   mih1.innerHTML = contador;
}

function sumarEntero() {
    contador += parseInt(number2.value);
    mih1.innerHTML = contador;
}

