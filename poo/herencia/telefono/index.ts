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

class TelefonoCamara extends Telefono{
    public constructor(){
        super();
    }
    public sacarFoto():void{
        console.log('Foto Tomada!');
    }
}

class TelefonoRadio extends Telefono{
    protected frecuenciaActual:number;
    
    public constructor(){
        super();
        this.frecuenciaActual= Math.random();
    }
    public cambiarFrecuencia():void{
        this.frecuenciaActual + 10;
    } 
}

let telefonoModerno: TelefonoCamara = new TelefonoCamara();
let telefonoRetro: TelefonoRadio = new TelefonoRadio();

telefonoModerno.prenderApagar();
telefonoModerno.sacarFoto();
console.log(telefonoModerno.hacerLlamada(1522584456));
telefonoModerno.cargarBateria(30);
console.log(telefonoModerno);

telefonoRetro.prenderApagar();
console.log(telefonoRetro.mandarMensaje('Hola, como estas?'));
telefonoRetro.cambiarFrecuencia();
telefonoRetro.cargarBateria(10);
console.log(telefonoRetro);