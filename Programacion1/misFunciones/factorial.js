let readlineSync = require('readline-sync');

// mismo ejemplo pero la funcion se llama a ella misma (la funcion es el for y 1 el corte)
let factorial = (num) => {

  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

let factorialNumero = (n) => {
  let total = 1;
  if (n == 0) {
    return 'Factorial = 1';
  } else {
    for (n; n > 0; n--) {
      total *= n;
    }
    return `Factorial = ${total}`
  }

};

let entero = readlineSync.questionInt('Ingrese numero: ');
console.log(factorial(entero));
