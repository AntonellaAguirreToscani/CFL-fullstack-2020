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
var Telefono = /** @class */ (function () {
    function Telefono(_onOf) {
        (_onOf == null || _onOf == undefined) ? this.onOf = false : this.onOf = _onOf;
        this.bateriaActual = 0;
    }
    Telefono.prototype.prenderApagar = function () {
        (this.onOf == false) ? this.onOf = true : this.onOf = false;
    };
    Telefono.prototype.cargarBateria = function (minutos) {
        for (var i = 0; i < minutos; i++) {
            this.bateriaActual++;
        }
    };
    Telefono.prototype.mandarMensaje = function (mensaje) {
        return (mensaje == null || mensaje == undefined) ? 'Mensaje Vacio' : mensaje;
    };
    Telefono.prototype.hacerLlamada = function (num) {
        return "Llamando a......." + num;
    };
    return Telefono;
}());
var Camara = /** @class */ (function () {
    function Camara() {
        this.lente = true;
    }
    Camara.prototype.sacarFoto = function () {
        return (this.lente == true) ? 'FOTO!!!' : 'No se puede sacar foto, lente Dañado';
    };
    return Camara;
}());
var TelefonoCamara = /** @class */ (function (_super) {
    __extends(TelefonoCamara, _super);
    function TelefonoCamara() {
        var _this = _super.call(this) || this;
        _this.camara = new Camara();
        return _this;
    }
    TelefonoCamara.prototype.sacarFoto = function () {
        return camara.sacarFoto();
    };
    return TelefonoCamara;
}(Telefono));
var camara = new Camara();
var telefonoCamara = new TelefonoCamara();
console.log(telefonoCamara.sacarFoto());
console.log(telefonoCamara.hacerLlamada(1234567890));
