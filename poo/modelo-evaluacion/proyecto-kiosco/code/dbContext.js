"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbContext = void 0;
var gestorArchivos_1 = require("./gestorArchivos");
var stockProducto_1 = require("./stockProducto");
var DbContext = /** @class */ (function () {
    function DbContext() {
        this.gestor = new gestorArchivos_1.GestorArchivos('stock.txt', 'ventas.txt');
    }
    DbContext.prototype.listarStock = function () {
        var stocks = [];
        // RECORRO EL SET Y LLENO EL ARREGLO DE OBJ
        this.gestor.elegirSet('stock.txt').forEach(function (item) {
            var cadena = item.split(',');
            stocks.push(new stockProducto_1.StockProducto(parseInt(cadena[0]), cadena[1], cadena[2], parseInt(cadena[3]), parseInt(cadena[4])));
        });
        return stocks;
    };
    DbContext.prototype.stockToString = function (obj) {
        var texto = [];
        for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) { //RECORRO EL OBJETO
            var _b = _a[_i], key = _b[0], value = _b[1];
            texto.push(value);
        }
        return texto.join(',');
    };
    DbContext.prototype.agregarProducto = function (obj) {
        this.gestor.agregarLinea(this.stockToString(obj), 'stock.txt');
    };
    DbContext.prototype.eliminarProducto = function (id) {
        this.gestor.eliminarLinea(id, 'stock.txt');
    };
    DbContext.prototype.agregarVenta = function (texto) {
        this.gestor.agregarLinea(texto, 'ventas.txt');
    };
    DbContext.prototype.eliminarVenta = function (id) {
        this.gestor.eliminarLinea(id, 'ventas.txt');
    };
    DbContext.prototype.actualizarStockProducto = function (id, cantidad, accion) {
        var linea = this.gestor.buscarLinea(id, 'stock.txt');
        var arreglo = linea.split(',');
        switch (accion) {
            case 'sumar':
                arreglo[4] = (parseInt(arreglo[4]) + cantidad).toString();
                break;
            case 'restar':
                arreglo[4] = (parseInt(arreglo[4]) - cantidad).toString();
                break;
        }
        var modificado = Array.from(this.gestor.elegirSet('stock.txt'));
        modificado[this.buscarPosicion(linea)] = arreglo.join(",");
        // instancio el nuevo Set con el listado modificado!
        this.gestor.listado1 = new Set(modificado);
        this.gestor.actualizarArchivos();
    };
    DbContext.prototype.buscarPosicion = function (linea) {
        var posicion = -1;
        Array.from(this.gestor.elegirSet('stock.txt')).forEach(function (item, index) {
            posicion = (item.indexOf(linea) > -1) ? index : posicion;
        });
        return posicion;
    };
    return DbContext;
}());
exports.DbContext = DbContext;
