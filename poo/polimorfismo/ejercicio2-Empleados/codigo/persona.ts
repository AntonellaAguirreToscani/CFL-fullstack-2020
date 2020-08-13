export class Persona{
    protected nombre: string;
    protected fechaNacimiento: Date;
    protected dni: number;

    public constructor(_nombre: string,_fechaNac: Date,_dni: number){
        this.nombre=_nombre;
        this.fechaNacimiento=_fechaNac;
        this.dni=_dni;
    }
}