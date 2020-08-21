"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(_tipo, _titular, _patente, _marcaModelo) {
        this.tipo = _tipo;
        this._titular = _titular;
        this._patente = _patente;
        this.tanqueCombustibleLitros = Math.random() * (100 - 1) + 1;
        this.marcaModelo = _marcaModelo;
        this.onOff = false;
        this.velocidadActual = 0;
    }
    Vehiculo.prototype.prender = function () {
        this.onOff = (this.tanqueCombustibleLitros > 0) ? true : false;
    };
    Vehiculo.prototype.apagar = function () {
        this.onOff = false;
    };
    Object.defineProperty(Vehiculo.prototype, "patente", {
        get: function () {
            return this._patente;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "titular", {
        get: function () {
            return this._titular;
        },
        set: function (nuevo) {
            this._titular = nuevo;
        },
        enumerable: false,
        configurable: true
    });
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
