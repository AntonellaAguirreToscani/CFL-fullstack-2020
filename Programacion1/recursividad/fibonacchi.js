let fibonacchi =(num)=>{
    let resultado =num;
    if(num>1){
        console.log(resultado);
        return resultado= fibonacchi(num-1)+fibonacchi(num-2);

    }else{
        return resultado;
        
    }
};


let numero= 4;

console.log(fibonacchi(numero));

