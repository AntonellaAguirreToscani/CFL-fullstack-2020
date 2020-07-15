"use strict";
var Matriz = /** @class */ (function () {
    function Matriz(_columnas) {
        this.columnas = _columnas;
        this.matriz = [];
    }
    Matriz.prototype.agregarFila = function (fila) {
        if (fila.length == this.columnas) {
            this.matriz.push(fila);
        }
    };
    Matriz.prototype.consultarElemento = function (X, Y) {
        return this.matriz[X][Y];
    };
    return Matriz;
}());
var matriz = new Matriz(5);
matriz.agregarFila([2, 4, 6, 7, 3]);
matriz.agregarFila([1, 5, 9, 10, 5]);
console.log(matriz);
