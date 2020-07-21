class Televisor{
    private onOf:boolean;
    private decodificador:Decodificador;

    public constructor(_onOf:boolean,_decodificador:Decodificador){
        this.onOf=_onOf;
        this.decodificador=_decodificador;
    }

    public prenderApagar():void{
        if(this.onOf==false){
            this.onOf=true;
        }else{
            this.onOf=false;
        }
    }
    public activarHd(){
        if(this.onOf==true){
            this.decodificador.ponerHd('yes');
        }
    }
    public cambiarCanal(canalDeseado:number):void{
        if(this.onOf==true){
            this.decodificador.canal=canalDeseado;
        }
    }
    public subirVolumen():void{
        if(this.onOf==true){
            this.decodificador.subirVolumen();
        }
    }
    public bajarVolumen():void{
        if(this.onOf==true){
            this.decodificador.bajarVolumen();
        }
    }
   public iniciarApp(appDeseada:string){
       if(this.onOf==true){
           this.decodificador.accederApp(appDeseada);
        }
   }
    
}

class Decodificador{
    private hd:boolean;
    private volumen:number;
    private _canal:number;
    private aplicaciones:string[];
    private appElegida:string;
    
    constructor(_aplicaciones?:string[],_hd?:boolean,_volumen?:number,_canal?:number,_appElegida?:string){
        (_aplicaciones==null||_aplicaciones==undefined)?this.aplicaciones=[]:this.aplicaciones=_aplicaciones;
        (_hd==null||_hd==undefined)?this.hd=false:this.hd=_hd;
        (_volumen==null||_volumen==undefined)?this.volumen=0:this.volumen=_volumen;
        (_canal==null||_canal==undefined)?this._canal=1:this._canal=_canal;
        (_appElegida==null||_aplicaciones==undefined)?this.appElegida='Ninguna':this.appElegida=_appElegida;
        
    }
    public ponerHd(yesNo:string):boolean{
        if(yesNo=='yes'){
            return this.hd=true;
        }else{
            return this.hd=false;
        }
    }
    public subirVolumen():void{
        this.volumen=this.volumen+1;
    }
    public bajarVolumen():void{
        this.volumen=this.volumen-1;
    }
    public get canal(){
        return this._canal;
    }
    public set canal(canalDeseado:number){
        this._canal=canalDeseado;
    }
    public accederApp(app:string):void{
        for(let i:number=0;i<this.aplicaciones.length;i++){
            if(this.aplicaciones[i].toLowerCase()==app.toLowerCase()){
                this.appElegida=app;
            }
        }

    }

}

let app:string[]=['Netflix','Youtobe','Google','Hulu','Flow'];
let decodificador:Decodificador=new Decodificador(app);
let televisor:Televisor=new Televisor(false,decodificador);
console.log(televisor);
televisor.prenderApagar();
televisor.activarHd();
televisor.cambiarCanal(12);
televisor.subirVolumen();
televisor.iniciarApp('Netflix');
console.log(televisor);
