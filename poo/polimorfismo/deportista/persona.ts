export class Persona{
    protected nombre: string;
    public capacidadCorrer: boolean;

    public constructor(_nombre:string){
        this.nombre=_nombre;
        this.capacidadCorrer= true;
    }

    public correr():number{
        let metrosMinuto: number;
        return (this.capacidadCorrer==true)?metrosMinuto=50:metrosMinuto=0;
    }
}