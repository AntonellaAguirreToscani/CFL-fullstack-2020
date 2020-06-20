let numeros = new Array(10);

let darNumerosAzar =(tope)=>{
return Math.floor(Math.random()*tope);
};

for(let i=0; i<numeros.length; i++){
    numeros[i]= darNumerosAzar(100);
    console.log(numeros[i]);
};
