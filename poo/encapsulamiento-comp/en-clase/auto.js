"use strict";
var Carroceria = /** @class */ (function () {
    function Carroceria(_puertas, _cantEspejos) {
        this.puertas = _puertas;
        this.cantEspejos = _cantEspejos;
    }
    return Carroceria;
}());
var Rueda = /** @class */ (function () {
    function Rueda(_marca, _rodado, _ubicacion) {
        this.marca = _marca;
        this.rodado = _rodado;
        (_ubicacion == null || _ubicacion == undefined) ? this._ubicacion = 'Sin especificar' : this._ubicacion = _ubicacion;
    }
    Object.defineProperty(Rueda.prototype, "ubicacion", {
        get: function () {
            return this._ubicacion;
        },
        enumerable: false,
        configurable: true
    });
    return Rueda;
}());
var Interior = /** @class */ (function () {
    function Interior(_asientos, _estereo, _aireAcond, _frioCalor) {
        this.volante = 1;
        this.asientos = _asientos;
        this.estereo = _estereo;
        this.aireAcondicionado = _aireAcond;
        (_frioCalor == null || _frioCalor == undefined) ? this.frioCalor = 'APAGADO' : this.frioCalor = _frioCalor;
    }
    Interior.prototype.prenderAireFrio = function () {
        this.frioCalor = 'A/C FRIO ON';
    };
    Interior.prototype.prenderCalefaccion = function () {
        this.frioCalor = 'CALEFACCION ON';
    };
    return Interior;
}());
var Mecanica = /** @class */ (function () {
    function Mecanica(_tipoMotor, _numMotor, _cajaCambio) {
        this.tipoMotor = _tipoMotor;
        this.numMotor = _numMotor;
        this.cajaCambio = _cajaCambio;
    }
    return Mecanica;
}());
var Auto = /** @class */ (function () {
    function Auto(_patente, _titular, _marcaModelo, _interior, _carroceria, _mecanica, _ruedas, _marcha) {
        this.patente = _patente;
        this.titular = _titular;
        this.marcaModelo = _marcaModelo;
        this.interior = _interior;
        this.carroceria = _carroceria;
        this.mecanica = _mecanica;
        this.ruedas = _ruedas;
        (_marcha == null || _marcha == undefined) ? this.enMarcha = false : this.enMarcha = _marcha;
    }
    Auto.prototype.prenderApagar = function () {
        (this.enMarcha == false) ? this.enMarcha = true : this.enMarcha = false;
    };
    Auto.prototype.cambiarRueda = function (ruedaPinchada, ruedaAuxilio) {
        for (var i = 0; i < ruedas.length; i++) {
            if (this.ruedas[i].ubicacion == ruedaPinchada) {
                this.ruedas[i] = ruedaAuxilio;
            }
        }
    };
    Auto.prototype.encenderAire = function (frioCalor) {
        if (frioCalor == null || frioCalor.toLowerCase() == 'frio') {
            this.interior.prenderAireFrio();
        }
        else {
            this.interior.prenderCalefaccion();
        }
    };
    return Auto;
}());
var ruedas = [
    new Rueda('pirelli', 30, 'delanteraIZQ'),
    new Rueda('pirelli', 30, 'delanteraDERECHA'),
    new Rueda('pirelli', 30, 'TraseraIZQ'),
    new Rueda('pirelli', 30, 'TraseraDERECHA')
];
var puertas = ['puerta izquierda', 'puerta derecha', 'baul'];
var miCarroceria = new Carroceria(puertas, 3);
var miInterior = new Interior(4, true, true);
var miMecanica = new Mecanica('nafta', 56789054321, 'automatica');
var miAuto = new Auto('JSR123', 'Aguirre Antonella', 'Ford, Focus', miInterior, miCarroceria, miMecanica, ruedas);
console.log(miAuto);
miAuto.prenderApagar();
miAuto.encenderAire('calor');
var ruedaAuxilio = new Rueda('michelin', 30, 'RUEDA AUXILIO');
miAuto.cambiarRueda('delanteraIZQ', ruedaAuxilio);
console.log(miAuto);
