import {Producto} from './producto';

export class StockProducto extends Producto{
    private _cantidad: number;

    public constructor(_id:number,_marca:string,_descripcion:string,_precio:number,_cantidad?:number){
        super(_id,_marca,_descripcion,_precio)
        this._cantidad = (_cantidad==null||_cantidad==undefined)? 0 : _cantidad;
    }
    public get cantidad():number{
        return this._cantidad;
    }
    public set cantidad(cant:number){
        this._cantidad=cant;
    }
}