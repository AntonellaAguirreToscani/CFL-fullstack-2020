export class Persona{
    protected nombre: string;
    public capacidadCorrer: boolean;

    public constructor(_nombre:string){
        this.nombre=_nombre;
        this.capacidadCorrer= true;
    }

    public correr():number{
        return (this.capacidadCorrer==true)? 50: 0;
    }
}