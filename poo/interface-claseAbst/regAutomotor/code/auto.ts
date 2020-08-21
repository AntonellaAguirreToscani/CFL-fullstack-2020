import {Vehiculo} from './vehiculo';

export class Auto extends Vehiculo{
    protected cantidadPuertas: number;

    public constructor(_tipo: number,_titular:string,_patente:string,_marcaModelo:string,_cantPuertas:number){
        super(_tipo,_titular,_patente,_marcaModelo)
        this.cantidadPuertas=_cantPuertas;
    }
    public acelerar():void{
        this.velocidadActual= this.velocidadActual + 10;
    }
}