"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var legajo_1 = require("./legajo");
var salario_1 = require("./salario");
var gerente_1 = require("./gerente");
var administrativo_1 = require("./administrativo");
var operario_1 = require("./operario");
var legajo1001 = new legajo_1.Legajo(1001, new Date('09-07-2000'));
var salarioGerente = new salario_1.Salario(150000);
var gerente = new gerente_1.Gerente('Roberto Rojas', new Date('11-01-1988'), 1202165, legajo1001, salarioGerente);
var legajo1002 = new legajo_1.Legajo(1001, new Date('09-07-2000'));
var salarioAdministrativo = new salario_1.Salario(70000);
var secretaria = new administrativo_1.Administrativo('Rosa Marin', new Date('08-12-1992'), 56789085, legajo1002, salarioAdministrativo);
var legajo1003 = new legajo_1.Legajo(1003, new Date('12-23-2003'));
var salarioOperario = new salario_1.Salario(70000);
var operario = new operario_1.Operario('Carlos Aguirre', new Date('09-07-1956'), 56787653, legajo1003, salarioOperario);
/* POLIMORFISMO aplicado al metodo: calcular horas() y darBono(),
este ultimo se aplicará a todos los empleados menos al gerente*/
console.log(gerente.calcularHoras()); // trabajará 4 hs diarias
console.log(gerente.consultarSalario());
console.log(secretaria.calcularHoras()); // trabajará 6 horas diarias
console.log(secretaria.darBono());
console.log(operario.calcularHoras()); // trabajará 8 horas diarias
console.log(operario.darBono());
