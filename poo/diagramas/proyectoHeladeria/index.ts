class Helado{
    private _codigo: number;
    protected azucar: boolean;
    private sabor: string;
    private base: string;

    public constructor(_codigo:number,_sabor:string,_base:string){
        this._codigo=_codigo;
        this.azucar= true;
        this.sabor=_sabor;
        this.base=_base;
    }
}

class TortaHelada extends Helado{
    protected vizcocho: boolean;
    private conberturaChocolate: boolean;

    public constructor(_codigo:number,_sabor:string,_base:string){
        super(_codigo,_sabor,_base)
        this.vizcocho= true;
        this.conberturaChocolate= true;
    }

}

class Sundae extends Helado{
    private salsa: string;
    private topping: string;

    public constructor(_codigo:number,_sabor:string,_base:string,_salsa:string,_topping:string){
        super(_codigo,_sabor,_base)
        this.salsa=_salsa;
        this.topping=_topping;
    }
}

class Almendrado extends Helado{
    protected almendras:boolean;

    public constructor(_codigo:number,_sabor:string,_base:string){
        super(_codigo,_sabor,_base)
        this.almendras= true;
    }
}
class Stock{
    private _codigo: number;
    private _precio: number;
    private _cantidad: number;
        
    public constructor(_codigo:number,_precio:number,_cantidad:number){
       this._codigo=_codigo;
       this._precio=_precio;
       (_cantidad==null||_cantidad==undefined)?this._cantidad=_cantidad=0:this._cantidad=_cantidad;
    }
    public aumentarStock(cantidad:number):void{
        this._cantidad= this._cantidad + cantidad;
    }
    public restarProducto():void{
        this._cantidad--;
    }
    public get cantidad():number{
        return this._cantidad;
    }
    public get codigo():number{
        return this._codigo;
    }
    public get precio():number{
        return this._precio;
    }
    public set precio(nuevoPrecio:number){
        this.precio = nuevoPrecio;
    }
}

class Heladeria{
    private cartelera: Helado[];
    private stock: Stock[];

    public constructor(_postresHelados:Helado[],_stock:Stock[]){
        this.cartelera=_postresHelados;
        this.stock=_stock;
    }

    public consultarStockHelado(codigo:number):Stock{
       let stockEncontrado: Stock= this.stock.reduce((object,stock)=>{ //object: Es lo q retorna el reduce
            if (stock.codigo == codigo) {
                object = stock;
            }
            return object;
        },{} as Stock); // Casting!

       return stockEncontrado;
    }
    
    public venderHelado(codigo:number):void{
        let stock:Stock= this.consultarStockHelado(codigo);

        if(stock.cantidad>0){
            stock.restarProducto();
            console.log('Total a abonar $'+ stock.precio);
        }else{
            stock.aumentarStock(10); //Como no hay Stock, se repone!
            this.venderHelado(codigo); //Se llama recursivamente a la funcion, xq el stock dejó de ser 0
        }
    }
}

let tortaHelada:TortaHelada= new TortaHelada(101,'vainilla','crema');
let sundaeGloton: Sundae= new Sundae(102,'chocolate','crema','dulce de leche','chocolinas+nueces');
let sundaeSinCulpa: Sundae= new Sundae(103,'frutilla','agua','maracuya','fruta fresca');
let almendrado: Almendrado= new Almendrado(104,'almendras','crema');

let stock101: Stock= new Stock(101,500,0);//SIN STOCK
let stock102: Stock= new Stock(102,100,10);
let stock103: Stock= new Stock(103,100,15);
let stock104: Stock= new Stock(104,300,20);
let heladeria: Heladeria= new Heladeria([tortaHelada,sundaeGloton,sundaeSinCulpa,almendrado],
                            [stock101,stock102,stock103,stock104]);

// Se intenta vender un helado que no tiene stock. Primero se repone, luevo se vende.                             
heladeria.venderHelado(101);
console.log(heladeria); //se verá como aumentó el stock del 101!

