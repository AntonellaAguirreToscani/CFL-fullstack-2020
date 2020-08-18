import {Telefono} from './telefono';

export class SmartPhone implements Telefono{
    private estaPrendido: boolean;
    protected camara: boolean;

    public constructor(){
        this.estaPrendido= false;
        this.camara= true;
    }
    public prender():void{
        this.estaPrendido = this.estaPrendido = true;
    }
    public apagar():void{
        this.estaPrendido = this.estaPrendido = false;
    }
    public llamar(numero:number):any{
        return `Llamando..... ${numero}`;
    }
    public sacarFoto():string{
        return (this.camara)? `Foto!!` : `Camara Rota!`;
    }
}