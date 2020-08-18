"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(_patente, _modeloMarca, _color, _titular) {
        this.patente = _patente;
        this.modeloMarca = _modeloMarca;
        this.color = _color;
        this.titular = _titular;
        this.velocidadActual = 0;
    }
    Vehiculo.prototype.frenar = function () {
        this.velocidadActual = this.velocidadActual - 10;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
