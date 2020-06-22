"use-strict";
let botones = document.querySelectorAll('.btn');

for(let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', function(e){
    let elemento = this.nextElementSibling;
    elemento.classList.toggle("ver");
    if (botones[i].innerHTML=='VER'){
        botones[i].innerHTML= 'OCULTAR';
    }else{
        botones[i].innerHTML= 'VER';
    }
    });
}
 
