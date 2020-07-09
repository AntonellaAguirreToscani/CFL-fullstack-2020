"use strict";
var Auto = /** @class */ (function () {
    function Auto(_marca, _velocidad, _kmRecorridos) {
        this.marca = _marca;
        this.velocidadActual = _velocidad;
        this.kmRecorridos = _kmRecorridos;
        this.estaEnMarcha = false;
    }
    Auto.prototype.ponerMarchaApagar = function () {
        if (this.estaEnMarcha)
            this.estaEnMarcha = false;
        else
            this.estaEnMarcha = true;
    };
    Auto.prototype.subirVelocidad = function (velocidadDeseada) {
        this.velocidadActual = this.velocidadActual + velocidadDeseada;
    };
    Auto.prototype.bajarVelocidad = function (velocidadDeseada) {
        this.velocidadActual = this.velocidadActual - velocidadDeseada;
    };
    Auto.prototype.aumentarKm = function () {
        this.kmRecorridos = this.kmRecorridos + 1;
    };
    return Auto;
}());
var marca = 'Ford';
var velocidadInicial = 0;
var km = 18000;
var auto = new Auto(marca, velocidadInicial, km);
auto.ponerMarchaApagar();
console.log(auto);
auto.subirVelocidad(50);
auto.bajarVelocidad(10);
auto.aumentarKm();
console.log(auto);
