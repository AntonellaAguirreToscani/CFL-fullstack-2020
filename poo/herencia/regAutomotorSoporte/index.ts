import * as fs from 'fs';

class Motor {
    protected numero: number;
    protected clase: string;
    private _estado: string;

    public constructor(_numero: number,_clase?: string,_estado?: string) {
        this.numero = _numero;
        (_clase ==null || _clase ==undefined) ? this.clase = 'Motor de Combustion' : this.clase = _clase;
        (_estado ==null || _estado ==undefined) ? this._estado = 'funcionando' : this._estado = _estado;
    }
    public get estado(): string {
        return this._estado;
    }
}
class Rueda {
    protected marca: string;
    protected rodado: number;

    public constructor(_marca: string,_rodado: number) {
        this.marca =_marca;
        this.rodado =_rodado;
    }
}
class Vehiculo {
    protected tipo: number;
    protected titular: string;
    protected _patente: string;
    protected motor: Motor;
    private ruedas: Rueda[];
    protected volante: boolean;
    protected tanqueCombustibleLitros: number;
    protected marcaModelo: string;

    public constructor(_tipo: number,_patente: string,_motor: Motor,_ruedas: Rueda[],_marcaModelo: string,_titular?: string) {
        this.tipo = _tipo;
        this._patente = _patente;
        this.motor = _motor;
        this.ruedas = _ruedas;
        this.volante = true;
        this.tanqueCombustibleLitros = Math.random() * (100 - 1) + 1;
        this.marcaModelo = _marcaModelo;
        (_titular ==null || _titular ==undefined) ? this.titular = 'Vehiculo de Fabrica' : this.titular = _titular;
    }
    public ponerMarcha(): boolean {
        let ponerMarcha: boolean;
        return (this.motor.estado == 'funcionando' && this.tanqueCombustibleLitros != 0) ? ponerMarcha = true : ponerMarcha = false;
    }
    public get patente(): string {
        return this._patente;
    }
    static Empty(): Vehiculo {
        let ruedas: Rueda[] = [];
        return new Vehiculo(0, '', new Motor(0), ruedas, '', '');
    }
}
class Auto extends Vehiculo {
    protected cantPuertas: number;
    protected baul: boolean;

    public constructor(_tipo: number,_patente: string,_motor: Motor,_ruedas: Rueda[],_marcaModelo: string,_cantPuertas: number,_titular?: string) {
        super(_tipo,_patente,_motor,_ruedas,_marcaModelo,_titular);
        this.cantPuertas = _cantPuertas;
        this.baul = true;
    }
}
class Camion extends Vehiculo {
    private acoplado: boolean;

    public constructor(_tipo: number,_patente: string,_motor: Motor,_ruedas: Rueda[],_marcaModelo: string,_titular?: string) {
        super(_tipo,_patente,_motor,_ruedas,_marcaModelo,_titular);
        this.acoplado = true;
    }
}
class Moto extends Vehiculo {
    private baulera: boolean;

    public constructor(_tipo: number,_patente: string,_motor: Motor,_ruedas: Rueda[],_marcaModelo: string,_titular?: string) {
        super(_tipo,_patente,_motor,_ruedas,_marcaModelo,_titular);
        this.baulera = true;
    }
}
class GestorArchivo {
    private nombreArchivo: string;
    private _listado: Array<string>;

    public constructor(_nombreArchivo: string) {
        let vehiculos: string = fs.readFileSync(this.nombreArchivo = _nombreArchivo, 'utf-8');
        this._listado = vehiculos.split('\r\n');
    }
    public get listado(): Array<string> {
        return this._listado;
    }

}
//Clase intermediaria entre GestorArchivo y RegistroAutomotor
class ConversorVehiculos {
    private gestor: GestorArchivo;

    public constructor(_nombreArchivo: string) {
        this.gestor = new GestorArchivo(_nombreArchivo);

    }
    public cargarVehiculos(): Vehiculo[] {
        let listado: Vehiculo[] = [];
        this.gestor.listado.map(item => {
            let cadena: string[] = item.split(',');
            switch (parseInt(cadena[0])) {
                case 1: //Representa un Auto
                    let tipo1: number = parseInt(cadena[0]);
                    let patente: string = cadena[1];
                    let motorAuto: Motor = new Motor(parseInt(cadena[2]));
                    let ruedasx4: Rueda[] = [new Rueda(cadena[3], parseInt(cadena[4])), new Rueda(cadena[5], parseInt(cadena[6])),
                                new Rueda(cadena[7], parseInt(cadena[8])), new Rueda(cadena[9], parseInt(cadena[10])),]
                    let marca: string = cadena[11];
                    let puertas: number = parseInt(cadena[12]);
                    let titular: string = cadena[13];
                    listado.push(new Auto(tipo1, patente, motorAuto, ruedasx4, marca, puertas, titular));
                    break;
                case 2: //Representa una Moto
                    let tipo2: number = parseInt(cadena[0]);
                    let patent: string = cadena[1];
                    let motorMoto: Motor = new Motor(parseInt(cadena[2]));
                    let Ruedasx2: Rueda[] = [new Rueda(cadena[3], parseInt(cadena[4])), new Rueda(cadena[5], parseInt(cadena[6]))];
                    let marc: string = cadena[7];
                    listado.push(new Moto(tipo2, patent, motorMoto, Ruedasx2, marc));
                    break;
                case 3: //Representa un Camion 
                    let tipo3: number = parseInt(cadena[0]);
                    let pat: string = cadena[1];
                    let motorCam: Motor = new Motor(parseInt(cadena[2]));
                    let ruedasx8: Rueda[] = [new Rueda(cadena[3], parseInt(cadena[4])), new Rueda(cadena[5], parseInt(cadena[6])),
                                    new Rueda(cadena[7], parseInt(cadena[8])), new Rueda(cadena[9], parseInt(cadena[10])),
                                    new Rueda(cadena[11], parseInt(cadena[12])), new Rueda(cadena[13], parseInt(cadena[14])),
                                    new Rueda(cadena[15], parseInt(cadena[16])), new Rueda(cadena[17], parseInt(cadena[18]))];
                    let marcaCam: string = cadena[19];
                    let titularCam: string = cadena[20];
                    listado.push(new Camion(tipo3, pat, motorCam, ruedasx8, marcaCam, titularCam));
                    break;
            }
        });
        return listado;
    }
}
class RegistroAutomotor {
    private conversor: ConversorVehiculos;
    private listadoVehiculos: Vehiculo[];

    public constructor(_conversor: ConversorVehiculos) {
        this.conversor = _conversor;
        this.listadoVehiculos = this.conversor.cargarVehiculos();
    }

    public buscarVehiculo(patente: string): Vehiculo {
        let vehiculo: Vehiculo = Vehiculo.Empty();
        for (let i: number = 0; i < this.listadoVehiculos.length; i++) {
            (this.listadoVehiculos[i].patente == patente) ? vehiculo = this.listadoVehiculos[i] : vehiculo;
        }
        return vehiculo;
    }
}

let conversor: ConversorVehiculos = new ConversorVehiculos('vehiculos.txt');
let regAutomotor: RegistroAutomotor = new RegistroAutomotor(conversor);

console.log(regAutomotor.buscarVehiculo('ACC001'));

console.log(regAutomotor);