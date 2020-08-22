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
    //Aplicando Throw err!
    Telefono.prototype.cargarBateria = function (minutos) {
        if (minutos >= 100)
            throw new Error('No se puede cargar mas de 100%');
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
var TelefonoCamara = /** @class */ (function (_super) {
    __extends(TelefonoCamara, _super);
    function TelefonoCamara() {
        return _super.call(this) || this;
    }
    TelefonoCamara.prototype.sacarFoto = function () {
        console.log('Foto Tomada!');
    };
    return TelefonoCamara;
}(Telefono));
var TelefonoRadio = /** @class */ (function (_super) {
    __extends(TelefonoRadio, _super);
    function TelefonoRadio() {
        var _this = _super.call(this) || this;
        _this.frecuenciaActual = Math.random();
        return _this;
    }
    TelefonoRadio.prototype.cambiarFrecuencia = function () {
        this.frecuenciaActual + 10;
    };
    return TelefonoRadio;
}(Telefono));
var telefonoModerno = new TelefonoCamara();
var telefonoRetro = new TelefonoRadio();
try {
    telefonoModerno.cargarBateria(101);
}
catch (e) {
    console.log('ERROR', e.message);
}
