class Telefono{
    private onOf: boolean;
    protected bateriaActual:number;

    public constructor(_onOf?:boolean){
        (_onOf==null||_onOf==undefined)?this.onOf=false:this.onOf=_onOf;
        this.bateriaActual= 0;
    }
    public prenderApagar():void{
        (this.onOf==false)?this.onOf=true:this.onOf=false;
    }
    public cargarBateria(minutos:number):void{
        for(let i:number=0;i<minutos;i++){
            this.bateriaActual++;
        }
    }
    public mandarMensaje(mensaje?:string):string{
       return (mensaje==null||mensaje==undefined)?'Mensaje Vacio':mensaje;
    }
    public hacerLlamada(num:number):string{
        return `Llamando a.......${num}`;
    }

}
class Camara{
    private lente:boolean;

    public constructor(){
        this.lente=true;
    }
    public sacarFoto():string{
        return (this.lente==true)?'FOTO!!!':'No se puede sacar foto, lente Dañado';
    }
}
class TelefonoCamara extends Telefono{
    private camara: Camara;
    public constructor(){
        super()
        this.camara=new Camara();
    }   
    public sacarFoto():string{
        return camara.sacarFoto();
    }
}
let camara:Camara=new Camara();
let telefonoCamara: TelefonoCamara= new TelefonoCamara();
console.log(telefonoCamara.sacarFoto());
console.log(telefonoCamara.hacerLlamada(1234567890));
