function parOImpar (n){

    if (n % 2 == 0){
        return `Numero Ingresado= ${n} = ES UN NUMERO PAR`
    }else{
            return `Numero Ingresado= ${n} = ES UN NUMERO IMPAR `
    }
}

let factorial = valor;
let total = valor * (factorial-1);

if(factorial == 0){
    console.log('Factorial = 1');
}else{
    factorial = factorial - 2;
 
    for (factorial; factorial>0; factorial--){       
     total*= factorial; 
    }           
 console.log(total); 
}