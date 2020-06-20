let readlineSync = require('readline-sync');

function probabilidadCaraDado (n){
    
  if (n > 0){
    let probabilidad = 6 ** n;
    return `Probabilidad de sacar ${n} dado/s con la misma cara es: 1/${probabilidad} `;

  }else{
   return 'Numero INCORRECTO';
  }
    
};

let dados = readlineSync.questionInt('Ingrese Cantidad de Dados: ');

console.log(probabilidadCaraDado(dados));