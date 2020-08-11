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
        let metrosMinuto: number=0;
       return (this.entrenamientoDiario==true && this.dietaSaludable==true)? metrosMinuto=150:metrosMinuto=100;
    }
}
