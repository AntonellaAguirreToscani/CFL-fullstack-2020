export abstract class Vehiculo {
    protected tipo: number;
    private _titular: string;
    protected _patente: string;
    protected tanqueCombustibleLitros: number;
    protected marcaModelo: string;
    private onOff : boolean;
    public velocidadActual:number;

    public constructor(_tipo: number,_titular:string,_patente:string,_marcaModelo:string) {
        this.tipo = _tipo;
        this._titular=_titular;
        this._patente = _patente;
        this.tanqueCombustibleLitros = Math.random() * (100 - 1) + 1;
        this.marcaModelo = _marcaModelo;
        this.onOff = false;
        this.velocidadActual=0;
    }
    abstract acelerar():void;

    public prender():void{
        this.onOff= (this.tanqueCombustibleLitros > 0)? true : false;
    }
    public apagar():void{
        this.onOff=false;
    }
    public get patente(): string {
        return this._patente;
    }
    public get titular(): string {
        return this._titular;
    }
    public set titular(nuevo:string) {
        this._titular=nuevo;
    }
}
