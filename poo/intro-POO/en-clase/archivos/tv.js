"use strict";
var Televisor = /** @class */ (function () {
    function Televisor(volumenInicial, canalInicial) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    Televisor.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    Televisor.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual - 1;
    };
    Televisor.prototype.elegirCanal = function (canal) {
        this.canalActual = canal;
    };
    return Televisor;
}());
var volumenInicial = 10;
var canalInicial = 24;
var miTelevisor = new Televisor(volumenInicial, canalInicial);
console.log(miTelevisor);
miTelevisor.prenderApagar();
miTelevisor.elegirCanal(3);
console.log(miTelevisor);
