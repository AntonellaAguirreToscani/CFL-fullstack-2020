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
exports.GestorArchivo = void 0;
var fs = __importStar(require("fs"));
var auto_1 = require("./auto");
var camion_1 = require("./camion");
var moto_1 = require("./moto");
var GestorArchivo = /** @class */ (function () {
    function GestorArchivo(_nombreArchivo) {
        var archivoTxt = fs.readFileSync(this.nombreArchivo = _nombreArchivo, 'utf-8');
        this._listado = new Set(archivoTxt.split('\r\n')); // SE INSTANCIA SET!
    }
    Object.defineProperty(GestorArchivo.prototype, "listado", {
        get: function () {
            return this._listado;
        },
        enumerable: false,
        configurable: true
    });
    GestorArchivo.prototype.cargarVehiculos = function () {
        var listado = [];
        //Nueva logica
        Array.from(this._listado).forEach(function (item) {
            var cadena = item.split(',');
            switch (parseInt(cadena[0])) {
                case 1: //Representa un Auto
                    listado.push(new auto_1.Auto(parseInt(cadena[0]), cadena[1], cadena[2], cadena[3], parseInt(cadena[4])));
                    break;
                case 2: //Representa una Moto
                    listado.push(new moto_1.Moto(parseInt(cadena[0]), cadena[1], cadena[2], cadena[3]));
                    break;
                case 3: //Representa un Camion 
                    listado.push(new camion_1.Camion(parseInt(cadena[0]), cadena[1], cadena[2], cadena[3]));
                    break;
            }
        });
        return listado;
    };
    //Método para convertir un objeto:Vehiculo a string.
    GestorArchivo.prototype.convertir = function (obj) {
        var texto = [];
        for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) { //RECORRO EL OBJETO
            var _b = _a[_i], key = _b[0], value = _b[1];
            switch (key) {
                case 'tipo':
                    texto.push(value.toString());
                    break;
                case '_titular':
                    texto.push(value);
                    break;
                case '_patente':
                    texto.push(value);
                    break;
                case 'marcaModelo':
                    texto.push(value);
                    break;
                case 'cantidadPuertas':
                    texto.push(value.toString());
                    break;
            }
        }
        return texto.join(',');
    };
    GestorArchivo.prototype.actualizarArchivo = function () {
        // Hay q convertir el SET en Array (Array.from) para poder utilizar el buffer
        var buffer = Buffer.from(Array.from(this._listado).join('\r\n'));
        fs.writeFile('vehiculos.txt', buffer, function (err) {
            return (err) ? console.log('err') : console.log('Archivo modificado!');
        });
    };
    GestorArchivo.prototype.escribirLinea = function (obj) {
        var texto = this.convertir(obj);
        // ADD para SET: cumple la misma funcionalidad q PUSH
        this.listado.add(texto);
        this.actualizarArchivo();
    };
    GestorArchivo.prototype.buscarLinea = function (patente) {
        var contenido = '';
        Array.from(this._listado).forEach(function (item) {
            contenido = (item.indexOf(patente) > -1) ? item : contenido;
        });
        return contenido;
    };
    GestorArchivo.prototype.eliminarLinea = function (patente) {
        this._listado.delete(this.buscarLinea(patente));
        this.actualizarArchivo();
    };
    GestorArchivo.prototype.actualizarTitularTxt = function (patente, nuevoTitular) {
        //Convierto la linea del Archivo que se busca por patente en: Arreglo. Para Actualizar cierta posicion!
        var linea = this.buscarLinea(patente);
        var arreglo = linea.split(',');
        arreglo[1] = nuevoTitular;
        var modificado = Array.from(this._listado);
        modificado[this.buscarPosicion(linea)] = arreglo.join(",");
        // instancio el nuevo Set con el listado modificado!
        this._listado = new Set(modificado);
        this.actualizarArchivo();
    };
    GestorArchivo.prototype.buscarPosicion = function (linea) {
        var posicion = -1;
        Array.from(this._listado).forEach(function (item, index) {
            posicion = (item.indexOf(linea) > -1) ? index : posicion;
        });
        return posicion;
    };
    return GestorArchivo;
}());
exports.GestorArchivo = GestorArchivo;
