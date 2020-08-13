import { Persona } from './persona'

export class RunnerAmateur extends Persona{
    public constructor(_nombre:string){
        super(_nombre)
    }

    public correr(): number {
       return (this.capacidadCorrer==true)? 100: 50;
    }

}