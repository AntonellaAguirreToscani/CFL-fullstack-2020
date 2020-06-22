/* 
Da dos valores distintos a la misma variable y dependiendo 
si el if es true o false, muestra por consola un resultado u otro.
MULTIPLICA O SUMA
*/

let readlineSync = require('readline-sync');
let no1 = readlineSync.questionInt("Ingrese el primer: ");
let no2 = readlineSync.questionInt("Ingrese el segundo: ");
let no3 = readlineSync.questionInt("Ingrese el tercer: ");
let result;
if (no1 < 0) {
result = no1*no2*no3;
} else {
result = no1+no2+no3;
}
console.log(result);