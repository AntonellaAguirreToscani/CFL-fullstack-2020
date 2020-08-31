export abstract class Vehiculo{
    private patente:string;
    private modeloMarca: string;
    private color: string;
    private titular: string;
    public velocidadActual:number;

    public constructor(_patente:string,_modeloMarca:string,_color:string,_titular:string){
        this.patente=_patente;
        this.modeloMarca=_modeloMarca;
        this.color=_color;
        this.titular=_titular;
        this.velocidadActual= 0;
    }
    abstract acelerar():void;

    public frenar():void{
        this.velocidadActual= this.velocidadActual - 10;
    }
}