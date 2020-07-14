"use strict";
var Matriz = /** @class */ (function () {
    function Matriz() {
        this.matriz = [];
    }
    Matriz.prototype.agregarFila = function (value1, value2) {
        this.matriz.push([value1, value2]);
    };
    Matriz.prototype.consultarElemento = function (X, Y) {
        return this.matriz[X][Y];
    };
    return Matriz;
}());
var matriz = new Matriz();
matriz.agregarFila(2, 3);
matriz.agregarFila(4, 5);
console.log(matriz.consultarElemento(1, 0));
