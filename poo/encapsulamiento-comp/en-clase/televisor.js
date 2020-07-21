"use strict";
var Televisor = /** @class */ (function () {
    function Televisor(_onOf, _decodificador) {
        this.onOf = _onOf;
        this.decodificador = _decodificador;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.onOf == false) {
            this.onOf = true;
        }
        else {
            this.onOf = false;
        }
    };
    Televisor.prototype.activarHd = function () {
        if (this.onOf == true) {
            this.decodificador.ponerHd('yes');
        }
    };
    Televisor.prototype.cambiarCanal = function (canalDeseado) {
        if (this.onOf == true) {
            this.decodificador.canal = canalDeseado;
        }
    };
    Televisor.prototype.subirVolumen = function () {
        if (this.onOf == true) {
            this.decodificador.subirVolumen();
        }
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.onOf == true) {
            this.decodificador.bajarVolumen();
        }
    };
    Televisor.prototype.iniciarApp = function (appDeseada) {
        if (this.onOf == true) {
            this.decodificador.accederApp(appDeseada);
        }
    };
    return Televisor;
}());
var Decodificador = /** @class */ (function () {
    function Decodificador(_aplicaciones, _hd, _volumen, _canal, _appElegida) {
        (_aplicaciones == null || _aplicaciones == undefined) ? this.aplicaciones = [] : this.aplicaciones = _aplicaciones;
        (_hd == null || _hd == undefined) ? this.hd = false : this.hd = _hd;
        (_volumen == null || _volumen == undefined) ? this.volumen = 0 : this.volumen = _volumen;
        (_canal == null || _canal == undefined) ? this._canal = 1 : this._canal = _canal;
        (_appElegida == null || _aplicaciones == undefined) ? this.appElegida = 'Ninguna' : this.appElegida = _appElegida;
    }
    Decodificador.prototype.ponerHd = function (yesNo) {
        if (yesNo == 'yes') {
            return this.hd = true;
        }
        else {
            return this.hd = false;
        }
    };
    Decodificador.prototype.subirVolumen = function () {
        this.volumen = this.volumen + 1;
    };
    Decodificador.prototype.bajarVolumen = function () {
        this.volumen = this.volumen - 1;
    };
    Object.defineProperty(Decodificador.prototype, "canal", {
        get: function () {
            return this._canal;
        },
        set: function (canalDeseado) {
            this._canal = canalDeseado;
        },
        enumerable: false,
        configurable: true
    });
    Decodificador.prototype.accederApp = function (app) {
        for (var i = 0; i < this.aplicaciones.length; i++) {
            if (this.aplicaciones[i].toLowerCase() == app.toLowerCase()) {
                this.appElegida = app;
            }
        }
    };
    return Decodificador;
}());
var app = ['Netflix', 'Youtobe', 'Google', 'Hulu', 'Flow'];
var decodificador = new Decodificador(app);
var televisor = new Televisor(false, decodificador);
console.log(televisor);
televisor.prenderApagar();
televisor.activarHd();
televisor.cambiarCanal(12);
televisor.subirVolumen();
televisor.iniciarApp('Netflix');
console.log(televisor);
