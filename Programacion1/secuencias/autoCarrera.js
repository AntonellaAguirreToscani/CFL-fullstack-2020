let readlineSync = require('readline-sync');
let vuelta1 = readlineSync.questionInt('Tiempo Cronometrado vuelta1: ');
let vuelta2 = readlineSync.questionInt('Tiempo cronometrado vuelta2: ');
let vuelta3 = readlineSync.questionInt('Tiempo Cronometrado vuelta3: ');
let vuelta4 = readlineSync.questionInt('Tiempo cronometrado vuelta4: ');
let totalTiempo = (vuelta1+vuelta2+vuelta3+vuelta4);
console.log('El tiempo total de las vueltas es: '+ totalTiempo);
let promedioVueltas = (totalTiempo/4);
console.log('Promedio Tiempo por vuelta: '+ promedioVueltas);
