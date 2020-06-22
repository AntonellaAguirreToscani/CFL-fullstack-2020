"use-strict";
let boton = document.getElementById('btn');

boton.addEventListener('click',agregarElemento);

function agregarElemento (){
    let miUl = document.getElementById('lista');
    let miInput = document.getElementById('tareas').value;
    let nuevaTarea = document.createElement('li');
    nuevaTarea.innerHTML=miInput;
    miUl.appendChild(nuevaTarea);
    reiniciarInput()
}

function reiniciarInput(){
    document.getElementById('tareas').value='';
}