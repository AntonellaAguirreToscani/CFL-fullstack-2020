class Fila{
    private _ubicacion:number;
    private _contenido:any[];

    public constructor(unbicacion:number,contenido:any[]){
        this._ubicacion=unbicacion;
        this._contenido=contenido;
    }
    public get contenido():any[]{
        return this._contenido;
    }
    public get ubicacion():number{
        return this._ubicacion;
    }
}
class Columna{
    private _ubicacion:number;
    private _nombreDescriptivo:string;

    public constructor(ubicacion:number,_nombreDescript:string){
        this._ubicacion=ubicacion;
        this._nombreDescriptivo=_nombreDescript;
    }
    public get nombreDescriptivo():string{
        return this._nombreDescriptivo;
    }
}
class Matriz{
    private columnas:Columna[];
    private filas:Fila[];
    
    public constructor(_columnas:Columna[],_filas:Fila[]){
        this.columnas=_columnas;
        this.filas=_filas;
    }
    public agregarFila(newFila:Fila){
        if (newFila.contenido.length==this.columnas.length){
            this.filas.push(newFila);
        }     

    } 
    public consultarElemento(fila:number,columna:string):any{
        for(let i:number=0;i<this.filas.length;i++){
            for(let j:number=0;j<this.columnas.length;j++){
                if(this.filas[i].ubicacion==fila && this.columnas[j].nombreDescriptivo==columna){
                    return this.filas[i].contenido[j];
                }
            }
        }
    }

}
let fila1:Fila=new Fila(0,[2,3,11,25]);
let fila2:Fila=new Fila(1,[4,5,15,28]);
let columna1:Columna=new Columna(0,'Numeros par');
let columna2:Columna=new Columna(1,'Numeros impar');
let columna3:Columna=new Columna(2,'Numeros mayores 10');
let columna4:Columna=new Columna(3,'Numeros mayores 20');

let arrayFilas:Fila[]=[fila1,fila2];
let arrayColumnas:Columna[]=[columna1,columna2,columna3,columna4];
let matriz:Matriz=new Matriz(arrayColumnas,arrayFilas);

let nuevaFila:Fila=new Fila(2,[6,1,12,22]);
matriz.agregarFila(nuevaFila);
console.log(matriz.consultarElemento(1,'Numeros impar'));
console.log(matriz);