"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto(_patente, _marcaModelo, _cambioActual) {
        this.patente = _patente;
        this.marcaModelo = _marcaModelo;
        (_cambioActual == null || _cambioActual == undefined) ? this.cambioActual = 1 : this.cambioActual = _cambioActual;
    }
    Auto.prototype.pasarCambio = function () {
        (this.cambioActual < 5) ? this.cambioActual++ : this.cambioActual = this.cambioActual;
    };
    return Auto;
}());
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(_patente, _marcaModelo, _cambioActual) {
        var _this = _super.call(this, _patente, _marcaModelo, _cambioActual) || this;
        _this.tecnologiaFrenado = true;
        return _this;
    }
    // POLIMORFISMO
    AutoDeportivo.prototype.pasarCambio = function () {
        (this.cambioActual < 6) ? this.cambioActual++ : this.cambioActual = this.cambioActual;
    };
    return AutoDeportivo;
}(Auto));
var corsa = new Auto('jsr456', 'chevrolet, corsa', 3);
var mustang = new AutoDeportivo('hyt678', 'mustang', 3);
corsa.pasarCambio();
corsa.pasarCambio();
console.log(corsa);
// EL AUTO DEPORTIVO TIENE LA VENTAJA DE PASAR 6 CAMBIOS EN VEZ DE 5
mustang.pasarCambio();
mustang.pasarCambio();
mustang.pasarCambio();
console.log(mustang);
