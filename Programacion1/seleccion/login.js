readlineSync = require('readline-sync');

let user;
let password;
let _user;
let _password;

user = 'Anto';
password = 'claveAnto';
_user= readlineSync.question('Ingrese su Usuario: ');
_password = readlineSync.question('Ingrese su Contraseña: ');

if ( _user === user && _password === password){
    console.log('Bienvenido!!!');
}else{
    console.log('Usuario o contraseña invalidos, intente nuevamente');
}


