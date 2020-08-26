export abstract class Person{
    protected _id: number;
    public name: string;
    public lastName: string;

    public constructor(_id: number,_name:string,_lastName:string){
        this._id=_id;
        this.name=_name;
        this.lastName=_lastName;
    }
    public get id():number{
        return this._id;
    }
    abstract get fullName():string;
} 