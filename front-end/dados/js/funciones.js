"use strict";
let boton = document.getElementById('btn-lanzar');
let resultado = document.getElementById('resultado');

boton.addEventListener("click",function(e){
    lanzarDados(longitud);
    // resultado.classList.toggle("visible");
})

function lanzarDados (longitud){
    let array=[];
    let cantidad=0;
    for (let i=0; i<longitud;i++){
        let dado1= Math.floor(Math.random() * (7-1)) +1;
        let dado2= Math.floor(Math.random() * (7-1)) +1;
        array[i]={dado1,dado2};
        if (array[i].dado1+array[i].dado2 === 7){
            cantidad++;
        }
    }
   document.getElementById('resultado').innerHTML = `Felicidades! Logró sumar ${cantidad} veces 7!!`;
}

let longitud = 1000;
