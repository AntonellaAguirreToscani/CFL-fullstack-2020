import {Empleado} from './empleado';
import {Legajo} from './legajo';
import {Salario} from './salario';

export class Administrativo extends Empleado{
    protected perfilAdministrativo: boolean;

    public constructor(_nombre: string,_fechaNac: Date,_dni: number,_legajo:Legajo,_salario:Salario){
        super(_nombre,_fechaNac,_dni,_legajo,_salario)
        this.perfilAdministrativo= true;
    }
    public calcularHoras():number{
        return (this.perfilAdministrativo == true)? 6 : 8;
    }
    public darBono():number{
        return this.consultarSalario() + 3000;
    }
}