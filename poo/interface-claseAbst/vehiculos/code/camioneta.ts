import {Vehiculo} from './vehiculo';

export class Camioneta extends Vehiculo{
    protected limiteVelocidad: number;

    public constructor(_patente:string,_modeloMarca:string,_color:string,_titular:string){
        super(_patente,_modeloMarca,_color,_titular)
        this.limiteVelocidad= 90;
    }

    public acelerar():void{
        this.velocidadActual= (this.velocidadActual<= 85)? this.velocidadActual + 5 : 0;
    }
}