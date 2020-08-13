import {Legajo} from './legajo';
import {Salario} from './salario';
import {Gerente} from './gerente';
import {Administrativo} from './administrativo'; 
import {Operario} from './operario';

let legajo1001: Legajo = new Legajo(1001,new Date('09-07-2000'));
let salarioGerente: Salario = new Salario(150000);
let gerente: Gerente= new Gerente('Roberto Rojas',new Date('11-01-1988'),1202165,legajo1001,salarioGerente);

let legajo1002: Legajo = new Legajo(1001,new Date('09-07-2000'));
let salarioAdministrativo: Salario = new Salario(70000);
let secretaria: Administrativo= new Administrativo('Rosa Marin',new Date('08-12-1992'),56789085,legajo1002,salarioAdministrativo);

let legajo1003: Legajo = new Legajo(1003,new Date('12-23-2003'));
let salarioOperario: Salario = new Salario(70000);
let operario: Operario= new Operario('Carlos Aguirre',new Date('09-07-1956'),56787653,legajo1003,salarioOperario);

/* POLIMORFISMO aplicado al metodo: calcular horas() y darBono(), 
este ultimo se aplicará a todos los empleados menos al gerente*/

console.log(gerente.calcularHoras()); // trabajará 4 hs diarias
console.log(gerente.consultarSalario());
console.log(secretaria.calcularHoras()); // trabajará 6 horas diarias
console.log(secretaria.darBono());
console.log(operario.calcularHoras()); // trabajará 8 horas diarias
console.log(operario.darBono());