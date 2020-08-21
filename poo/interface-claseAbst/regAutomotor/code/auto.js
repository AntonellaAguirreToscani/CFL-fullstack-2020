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
exports.Auto = void 0;
var vehiculo_1 = require("./vehiculo");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(_tipo, _titular, _patente, _marcaModelo, _cantPuertas) {
        var _this = _super.call(this, _tipo, _titular, _patente, _marcaModelo) || this;
        _this.cantidadPuertas = _cantPuertas;
        return _this;
    }
    Auto.prototype.acelerar = function () {
        this.velocidadActual = this.velocidadActual + 10;
    };
    return Auto;
}(vehiculo_1.Vehiculo));
exports.Auto = Auto;
