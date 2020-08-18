import {Vehiculo} from './vehiculo';

export class AutoGasolero extends Vehiculo{
    protected tanqueGas: boolean;

    public constructor(_patente:string,_modeloMarca:string,_color:string,_titular:string){
        super(_patente,_modeloMarca,_color,_titular)
        this.tanqueGas= true;
    }

    public acelerar():void{
        this.velocidadActual= (this.tanqueGas)? this.velocidadActual + 10 : 0;
    }
}