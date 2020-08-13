import {Empleado} from './empleado';
import {Legajo} from './legajo';
import {Salario} from './salario';

export class Gerente extends Empleado{
    protected accionista: boolean;

    public constructor(_nombre: string,_fechaNac: Date,_dni: number,_legajo:Legajo,_salario:Salario){
        super(_nombre,_fechaNac,_dni,_legajo,_salario)
        this.accionista=true;
    }
    public calcularHoras():number{
        return (this.accionista == true)? 4 : 4;
    }

}