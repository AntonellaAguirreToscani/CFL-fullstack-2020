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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var Persona = /** @class */ (function () {
    function Persona(_nombreComp, _dni, _fechaNac) {
        this.nombreCompleto = _nombreComp;
        this.dni = _dni;
        this.fechaNacimiento = _fechaNac;
    }
    return Persona;
}());
var Autor = /** @class */ (function (_super) {
    __extends(Autor, _super);
    function Autor(_nombreComp, _dni, _fechaNac, _genero, _cantLibros) {
        var _this = _super.call(this, _nombreComp, _dni, _fechaNac) || this;
        _this.genero = _genero;
        (_cantLibros == null || _cantLibros == undefined) ? _this.cantidadLibros = 0 : _this.cantidadLibros = _cantLibros;
        return _this;
    }
    return Autor;
}(Persona));
var Indice = /** @class */ (function () {
    function Indice(_titulo, _cantCapitulos) {
        this.titulo = _titulo;
        this.cantCapitulos = _cantCapitulos;
    }
    return Indice;
}());
var Libro = /** @class */ (function () {
    function Libro(_id, _nombre, _indice, _cantHojas, _autor, _precio) {
        this._id = _id;
        this.nombre = _nombre;
        this.indice = _indice;
        this.cantidadHojas = _cantHojas;
        this.autor = _autor;
        this._precio = _precio;
    }
    Object.defineProperty(Libro.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "precio", {
        get: function () {
            return this._precio;
        },
        set: function (precioActualizado) {
            this._precio = precioActualizado;
        },
        enumerable: false,
        configurable: true
    });
    Libro.Empty = function () {
        return new Libro(0, '', new Indice('', 0), 0, new Autor('', 0, new Date(''), '', 0), 0);
    };
    return Libro;
}());
//Clase encargada de traer el txt en Array:string (division por lineas)
var GestorArchivo = /** @class */ (function () {
    function GestorArchivo(_nombreArchivo) {
        var libros = fs.readFileSync(this.nombreArchivo = _nombreArchivo, 'utf-8');
        this._listado = libros.split('\r\n');
    }
    Object.defineProperty(GestorArchivo.prototype, "listado", {
        get: function () {
            return this._listado;
        },
        enumerable: false,
        configurable: true
    });
    return GestorArchivo;
}());
//Intermediaria entre GestorARCHIVOS y GestorLIBROS
var ConversorLibros = /** @class */ (function () {
    function ConversorLibros(archivo) {
        this.gestor = new GestorArchivo(archivo);
    }
    ConversorLibros.prototype.llenarListado = function () {
        var listadoLibros = [];
        this.gestor.listado.map(function (item) {
            var cadena = item.split(',');
            var id = parseInt(cadena[0]);
            var nombre = cadena[1];
            var indice = new Indice(cadena[2], parseInt(cadena[3]));
            var cantHojas = parseInt(cadena[4]);
            var autor = new Autor(cadena[5], parseInt(cadena[6]), new Date(cadena[7]), cadena[8], parseInt(cadena[8]));
            var precio = parseInt(cadena[9]);
            listadoLibros.push(new Libro(id, nombre, indice, cantHojas, autor, precio));
        });
        return listadoLibros;
    };
    return ConversorLibros;
}());
var GestorLibros = /** @class */ (function () {
    function GestorLibros(_baseDatos) {
        this.baseDatos = _baseDatos;
        this.listadoLibros = this.baseDatos.llenarListado();
    }
    GestorLibros.prototype.consultarLibro = function (id) {
        var libroEncontrado = Libro.Empty();
        this.listadoLibros.forEach(function (libro) {
            if (libro.id == id) {
                libroEncontrado = libro;
            }
        });
        return libroEncontrado;
    };
    GestorLibros.prototype.insertarLibro = function (libroNuevo) {
        this.listadoLibros.push(libroNuevo);
    };
    GestorLibros.prototype.eliminarLibro = function (id) {
        var _this = this;
        this.listadoLibros.forEach(function (libro, index) {
            if (libro.id == id) {
                _this.listadoLibros.splice(index, 1);
            }
        });
    };
    GestorLibros.prototype.modificarPrecio = function (id, nuevoPrecio) {
        this.consultarLibro(id).precio = nuevoPrecio;
    };
    return GestorLibros;
}());
var baseDatos = new ConversorLibros('libros.txt');
var libreria = new GestorLibros(baseDatos);
var nuevoLibro = new Libro(1004, 'Aprende A programar2', new Indice('Para Seguir Aprendiendo..', 4), 150, new Autor('Wainewright Max', 29000134, new Date('11-01-1989'), 'Didactico', 4), 1600);
libreria.modificarPrecio(1003, 100);
libreria.eliminarLibro(1001);
libreria.insertarLibro(nuevoLibro);
console.log(libreria);
