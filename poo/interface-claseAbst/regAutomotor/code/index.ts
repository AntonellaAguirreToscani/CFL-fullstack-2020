import * as fs from 'fs';
import {Camion} from './camion';
import {Moto} from './moto';
import {GestorArchivo} from './gestorArchivo';
import { Auto } from './auto';

import {RegistroAutomotor} from './registroAutomotor';

let gestor: GestorArchivo= new GestorArchivo('vehiculos.txt');
let registro: RegistroAutomotor= new RegistroAutomotor(gestor);

// Vehiculos que se agregan al txt Original!
let nuevoAuto: Auto = new Auto(1,'Lola Gancedo','AAA222','Volksvagen GOL',5);
let nuevaMoto: Moto = new Moto(2,'Lorenzo Aitan','ERT123','Yamahaa xq');
let nuevoCamion: Camion= new Camion(3,'YPF S.A','AZZ012','Volvo a40');

registro.agregarVehiculo(nuevoAuto);
registro.agregarVehiculo(nuevaMoto);
registro.agregarVehiculo(nuevoCamion);

registro.eliminarVehiculo('JSR446');
registro.actualizarTitular('AAA222','Carolina Russo');
console.log(registro);