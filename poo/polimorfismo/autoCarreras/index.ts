class Auto{
    private patente: string;
    private marcaModelo: string;
    public cambioActual: number;

    public constructor(_patente:string,_marcaModelo:string,_cambioActual?:number){
        this.patente=_patente;
        this.marcaModelo=_marcaModelo;
        (_cambioActual==null||_cambioActual==undefined)?this.cambioActual=1:this.cambioActual=_cambioActual;
        
    }

    public pasarCambio():void{
        (this.cambioActual < 5)? this.cambioActual++ : this.cambioActual=this.cambioActual;
    }
}

class AutoDeportivo extends Auto{
    private tecnologiaFrenado: boolean;

    public constructor(_patente:string,_marcaModelo:string,_cambioActual?:number){
        super(_patente,_marcaModelo,_cambioActual);
        this.tecnologiaFrenado=true;
    
    }
    // POLIMORFISMO
    public pasarCambio():void{
        (this.cambioActual < 6)? this.cambioActual++: this.cambioActual=this.cambioActual;
    }
}

let corsa: Auto= new Auto('jsr456','chevrolet, corsa',3);
let mustang: AutoDeportivo= new AutoDeportivo('hyt678','mustang',3);

corsa.pasarCambio();
corsa.pasarCambio();
console.log(corsa);

// EL AUTO DEPORTIVO TIENE LA VENTAJA DE PASAR 6 CAMBIOS EN VEZ DE 5
mustang.pasarCambio();
mustang.pasarCambio();
mustang.pasarCambio();
console.log(mustang);