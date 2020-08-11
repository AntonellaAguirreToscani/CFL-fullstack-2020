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
var Helado = /** @class */ (function () {
    function Helado(_codigo, _sabor, _base) {
        this._codigo = _codigo;
        this.azucar = true;
        this.sabor = _sabor;
        this.base = _base;
    }
    return Helado;
}());
var TortaHelada = /** @class */ (function (_super) {
    __extends(TortaHelada, _super);
    function TortaHelada(_codigo, _sabor, _base) {
        var _this = _super.call(this, _codigo, _sabor, _base) || this;
        _this.vizcocho = true;
        _this.conberturaChocolate = true;
        return _this;
    }
    return TortaHelada;
}(Helado));
var Sundae = /** @class */ (function (_super) {
    __extends(Sundae, _super);
    function Sundae(_codigo, _sabor, _base, _salsa, _topping) {
        var _this = _super.call(this, _codigo, _sabor, _base) || this;
        _this.salsa = _salsa;
        _this.topping = _topping;
        return _this;
    }
    return Sundae;
}(Helado));
var Almendrado = /** @class */ (function (_super) {
    __extends(Almendrado, _super);
    function Almendrado(_codigo, _sabor, _base) {
        var _this = _super.call(this, _codigo, _sabor, _base) || this;
        _this.almendras = true;
        return _this;
    }
    return Almendrado;
}(Helado));
var Stock = /** @class */ (function () {
    function Stock(_codigo, _precio, _cantidad) {
        this._codigo = _codigo;
        this._precio = _precio;
        (_cantidad == null || _cantidad == undefined) ? this._cantidad = _cantidad = 0 : this._cantidad = _cantidad;
    }
    Stock.prototype.aumentarStock = function (cantidad) {
        this._cantidad = this._cantidad + cantidad;
    };
    Stock.prototype.restarProducto = function () {
        this._cantidad--;
    };
    Object.defineProperty(Stock.prototype, "cantidad", {
        get: function () {
            return this._cantidad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stock.prototype, "codigo", {
        get: function () {
            return this._codigo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stock.prototype, "precio", {
        get: function () {
            return this._precio;
        },
        set: function (nuevoPrecio) {
            this.precio = nuevoPrecio;
        },
        enumerable: false,
        configurable: true
    });
    return Stock;
}());
var Heladeria = /** @class */ (function () {
    function Heladeria(_postresHelados, _stock) {
        this.cartelera = _postresHelados;
        this.stock = _stock;
    }
    Heladeria.prototype.consultarStockHelado = function (codigo) {
        var stockEncontrado = this.stock.reduce(function (object, stock) {
            if (stock.codigo == codigo) {
                object = stock;
            }
            return object;
        }, {}); // Casting!
        return stockEncontrado;
    };
    Heladeria.prototype.venderHelado = function (codigo) {
        var stock = this.consultarStockHelado(codigo);
        if (stock.cantidad > 0) {
            stock.restarProducto();
            console.log('Total a abonar $' + stock.precio);
        }
        else {
            stock.aumentarStock(10); //Como no hay Stock, se repone!
            this.venderHelado(codigo); //Se llama recursivamente a la funcion, xq el stock dejó de ser 0
        }
    };
    return Heladeria;
}());
var tortaHelada = new TortaHelada(101, 'vainilla', 'crema');
var sundaeGloton = new Sundae(102, 'chocolate', 'crema', 'dulce de leche', 'chocolinas+nueces');
var sundaeSinCulpa = new Sundae(103, 'frutilla', 'agua', 'maracuya', 'fruta fresca');
var almendrado = new Almendrado(104, 'almendras', 'crema');
var stock101 = new Stock(101, 500, 0); //SIN STOCK
var stock102 = new Stock(102, 100, 10);
var stock103 = new Stock(103, 100, 15);
var stock104 = new Stock(104, 300, 20);
var heladeria = new Heladeria([tortaHelada, sundaeGloton, sundaeSinCulpa, almendrado], [stock101, stock102, stock103, stock104]);
// Se intenta vender un helado que no tiene stock. Primero se repone, luevo se vende.                             
heladeria.venderHelado(101);
console.log(heladeria); //se verá como aumentó el stock del 101!
