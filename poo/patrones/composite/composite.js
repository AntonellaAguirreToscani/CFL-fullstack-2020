"use strict";
var Archivo = /** @class */ (function () {
    function Archivo(_nombre, _contenido) {
        this._nombre = (_nombre == null || _nombre == undefined) ? 'Sin Especificar' : _nombre;
        this.contenido = (_contenido == null || _contenido == undefined) ? [] : _contenido;
    }
    Archivo.prototype.getContenido = function () {
        return this.contenido;
    };
    Archivo.prototype.setContenido = function (lineaBuscada, texto) {
        this.contenido.forEach(function (linea) {
            if (linea == lineaBuscada) {
                linea = texto;
            }
        });
    };
    Archivo.prototype.getNombre = function () {
        return this._nombre;
    };
    return Archivo;
}());
var CarpetaComposite = /** @class */ (function () {
    function CarpetaComposite(_nombre) {
        this.nombre = (_nombre == null || _nombre == undefined) ? 'Sin Especificar' : _nombre;
        this.contenido = [];
    }
    CarpetaComposite.prototype.buscarContenido = function (archivo) {
        return this.contenido.reduce(function (obj, item) {
            if (item.getNombre() == archivo) {
                obj = item;
            }
            return obj;
        }, {});
    };
    CarpetaComposite.prototype.getContenido = function () {
        return this.contenido;
    };
    CarpetaComposite.prototype.setContenido = function (lineaBuscada, texto, nombreArchivo) {
        this.buscarContenido(nombreArchivo).setContenido(lineaBuscada, texto);
    };
    CarpetaComposite.prototype.getNombre = function () {
        return this.nombre;
    };
    CarpetaComposite.prototype.agregarArchivo = function (archivo) {
        this.contenido.push(archivo);
    };
    CarpetaComposite.prototype.agregarCarpeta = function (carpeta) {
        this.contenido.push(carpeta);
    };
    return CarpetaComposite;
}());
var archivo1 = new Archivo('archivo1.txt', ['primer linea', 'segunda linea', 'tercer linea']);
var archivo2 = new Archivo('archivo2.ts', ['class Contenido{', 'private nombre: string', '}']);
var carpetaDiagrama = new CarpetaComposite('carpetaDiagrama');
var archivo3 = new Archivo('diagrama.pdf');
var carpeta = new CarpetaComposite('Carpeta-Composite');
carpeta.agregarArchivo(archivo1);
carpeta.agregarArchivo(archivo2);
carpeta.agregarCarpeta(carpetaDiagrama);
carpetaDiagrama.agregarArchivo(archivo3);
console.log(carpeta.setContenido('primer linea', 'HOLA MUNDO!', 'archivo1.txt'));
console.log(carpeta.getContenido());
