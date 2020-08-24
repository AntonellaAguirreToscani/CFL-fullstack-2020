import {StockProducto} from './stockProducto';
import {DbContext} from './dbContext';

interface IKiosco{
    buscarProducto(id:number):void;
    venderProducto(idProd:number,idVenta:number):void;
    actualizarStockProducto(id:number,cantidad:number):void;
    agregarProducto(nuevo:StockProducto):void;
}

export class Kiosco implements IKiosco{
    private nombreKiosco: string;
    private listadoProductos : StockProducto[];
    private dbContext : DbContext;

    public constructor(_nombreKiosco:string){
        this.nombreKiosco=_nombreKiosco;
        this.dbContext= new DbContext();
        this.listadoProductos = this.dbContext.listarStock();
    }
    public buscarProducto(id:number):StockProducto{
        let producto: StockProducto= this.listadoProductos.reduce((objeto,producto)=>{
            if(producto.id == id)
                objeto = producto;

            return objeto;    
        },<StockProducto> {});

        return producto;
    }
    public venderProducto(idProd:number,idVenta:number):void{
       let producto: StockProducto= this.buscarProducto(idProd);
        let precio: number= producto.precio;
       let venta: string[]= [idVenta.toString(),precio.toString()];
       this.dbContext.agregarVenta(venta.join(','));

       let totalSotck: number = producto.cantidad -1;
       this.dbContext.actualizarStockProducto(idProd,1,'restar');
    }
    public actualizarStockProducto(id:number,cantidad:number):void{
        this.buscarProducto(id).cantidad = this.buscarProducto(id).cantidad + cantidad;
        this.dbContext.actualizarStockProducto(id,cantidad,'sumar');
    }
    public agregarProducto(nuevo:StockProducto):void{
        this.listadoProductos.push(nuevo);
        this.dbContext.agregarProducto(nuevo);
    }
}
