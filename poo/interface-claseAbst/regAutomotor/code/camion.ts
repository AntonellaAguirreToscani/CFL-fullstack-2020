import {Vehiculo} from './vehiculo';

export class Camion extends Vehiculo {
    private acoplado: boolean;
    protected velocidadMaxima: number;

    public constructor(_tipo: number,_titular:string,_patente:string,_marcaModelo:string) {
        super(_tipo,_titular,_patente,_marcaModelo)
        this.acoplado = true;
        this.velocidadMaxima= 90;
    }
    public acelerar():void{
       this.velocidadActual= (this.velocidadActual<= 85)? this.velocidadActual + 5: this.velocidadActual;
    }
}