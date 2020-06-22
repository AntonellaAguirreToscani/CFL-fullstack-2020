let readLineSync = require('readline-sync');

let sacarPotenciaNumero = (base, exponente) =>{
    if (exponente >= 0){
        let total = 1;
        for (let i = 0; i< exponente; i++){
            total = total * base;
        }
        return ` Resultado Potencia: ${total}`;

    }else{
        return `ERROR, Debe Ingresar un exponente igual o mayor q "0"`;
    }    
};

let base = readLineSync.questionInt('Ingrese base :');
let exponente = readLineSync.questionInt('Ingrese exponente :');

console.log(sacarPotenciaNumero(base, exponente));

