let readlineSync = require('readline-sync');

let calcularArea = (base, altura) => {
    return 'El area de su triangulo es', (base * altura)/2;
}

let i;
for (i = 1; i<= 100; i ++){
console.log('El Area del Triangulo es: ', calcularArea(i,i*2));
}
