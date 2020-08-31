export class Legajo{
    protected id: number;
    private _tipoContrato: string;
    private fechaIngreso: Date;
    private obraSocial: string;

    public constructor(_id:number,_fechaIngreso: Date,_tipocontrato?:string){
        this.id=_id;
        this.fechaIngreso=_fechaIngreso;
        this._tipoContrato= (_tipocontrato==null||_tipocontrato==undefined)? 'Permamente':_tipocontrato;
        this.obraSocial= 'Osde';
    }
    public get tipoContrato():string{
        return this._tipoContrato;
    }

}