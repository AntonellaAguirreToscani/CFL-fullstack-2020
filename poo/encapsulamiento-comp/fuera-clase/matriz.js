"use strict";
var Fila = /** @class */ (function () {
    function Fila(unbicacion, contenido) {
        this._ubicacion = unbicacion;
        this._contenido = contenido;
    }
    Object.defineProperty(Fila.prototype, "contenido", {
        get: function () {
            return this._contenido;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fila.prototype, "ubicacion", {
        get: function () {
            return this._ubicacion;
        },
        enumerable: false,
        configurable: true
    });
    return Fila;
}());
var Columna = /** @class */ (function () {
    function Columna(ubicacion, _nombreDescript) {
        this._ubicacion = ubicacion;
        this._nombreDescriptivo = _nombreDescript;
    }
    Object.defineProperty(Columna.prototype, "nombreDescriptivo", {
        get: function () {
            return this._nombreDescriptivo;
        },
        enumerable: false,
        configurable: true
    });
    return Columna;
}());
var Matriz = /** @class */ (function () {
    function Matriz(_columnas, _filas) {
        this.columnas = _columnas;
        this.filas = _filas;
    }
    Matriz.prototype.agregarFila = function (newFila) {
        if (newFila.contenido.length == this.columnas.length) {
            this.filas.push(newFila);
        }
    };
    Matriz.prototype.consultarElemento = function (fila, columna) {
        for (var i = 0; i < this.filas.length; i++) {
            for (var j = 0; j < this.columnas.length; j++) {
                if (this.filas[i].ubicacion == fila && this.columnas[j].nombreDescriptivo == columna) {
                    return this.filas[i].contenido[j];
                }
            }
        }
    };
    return Matriz;
}());
var fila1 = new Fila(0, [2, 3, 11, 25]);
var fila2 = new Fila(1, [4, 5, 15, 28]);
var columna1 = new Columna(0, 'Numeros par');
var columna2 = new Columna(1, 'Numeros impar');
var columna3 = new Columna(2, 'Numeros mayores 10');
var columna4 = new Columna(3, 'Numeros mayores 20');
var arrayFilas = [fila1, fila2];
var arrayColumnas = [columna1, columna2, columna3, columna4];
var matriz = new Matriz(arrayColumnas, arrayFilas);
var nuevaFila = new Fila(2, [6, 1, 12, 22]);
matriz.agregarFila(nuevaFila);
console.log(matriz.consultarElemento(1, 'Numeros impar'));
console.log(matriz);
