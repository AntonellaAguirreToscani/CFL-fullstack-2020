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
exports.GestorArchivos = void 0;
var fs = __importStar(require("fs"));
var GestorArchivos = /** @class */ (function () {
    function GestorArchivos(_nombreArchivo1, _nombreArchivo2) {
        var stock = fs.readFileSync(this.nombreArchivo1 = _nombreArchivo1, 'utf-8');
        this._listado1 = new Set(stock.split('\r\n'));
        var ventas = fs.readFileSync(this.nombreArchivo2 = _nombreArchivo2, 'utf-8');
        this._listado2 = new Set(ventas.split('\r\n'));
    }
    //actualiza un solo Archivo (ELEGIDO)
    GestorArchivos.prototype.actualizarArchivoElegido = function (archivo) {
        var nombreArchivo = archivo;
        var buffer = Buffer.from(Array.from(this.elegirSet(archivo)).join('\r\n'));
        fs.writeFile(nombreArchivo, buffer, function (err) {
            return (err) ? console.log('err') : console.log('Archivo modificado!');
        });
    };
    //actualiza AMBOS archivos!
    GestorArchivos.prototype.actualizarArchivos = function () {
        var bufferStock = Buffer.from(Array.from(this._listado1).join('\r\n'));
        fs.writeFile('stock.txt', bufferStock, function (err) {
            return (err) ? console.log('err') : console.log('Archivo modificado!');
        });
        var bufferVentas = Buffer.from(Array.from(this._listado2).join('\r\n'));
        fs.writeFile('ventas.txt', bufferVentas, function (err) {
            return (err) ? console.log('err') : console.log('Archivo modificado!');
        });
    };
    GestorArchivos.prototype.elegirSet = function (archivo) {
        switch (archivo) {
            case 'stock.txt':
                return this._listado1;
                break;
            case 'ventas.txt':
                return this._listado2;
                break;
            default:
                throw Error('Archivo no encontrado');
        }
    };
    GestorArchivos.prototype.buscarLinea = function (id, archivo) {
        var contenido = '';
        Array.from(this.elegirSet(archivo)).forEach(function (item) {
            contenido = (item.indexOf(id.toString()) > -1) ? item : contenido;
        });
        return contenido;
    };
    GestorArchivos.prototype.agregarLinea = function (texto, archivo) {
        this.elegirSet(archivo).add(texto);
        this.actualizarArchivoElegido(archivo);
    };
    GestorArchivos.prototype.eliminarLinea = function (id, archivo) {
        this.elegirSet(archivo).delete(this.buscarLinea(id, archivo));
        this.actualizarArchivoElegido(archivo);
    };
    GestorArchivos.prototype.modificarLinea = function (id, archivo) {
    };
    Object.defineProperty(GestorArchivos.prototype, "listado1", {
        set: function (nuevo) {
            this._listado1 = nuevo;
        },
        enumerable: false,
        configurable: true
    });
    return GestorArchivos;
}());
exports.GestorArchivos = GestorArchivos;
