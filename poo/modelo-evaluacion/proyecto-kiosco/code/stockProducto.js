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
exports.StockProducto = void 0;
var producto_1 = require("./producto");
var StockProducto = /** @class */ (function (_super) {
    __extends(StockProducto, _super);
    function StockProducto(_id, _marca, _descripcion, _precio, _cantidad) {
        var _this = _super.call(this, _id, _marca, _descripcion, _precio) || this;
        _this._cantidad = (_cantidad == null || _cantidad == undefined) ? 0 : _cantidad;
        return _this;
    }
    Object.defineProperty(StockProducto.prototype, "cantidad", {
        get: function () {
            return this._cantidad;
        },
        set: function (cant) {
            this._cantidad = cant;
        },
        enumerable: false,
        configurable: true
    });
    return StockProducto;
}(producto_1.Producto));
exports.StockProducto = StockProducto;
