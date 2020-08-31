import * as fs from 'fs';

export class FileManager{
    private _fileName: string;
    private _list: Set<string>;

    public constructor(_fileName:string){
        let studentsList: string = fs.readFileSync(this._fileName = _fileName, 'utf-8');
        this._list = new Set<string>(studentsList.split('\r\n'));
    }

    public updateFile():void{
        let buffer  = Buffer.from(Array.from(this._list).join('\r\n'));
        fs.writeFile('students.txt', buffer, function (err) {
            return (err) ? console.log('err') : console.log('Done');
        });
    }
    public searchLine(id: number): string {
        let contents: string = '';
        Array.from(this._list).forEach((item) => {
            contents = (item.indexOf(id.toString()) > -1) ? item : contents;
        });
        return contents;
    }
    public writeLine(text:string,file:string):void{
        this._list.add(text);
        this.updateFile();
    }
    public deleteLine(id:number):void{
       this._list.delete(this.searchLine(id));
       this.updateFile();
    }
    public get list():Set<string>{
        return this._list;
    }
    public get fileName():string{
        return this._fileName;
    }
}