
let boton = document.getElementById("activar");
boton.addEventListener('click',function(e){
    alert('Tiene 5 seg para correr!!!')
    setTimeout(function(e){activarBomba()}, 5000);
});



// function mostrarMensaje(){
//     alert('tiene 5 seg para correr!!');
// }

function activarBomba(){
    // setTimeout(mostrarMensaje, 5000);
    let mih1 = document.querySelector(".mensaje");
    let miInput = document.getElementById('tiempo').value;

    let interval = setInterval(function(e){
        if(miInput===0){
            mih1.innerHTML = 'BOOOOOOM!!!!';
            clearInterval(interval);    
           
        }else{
            miInput--;
            mih1.innerHTML = miInput;
        }
    },1000);
}