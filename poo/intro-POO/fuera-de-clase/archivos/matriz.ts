class Matriz{  
    private matriz:number[][];

    constructor(){
        this.matriz=[];
    }
    
    public agregarFila(value1:number,value2:number){
        this.matriz.push([value1,value2]);
    }

    public consultarElemento(X:number,Y:number){
     return this.matriz[X][Y];
    }
}
   

let matriz=new Matriz();

matriz.agregarFila(2,3);
matriz.agregarFila(4,5);
console.log(matriz.consultarElemento(1,0));






  

