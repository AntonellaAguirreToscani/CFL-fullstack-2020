"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(gestor) {
        // this.gestor= new GestorArchivo(nombreArchivoTxt);
        this.gestor = gestor;
        this.listadoVehiculos = this.gestor.cargarVehiculos();
    }
    RegistroAutomotor.prototype.buscarVehiculo = function (patente) {
        var vehiculoEncontrado = this.listadoVehiculos.reduce(function (object, vehiculo) {
            if (vehiculo.patente == patente) {
                object = vehiculo;
            }
            return object;
        }, {}); // Casting!
        return vehiculoEncontrado;
    };
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculoNuevo) {
        this.listadoVehiculos.push(vehiculoNuevo);
        this.gestor.escribirLinea(vehiculoNuevo);
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (patente) {
        var _this = this;
        this.listadoVehiculos.map(function (vehiculo, index) {
            if (vehiculo.patente == patente) {
                _this.listadoVehiculos.splice(index, 1);
                _this.gestor.eliminarLinea(vehiculo.patente);
            }
        });
    };
    RegistroAutomotor.prototype.actualizarTitular = function (patente, nuevoTit) {
        this.buscarVehiculo(patente).titular = nuevoTit;
        this.gestor.actualizarTitularTxt(patente, nuevoTit);
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
