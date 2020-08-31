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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoDeportivo = void 0;
var vehiculo_1 = require("./vehiculo");
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(_patente, _modeloMarca, _color, _titular) {
        var _this = _super.call(this, _patente, _modeloMarca, _color, _titular) || this;
        _this.inyeccionElectronica = true;
        return _this;
    }
    AutoDeportivo.prototype.acelerar = function () {
        this.velocidadActual = (this.inyeccionElectronica) ? this.velocidadActual + 20 : 0;
    };
    AutoDeportivo.prototype.frenar = function () {
        this.velocidadActual = this.velocidadActual - 20;
    };
    return AutoDeportivo;
}(vehiculo_1.Vehiculo));
exports.AutoDeportivo = AutoDeportivo;
