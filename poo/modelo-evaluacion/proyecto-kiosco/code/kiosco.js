"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kiosco = void 0;
var dbContext_1 = require("./dbContext");
var Kiosco = /** @class */ (function () {
    function Kiosco(_nombreKiosco) {
        this.nombreKiosco = _nombreKiosco;
        this.dbContext = new dbContext_1.DbContext();
        this.listadoProductos = this.dbContext.listarStock();
    }
    Kiosco.prototype.buscarProducto = function (id) {
        var producto = this.listadoProductos.reduce(function (objeto, producto) {
            if (producto.id == id)
                objeto = producto;
            return objeto;
        }, {});
        return producto;
    };
    Kiosco.prototype.venderProducto = function (idProd, idVenta) {
        var producto = this.buscarProducto(idProd);
        var precio = producto.precio;
        var venta = [idVenta.toString(), precio.toString()];
        this.dbContext.agregarVenta(venta.join(','));
        var totalSotck = producto.cantidad - 1;
        this.dbContext.actualizarStockProducto(idProd, 1, 'restar');
    };
    Kiosco.prototype.actualizarStockProducto = function (id, cantidad) {
        this.buscarProducto(id).cantidad = this.buscarProducto(id).cantidad + cantidad;
        this.dbContext.actualizarStockProducto(id, cantidad, 'sumar');
    };
    Kiosco.prototype.agregarProducto = function (nuevo) {
        this.listadoProductos.push(nuevo);
        this.dbContext.agregarProducto(nuevo);
    };
    return Kiosco;
}());
exports.Kiosco = Kiosco;
