class Carroceria {
    private puertas: string[];
    private cantEspejos: number;

    public constructor(_puertas: string[], _cantEspejos: number) {
        this.puertas = _puertas;
        this.cantEspejos = _cantEspejos;
    }
    
}
class Rueda{
    private marca:string;
    private rodado:number;
    private _ubicacion:string;

    public constructor(_marca:string,_rodado:number,_ubicacion?:string){
        this.marca=_marca;
        this.rodado=_rodado;
        (_ubicacion==null||_ubicacion==undefined)?this._ubicacion='Sin especificar':this._ubicacion=_ubicacion;
    }
    public get ubicacion():string{
        return this._ubicacion;
    }
}
class Interior {
    private asientos: number;
    private volante: number = 1;
    private estereo: boolean;
    private aireAcondicionado: boolean;
    private frioCalor:string;

    public constructor(_asientos:number,_estereo:boolean,_aireAcond:boolean,_frioCalor?:string){
        this.asientos=_asientos;
        this.estereo=_estereo;
        this.aireAcondicionado=_aireAcond;
        (_frioCalor==null||_frioCalor==undefined)?this.frioCalor='APAGADO':this.frioCalor=_frioCalor;
    }

    public prenderAireFrio(){
        this.frioCalor='A/C FRIO ON';
    }

    public prenderCalefaccion(){
        this.frioCalor='CALEFACCION ON';
    }
}
class Mecanica {
    private tipoMotor: string;
    private numMotor: number;
    private cajaCambio: string;

    public constructor(_tipoMotor:string,_numMotor:number,_cajaCambio:string){
        this.tipoMotor=_tipoMotor;
        this.numMotor=_numMotor;
        this.cajaCambio=_cajaCambio;
    }
}
class Auto {
    private patente:string;
    private titular:string;
    private marcaModelo:string;
    private enMarcha:boolean;
    private interior: Interior;
    private carroceria: Carroceria;
    private mecanica: Mecanica;
    private ruedas:Rueda[];

    public constructor(_patente:string,_titular:string,_marcaModelo:string,_interior: Interior, _carroceria: Carroceria, _mecanica: Mecanica,_ruedas:Rueda[],_marcha?:boolean,) {
        this.patente=_patente;
        this.titular=_titular;
        this.marcaModelo=_marcaModelo;
        this.interior = _interior;
        this.carroceria = _carroceria;
        this.mecanica = _mecanica;
        this.ruedas=_ruedas;
        (_marcha==null||_marcha==undefined)?this.enMarcha=false:this.enMarcha=_marcha;
    }
    public prenderApagar():void{
        (this.enMarcha==false)?this.enMarcha=true:this.enMarcha=false;
        
    }
    public cambiarRueda(ruedaPinchada:string,ruedaAuxilio:Rueda):void{
        for(let i:number=0;i<ruedas.length;i++){
            if(this.ruedas[i].ubicacion==ruedaPinchada){
                this.ruedas[i]=ruedaAuxilio;
            }
        }
    }
    public encenderAire(frioCalor?:string):void{
        if(frioCalor==null||frioCalor.toLowerCase()=='frio'){
            this.interior.prenderAireFrio();
        }else{
            this.interior.prenderCalefaccion();
        }

    }
}

let ruedas:Rueda[]=[
    new Rueda('pirelli',30,'delanteraIZQ'),
    new Rueda('pirelli',30,'delanteraDERECHA'),
    new Rueda('pirelli',30,'TraseraIZQ'),
    new Rueda('pirelli',30,'TraseraDERECHA')
];
let puertas:string[]=['puerta izquierda','puerta derecha','baul'];
let miCarroceria:Carroceria=new Carroceria(puertas,3);
let miInterior:Interior=new Interior(4,true,true);
let miMecanica:Mecanica=new Mecanica('nafta',56789054321,'automatica');

let miAuto:Auto=new Auto('JSR123','Aguirre Antonella','Ford, Focus',miInterior,miCarroceria,miMecanica,ruedas);
console.log(miAuto);

miAuto.prenderApagar();
miAuto.encenderAire('calor');

let ruedaAuxilio:Rueda=new Rueda('michelin',30,'RUEDA AUXILIO');
miAuto.cambiarRueda('delanteraIZQ',ruedaAuxilio);

console.log(miAuto);