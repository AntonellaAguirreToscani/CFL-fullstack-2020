"use-strict";
let btn = document.getElementById("btn-mostrar");
let miDiv =document.getElementById("oculto");

btn.addEventListener("click",function(e){
    miDiv.classList.toggle("ver");
    if (btn.innerHTML=='VER'){
        btn.innerHTML= 'OCULTAR';
    }else{
        btn.innerHTML= 'VER';
    }
});
