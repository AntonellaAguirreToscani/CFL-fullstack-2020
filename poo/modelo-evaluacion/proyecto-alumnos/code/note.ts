export class Note{
    private description: string;
    private _result: number;

    public constructor(_description:string,_result:number){
        this.description=_description;
        this._result=_result;
    }
    public get result():number{
        return this._result;
    }
}