import {Empleado} from './empleado';
import {Legajo} from './legajo';
import {Salario} from './salario';

export class Operario extends Empleado{
    private manejoHerramientas: boolean;

    public constructor(_nombre: string,_fechaNac: Date,_dni: number,_legajo:Legajo,_salario:Salario){
        super(_nombre,_fechaNac,_dni,_legajo,_salario)
        this.manejoHerramientas= true;
    }
    public calcularHoras():number{
        return (this.manejoHerramientas == true)? 8 : 10;
    }
    public darBono():number{
        return this.consultarSalario() + 5000;
    }

}