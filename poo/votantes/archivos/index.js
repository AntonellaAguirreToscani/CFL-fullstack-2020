"use strict";
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
var Padron = /** @class */ (function () {
    function Padron(_escuela, _nombres) {
        this.escuela = _escuela;
        this.nombres = _nombres;
    }
    return Padron;
}());
;
var names = fs.readFileSync('names.txt', 'utf-8');
var schools = fs.readFileSync('school.txt', 'utf-8');
var arrayNames = names.split(',');
var arraySchools = schools.split(',');
var padron = searchSchool(arraySchools);
//funcion que filtra por la primer letra del apellido y retorna un arreglo nuevo lleno de los votantes solicitados
function filterItems(query, query1, query2, query3, query4) {
    return arrayNames.filter(function (name) {
        if (name.charAt(0) == query || name.charAt(0) == query1 || name.charAt(0) == query2 || name.charAt(0) == query3 || name.charAt(0) == query4) {
            return name;
        }
    });
}
;
//funcion que retorna listado completo de votantes en cada colegio
function searchSchool(array) {
    var assigned = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].charAt(0) == '1') {
            var names_1 = filterItems('A', 'B', 'C', 'D', 'E');
            var school = array[i];
            assigned.push(new Padron(school, names_1));
        }
        else {
            if (array[i].charAt(0) == '2') {
                var names_2 = filterItems('F', 'G', 'H', 'I', 'J');
                var school = array[i];
                assigned.push(new Padron(school, names_2));
            }
            else {
                if (array[i].charAt(0) == '3') {
                    var names_3 = filterItems('K', 'L', 'M', 'N', 'O');
                    var school = array[i];
                    assigned.push(new Padron(school, names_3));
                }
                else {
                    if (array[i].charAt(0) == '4') {
                        var names_4 = filterItems('P', 'Q', 'R', 'S', 'T');
                        var school = array[i];
                        assigned.push(new Padron(school, names_4));
                    }
                    else {
                        if (array[i].charAt(0) == '5') {
                            var names_5 = filterItems('U', 'V', 'X', 'Y', 'Z');
                            var school = array[i];
                            assigned.push(new Padron(school, names_5));
                        }
                    }
                }
            }
        }
    }
    return assigned;
}
;
console.log(padron);
