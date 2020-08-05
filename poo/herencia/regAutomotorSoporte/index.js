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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var Motor = /** @class */ (function () {
    function Motor(_numero, _clase, _estado) {
        this.numero = _numero;
        (_clase == null || _clase == undefined) ? this.clase = 'Motor de Combustion' : this.clase = _clase;
        (_estado == null || _estado == undefined) ? this._estado = 'funcionando' : this._estado = _estado;
    }
    Object.defineProperty(Motor.prototype, "estado", {
        get: function () {
            return this._estado;
        },
        enumerable: false,
        configurable: true
    });
    return Motor;
}());
var Rueda = /** @class */ (function () {
    function Rueda(_marca, _rodado) {
        this.marca = _marca;
        this.rodado = _rodado;
    }
    return Rueda;
}());
var Vehiculo = /** @class */ (function () {
    function Vehiculo(_tipo, _patente, _motor, _ruedas, _marcaModelo, _titular) {
        this.tipo = _tipo;
        this._patente = _patente;
        this.motor = _motor;
        this.ruedas = _ruedas;
        this.volante = true;
        this.tanqueCombustibleLitros = Math.random() * (100 - 1) + 1;
        this.marcaModelo = _marcaModelo;
        (_titular == null || _titular == undefined) ? this.titular = 'Vehiculo de Fabrica' : this.titular = _titular;
    }
    Vehiculo.prototype.ponerMarcha = function () {
        var ponerMarcha;
        return (this.motor.estado == 'funcionando' && this.tanqueCombustibleLitros != 0) ? ponerMarcha = true : ponerMarcha = false;
    };
    Object.defineProperty(Vehiculo.prototype, "patente", {
        get: function () {
            return this._patente;
        },
        enumerable: false,
        configurable: true
    });
    Vehiculo.Empty = function () {
        var ruedas = [];
        return new Vehiculo(0, '', new Motor(0), ruedas, '', '');
    };
    return Vehiculo;
}());
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(_tipo, _patente, _motor, _ruedas, _marcaModelo, _cantPuertas, _titular) {
        var _this = _super.call(this, _tipo, _patente, _motor, _ruedas, _marcaModelo, _titular) || this;
        _this.cantPuertas = _cantPuertas;
        _this.baul = true;
        return _this;
    }
    return Auto;
}(Vehiculo));
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(_tipo, _patente, _motor, _ruedas, _marcaModelo, _titular) {
        var _this = _super.call(this, _tipo, _patente, _motor, _ruedas, _marcaModelo, _titular) || this;
        _this.acoplado = true;
        return _this;
    }
    return Camion;
}(Vehiculo));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(_tipo, _patente, _motor, _ruedas, _marcaModelo, _titular) {
        var _this = _super.call(this, _tipo, _patente, _motor, _ruedas, _marcaModelo, _titular) || this;
        _this.baulera = true;
        return _this;
    }
    return Moto;
}(Vehiculo));
var GestorArchivo = /** @class */ (function () {
    function GestorArchivo(_nombreArchivo) {
        var vehiculos = fs.readFileSync(this.nombreArchivo = _nombreArchivo, 'utf-8');
        this._listado = vehiculos.split('\r\n');
    }
    Object.defineProperty(GestorArchivo.prototype, "listado", {
        get: function () {
            return this._listado;
        },
        enumerable: false,
        configurable: true
    });
    return GestorArchivo;
}());
//Clase intermediaria entre GestorArchivo y RegistroAutomotor
var ConversorVehiculos = /** @class */ (function () {
    function ConversorVehiculos(_nombreArchivo) {
        this.gestor = new GestorArchivo(_nombreArchivo);
    }
    ConversorVehiculos.prototype.cargarVehiculos = function () {
        var listado = [];
        this.gestor.listado.map(function (item) {
            var cadena = item.split(',');
            switch (parseInt(cadena[0])) {
                case 1: //Representa un Auto
                    var tipo1 = parseInt(cadena[0]);
                    var patente = cadena[1];
                    var motorAuto = new Motor(parseInt(cadena[2]));
                    var ruedasx4 = [new Rueda(cadena[3], parseInt(cadena[4])), new Rueda(cadena[5], parseInt(cadena[6])),
                        new Rueda(cadena[7], parseInt(cadena[8])), new Rueda(cadena[9], parseInt(cadena[10])),];
                    var marca = cadena[11];
                    var puertas = parseInt(cadena[12]);
                    var titular = cadena[13];
                    listado.push(new Auto(tipo1, patente, motorAuto, ruedasx4, marca, puertas, titular));
                    break;
                case 2: //Representa una Moto
                    var tipo2 = parseInt(cadena[0]);
                    var patent = cadena[1];
                    var motorMoto = new Motor(parseInt(cadena[2]));
                    var Ruedasx2 = [new Rueda(cadena[3], parseInt(cadena[4])), new Rueda(cadena[5], parseInt(cadena[6]))];
                    var marc = cadena[7];
                    listado.push(new Moto(tipo2, patent, motorMoto, Ruedasx2, marc));
                    break;
                case 3: //Representa un Camion 
                    var tipo3 = parseInt(cadena[0]);
                    var pat = cadena[1];
                    var motorCam = new Motor(parseInt(cadena[2]));
                    var ruedasx8 = [new Rueda(cadena[3], parseInt(cadena[4])), new Rueda(cadena[5], parseInt(cadena[6])),
                        new Rueda(cadena[7], parseInt(cadena[8])), new Rueda(cadena[9], parseInt(cadena[10])),
                        new Rueda(cadena[11], parseInt(cadena[12])), new Rueda(cadena[13], parseInt(cadena[14])),
                        new Rueda(cadena[15], parseInt(cadena[16])), new Rueda(cadena[17], parseInt(cadena[18]))];
                    var marcaCam = cadena[19];
                    var titularCam = cadena[20];
                    listado.push(new Camion(tipo3, pat, motorCam, ruedasx8, marcaCam, titularCam));
                    break;
            }
        });
        return listado;
    };
    return ConversorVehiculos;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(_conversor) {
        this.conversor = _conversor;
        this.listadoVehiculos = this.conversor.cargarVehiculos();
    }
    RegistroAutomotor.prototype.buscarVehiculo = function (patente) {
        var vehiculo = Vehiculo.Empty();
        for (var i = 0; i < this.listadoVehiculos.length; i++) {
            (this.listadoVehiculos[i].patente == patente) ? vehiculo = this.listadoVehiculos[i] : vehiculo;
        }
        return vehiculo;
    };
    return RegistroAutomotor;
}());
var conversor = new ConversorVehiculos('vehiculos.txt');
var regAutomotor = new RegistroAutomotor(conversor);
console.log(regAutomotor.buscarVehiculo('ACC001'));
console.log(regAutomotor);
