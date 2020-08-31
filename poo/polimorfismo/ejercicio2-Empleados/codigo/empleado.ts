import {Persona} from './persona';
import {Legajo} from './legajo';
import {Salario} from './salario';

export class Empleado extends Persona{
    private legajo: Legajo;
    private salario: Salario;
    private cargaHoraria: number;

    public constructor(_nombre: string,_fechaNac: Date,_dni: number,_legajo:Legajo,_salario:Salario){
        super(_nombre,_fechaNac,_dni)
        this.legajo=_legajo;
        this.salario= _salario;
        this.cargaHoraria= this.calcularHoras();
    }

    public calcularHoras():number{
      return (this.legajo.tipoContrato == 'Permamente')? 8 : 0;    
    }
    public consultarSalario():number{
        return this.salario.salarioNeto;
    }
    public darBono():number{
        return this.consultarSalario() +1000;
    }
}