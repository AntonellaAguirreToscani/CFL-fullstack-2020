import { Persona } from './persona'

export class RunnerAmateur extends Persona{
    public constructor(_nombre:string){
        super(_nombre)
    }

    public correr(): number {
        let metrosMinuto: number;
       return (this.capacidadCorrer==true)?metrosMinuto=100:metrosMinuto=50;
    }

}