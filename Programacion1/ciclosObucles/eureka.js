let readlineSync = require('readline-sync');

let clave;
let contador= 1

while(contador<=3 && clave != 'Eureka'){
    clave = readlineSync.question('Ingrese su Clave: ');
    if(clave == 'Eureka'){
        console.log('Acertaste!!!');
    }else{
        console.log('Clave Incorrecta');
    }
      contador= contador + 1;
};

if (clave != 'Eureka'){
    console.log('Cuenta bloqueada');
}