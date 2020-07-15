"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var Auto = /** @class */ (function () {
    function Auto(_marca, _modelo, _anio, _patente, _km, _titular) {
        this.marca = _marca;
        this.modelo = _modelo;
        this.anio = _anio;
        this._patente = _patente;
        this.kilometraje = _km;
        this._titular = _titular;
    }
    Object.defineProperty(Auto.prototype, "patente", {
        get: function () {
            return this._patente;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "titular", {
        get: function () {
            return this._titular;
        },
        set: function (nuevoTitular) {
            this._titular = nuevoTitular;
        },
        enumerable: false,
        configurable: true
    });
    Auto.prototype.aumentarKm = function () {
        this.kilometraje = this.kilometraje + 1;
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(_listadoAutos) {
        if (_listadoAutos == null || _listadoAutos == undefined) {
            this.listadoAutos = [];
        }
        else {
            this.listadoAutos = _listadoAutos;
        }
    }
    RegistroAutomotor.prototype.buscarAuto = function (patente) {
        var posicion = -1;
        for (var i = 0; i < this.listadoAutos.length; i++) {
            if (this.listadoAutos[i].patente === patente) {
                posicion = i;
            }
        }
        return posicion;
    };
    RegistroAutomotor.prototype.eliminarAuto = function (patente) {
        this.listadoAutos.splice(this.buscarAuto(patente), 1);
    };
    RegistroAutomotor.prototype.actualizarAuto = function (patente, nuevoTitular) {
        this.listadoAutos[this.buscarAuto(patente)].titular = nuevoTitular;
    };
    RegistroAutomotor.prototype.darAlta = function (auto) {
        this.listadoAutos.push(auto);
        return auto;
    };
    return RegistroAutomotor;
}());
//Importando archivo txt
var autos = fs.readFileSync('regAutomotor.txt', 'utf-8');
var arrayAutos = autos.split(/\r\n|\n/);
//Metodo para convertir cada posicion del arrayAutos en un objeto: Auto
function cargarAutos(arreglo) {
    var arrayAutos = [];
    arreglo.map(function (item) {
        var cadena = item.split(',');
        var marca = cadena[0];
        var modelo = cadena[1];
        var anio = cadena[2];
        var patente = cadena[3];
        var km = cadena[4];
        var titular = cadena[5];
        arrayAutos.push(new Auto(marca, modelo, anio, patente, km, titular));
    });
    return arrayAutos;
}
//Instanciando mi registro
var registro = new RegistroAutomotor(cargarAutos(arrayAutos));
//LLamando funcionalidad buscarAuto de mi objeto RegistroAutomotor(busca al auto por la patente y muestra su posicion)
console.log(registro.buscarAuto('JSR446'));
//LLamando funcionalidad EliminarAuto de mi objeto RegistroAutomotor
registro.eliminarAuto('JSR446');
//LLamando funcionalidad ActualizarAuto de mi objeto RegistroAutomotor (busca el auto y actualiza el titular)
var nuevoTitular = 'Lola';
registro.actualizarAuto('MIP501', nuevoTitular);
//Creando un nuevo Auto para darlo de alta en el registroAutomotor.
var nuevoAuto = new Auto('Ford', 'Focus', '2000', 'AAS111', '100000', 'Rodrigo');
registro.darAlta(nuevoAuto);
console.log(registro);
