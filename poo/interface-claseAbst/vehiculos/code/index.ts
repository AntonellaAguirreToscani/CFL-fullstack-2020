import {AutoDeportivo} from './autoDeportivo';
import {Camioneta} from './camioneta';
import {AutoGasolero} from './autoGasolero';

let ferrari: AutoDeportivo = new AutoDeportivo('HBT567','Ferrari','rojo','pepe perez');
let sprinter: Camioneta = new Camioneta('TRF678','Sprinter 100','blanco','empresa combis');
let renault: AutoGasolero = new AutoGasolero('ASS421','Renault Partner','gris','jose russo');

// TODAS LAS CLASES HIJAS IMPLEMENTAN DE MANERA DISTINTA EL METODO ABSTRACTO : ACELERAR()
// LA CLASE AUTODEPORTIVO A SU VEZ REDEFINE EL METODO : FRENAR()

ferrari.acelerar(); // ACELERA 20
ferrari.acelerar(); 
ferrari.frenar(); // FRENA 20
console.log(ferrari);

sprinter.acelerar(); // ACELERA 5
sprinter.acelerar();
sprinter.frenar(); // USA EL METODO DE LA CLASE PADRE : VEHICULO
console.log(sprinter);

renault.acelerar(); // ACELERA 10
renault.frenar(); // USA EL METODO DE LA CLASE PADRE : VEHICULO
console.log(renault);