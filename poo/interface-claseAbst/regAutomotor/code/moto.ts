import {Vehiculo} from './vehiculo';

export class Moto extends Vehiculo {
    private baulera: boolean;

    public constructor(_tipo: number,_titular:string,_patente:string,_marcaModelo:string) {
        super(_tipo,_titular,_patente,_marcaModelo);
        this.baulera = true;
    }
    public acelerar():void{
        this.velocidadActual= this.velocidadActual + 15;
    }
}
