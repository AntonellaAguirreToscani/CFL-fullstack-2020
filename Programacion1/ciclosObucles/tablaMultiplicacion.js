let readlineSync = require('readline-sync');

let numeroElegido = readlineSync.questionInt('Ingrese numero: ');
let hastaMultiplo = readlineSync.questionInt('Ingrese hasta que numero se multiplicara: ');

for (let i = 1; i <= hastaMultiplo; i++){
   
    console.log(`${numeroElegido} X ${i}= `, numeroElegido*i);
}

