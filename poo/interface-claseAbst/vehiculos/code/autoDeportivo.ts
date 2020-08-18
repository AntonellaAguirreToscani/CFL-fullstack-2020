import {Vehiculo} from './vehiculo';

export class AutoDeportivo extends Vehiculo{
    protected inyeccionElectronica: boolean;

    public constructor(_patente:string,_modeloMarca:string,_color:string,_titular:string){
        super(_patente,_modeloMarca,_color,_titular)
        this.inyeccionElectronica= true;
    }

    public acelerar():void{
        this.velocidadActual= (this.inyeccionElectronica)? this.velocidadActual + 20 : 0;
    }
    public frenar():void{
        this.velocidadActual = this.velocidadActual - 20;
    }
}