"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
var Producto = /** @class */ (function () {
    function Producto(_id, _marca, _descripcion, _precio) {
        this._id = _id;
        this.marca = _marca;
        this.descripcion = _descripcion;
        this._precio = _precio;
    }
    Object.defineProperty(Producto.prototype, "precio", {
        get: function () {
            return this._precio;
        },
        set: function (nuevoPrecio) {
            this._precio = nuevoPrecio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return Producto;
}());
exports.Producto = Producto;
