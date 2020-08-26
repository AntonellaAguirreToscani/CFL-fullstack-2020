import {Person} from './person';
import {Note} from './note';

export class Student extends Person{
    private classRoom: string;
    private _notes: Note[];

    public constructor(_id: number,_name:string,_lastName:string,_classRoom: string,_notes:Note[]){
        super(_id,_name,_lastName)
        this.classRoom=_classRoom;
        this._notes=_notes;
    }
    public get fullName():string{
        return `${this.name} ${this.lastName}`;
    }
    public get notes():Note[]{
        return this._notes;
    }
}