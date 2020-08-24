import {GestorArchivos} from './gestorArchivos';
import {StockProducto} from './stockProducto';


export class DbContext{
    private gestor: GestorArchivos;
    public constructor(){
        this.gestor= new GestorArchivos('stock.txt','ventas.txt');
    }

    public listarStock():StockProducto[]{
        let stocks: StockProducto[]=[];
        // RECORRO EL SET Y LLENO EL ARREGLO DE OBJ
        this.gestor.elegirSet('stock.txt').forEach((item)=>{
            let cadena: string[] = item.split(',');
            stocks.push(new StockProducto(parseInt(cadena[0]),cadena[1],cadena[2]
                                        ,parseInt(cadena[3]),parseInt(cadena[4])));
        });
        return stocks;
    }
    public stockToString(obj:StockProducto):string{
        let texto: string[]=[];
        for(const [key,value] of Object.entries(obj)){ //RECORRO EL OBJETO
            texto.push(value);
        }
        return texto.join(',');
    }
    public agregarProducto(obj:StockProducto):void{
        this.gestor.agregarLinea(this.stockToString(obj),'stock.txt');
    }
    public eliminarProducto(id:number):void{
        this.gestor.eliminarLinea(id,'stock.txt');
    }
    public agregarVenta(texto:string):void{
        this.gestor.agregarLinea(texto,'ventas.txt');
    }
    public eliminarVenta(id:number):void{
        this.gestor.eliminarLinea(id,'ventas.txt');
    }
    public actualizarStockProducto(id:number, cantidad:number, accion:string):void{
        let linea:string= this.gestor.buscarLinea(id,'stock.txt');
        let arreglo:string[]= linea.split(',');
            switch (accion) {
                case 'sumar':
                    arreglo[4] = (parseInt(arreglo[4]) + cantidad).toString();
                    break;
            
                case 'restar':
                    arreglo[4] = (parseInt(arreglo[4]) - cantidad).toString();
                    break;
            }   

        let modificado= Array.from(this.gestor.elegirSet('stock.txt'));
        modificado[this.buscarPosicion(linea)] = arreglo.join(",");
        // instancio el nuevo Set con el listado modificado!
        this.gestor.listado1 =  new Set(modificado);
        this.gestor.actualizarArchivos();
    }
    public buscarPosicion(linea:string):number{
        let posicion: number= -1;
        Array.from(this.gestor.elegirSet('stock.txt')).forEach((item,index)=>{
           posicion = (item.indexOf(linea) > -1)?  index: posicion;
        });
        return posicion;
    }

}