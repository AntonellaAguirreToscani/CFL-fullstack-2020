import { Persona } from './persona'

export class DeportistaProfesional extends Persona {
    private entrenamientoDiario: boolean;
    private dietaSaludable: boolean;

    public constructor(_nombre: string) {
        super(_nombre)
        this.entrenamientoDiario = true;
        this.dietaSaludable = true;
    }
    public correr(): number {
       return (this.entrenamientoDiario==true && this.dietaSaludable==true)? 150: 100;
    }
}
