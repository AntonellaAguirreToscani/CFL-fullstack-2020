let llenarCine = (array)=>{
   let tope = 2;
    for(let i=0; i<array.length; i++){
       array[i]= Math.random()*tope <1;
    }
    return array;
};

let butacasDisponibles = (array) =>{
    let total= 0;
    for(let i=0; i<array.length; i++){
        if( array[i] == true){
            total++;
        }
    }  
    return `Total de Butacas Libres: ${total}` 
};

let butacas =new Array(10);

console.log(llenarCine(butacas));
console.log(butacasDisponibles(butacas));