export class Producto{
    private _id: number;
    protected marca: string;
    private descripcion: string;
    private _precio: number;

    public constructor(_id:number,_marca:string,_descripcion:string,_precio:number){
        this._id=_id;
        this.marca=_marca;
        this.descripcion=_descripcion;
        this._precio=_precio;
    }

    public get precio():number{
        return this._precio;
    } 
    public set precio(nuevoPrecio:number){
       this._precio= nuevoPrecio;
    } 
    public get id():number{
        return this._id;
    }

}