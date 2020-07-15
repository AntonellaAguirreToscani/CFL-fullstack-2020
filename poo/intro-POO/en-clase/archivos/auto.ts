class Auto {
    private marca: string
    private estaEnMarcha: boolean
    private velocidadActual: number
    private kmRecorridos: number

    constructor(_marca:string,_velocidad: number, _kmRecorridos: number) {
        this.marca=_marca;
        this.velocidadActual = _velocidad;
        this.kmRecorridos = _kmRecorridos;
        this.estaEnMarcha = false;
    }

    ponerMarchaApagar(): void {
        if (this.estaEnMarcha)
                this.estaEnMarcha = false
        else
            this.estaEnMarcha = true
    }

    subirVelocidad(velocidadDeseada:number): void {
        this.velocidadActual = this.velocidadActual + velocidadDeseada;
    }

    bajarVelocidad(velocidadDeseada:number): void {
        this.velocidadActual = this.velocidadActual - velocidadDeseada;
    }

    aumentarKm(): void {
        this.kmRecorridos = this.kmRecorridos + 1;
    }

}
let marca:string= 'Ford';
let velocidadInicial:number = 0;
let km:number =18000;

let auto = new Auto(marca,velocidadInicial,km);

auto.ponerMarchaApagar();
console.log(auto);

auto.subirVelocidad(50);
auto.bajarVelocidad(10);
auto.aumentarKm();
console.log(auto);

