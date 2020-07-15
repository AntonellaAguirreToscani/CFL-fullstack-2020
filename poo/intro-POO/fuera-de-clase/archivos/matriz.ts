class Matriz{  
    private columnas:number;
    private matriz:number[][];

    constructor(_columnas:number){
        this.columnas=_columnas;
        this.matriz=[];
    }
    
    public agregarFila(fila:number[]){
        if(fila.length==this.columnas){
            this.matriz.push(fila);
        }
    } 

    public consultarElemento(X:number,Y:number){
     return this.matriz[X][Y];
    }
}
   

let matriz=new Matriz(5);

matriz.agregarFila([2,4,6,7,3]);
matriz.agregarFila([1,5,9,10,5]);
console.log(matriz);






  

