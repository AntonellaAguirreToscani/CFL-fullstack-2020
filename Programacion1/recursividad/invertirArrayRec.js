
let invertirArreglo = (arreglo, i, j)=>{
    let inicio=0;
    if(inicio<=j){
        return arrayInvertido.push(arreglo[j]), invertirArreglo(arreglo,i+1,j-1);
    } else{
        return arrayInvertido;
    }
    
};
 
let arrayInvertido=[];
let arreglo = [1,2,3];
console.log(invertirArreglo(arreglo,0,arreglo.length-1));