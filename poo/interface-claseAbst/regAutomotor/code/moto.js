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
exports.Moto = void 0;
var vehiculo_1 = require("./vehiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(_tipo, _titular, _patente, _marcaModelo) {
        var _this = _super.call(this, _tipo, _titular, _patente, _marcaModelo) || this;
        _this.baulera = true;
        return _this;
    }
    Moto.prototype.acelerar = function () {
        this.velocidadActual = this.velocidadActual + 15;
    };
    return Moto;
}(vehiculo_1.Vehiculo));
exports.Moto = Moto;
