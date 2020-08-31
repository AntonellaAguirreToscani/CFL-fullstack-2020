"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var autoDeportivo_1 = require("./autoDeportivo");
var camioneta_1 = require("./camioneta");
var autoGasolero_1 = require("./autoGasolero");
var ferrari = new autoDeportivo_1.AutoDeportivo('HBT567', 'Ferrari', 'rojo', 'pepe perez');
var sprinter = new camioneta_1.Camioneta('TRF678', 'Sprinter 100', 'blanco', 'empresa combis');
var renault = new autoGasolero_1.AutoGasolero('ASS421', 'Renault Partner', 'gris', 'jose russo');
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
