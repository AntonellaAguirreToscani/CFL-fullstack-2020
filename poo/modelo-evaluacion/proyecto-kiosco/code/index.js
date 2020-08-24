"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kiosco_1 = require("./kiosco");
var stockProducto_1 = require("./stockProducto");
var kiosco = new kiosco_1.Kiosco('Mi kioskito S.R.L');
var nuevoProducto = new stockProducto_1.StockProducto(5, 'Milka', 'Cholocate Negro', 150, 20);
//agrega nuevo producto al listado:StockProducto[] y tambien el Stock.txt
kiosco.agregarProducto(nuevoProducto);
//SUMA al stock del producto elegido la cantidad especificada
try {
    kiosco.actualizarStockProducto(5, 100); // En la funcion elegirSet se encuentra el throw Error
}
catch (error) { // en caso de que le pasemos MAL el nombre del archivo en DBContext(linea61) saltará el ERROR
    console.log(error);
}
;
//Agrega venta al txt VENTAS y modifica listado:StockProducto[] / stock.txt actualizando la cantidad restando -1 prod
kiosco.venderProducto(5, 2007);
console.log(kiosco);
