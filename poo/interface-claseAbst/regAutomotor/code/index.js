"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camion_1 = require("./camion");
var moto_1 = require("./moto");
var gestorArchivo_1 = require("./gestorArchivo");
var auto_1 = require("./auto");
var registroAutomotor_1 = require("./registroAutomotor");
var gestor = new gestorArchivo_1.GestorArchivo('vehiculos.txt');
var registro = new registroAutomotor_1.RegistroAutomotor(gestor);
// Vehiculos que se agregan al txt Original!
var nuevoAuto = new auto_1.Auto(1, 'Lola Gancedo', 'AAA222', 'Volksvagen GOL', 5);
var nuevaMoto = new moto_1.Moto(2, 'Lorenzo Aitan', 'ERT123', 'Yamahaa xq');
var nuevoCamion = new camion_1.Camion(3, 'YPF S.A', 'AZZ012', 'Volvo a40');
registro.agregarVehiculo(nuevoAuto);
registro.agregarVehiculo(nuevaMoto);
registro.agregarVehiculo(nuevoCamion);
registro.eliminarVehiculo('JSR446');
registro.actualizarTitular('AAA222', 'Carolina Russo');
console.log(registro);
