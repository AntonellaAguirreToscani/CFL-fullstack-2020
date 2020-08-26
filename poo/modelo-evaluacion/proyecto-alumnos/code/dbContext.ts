import {FileManager} from './fileManager';
import { Note } from './note';
import { Student } from './student';

export class DbContext{
    private fileManager: FileManager;

    public constructor(){
        this.fileManager= new FileManager('students.txt');
    }

    public studentToString(obj:Student):string{
        let texto: string[]=[];
        for(const [key,value] of Object.entries(obj)){ //RECORRO EL OBJETO
            switch (key) {
                case '_id':
                    texto.push(value);
                    break;
                case 'name':
                    texto.push(value);
                    break;
                case 'lastName':
                    texto.push(value);    
                    break;
                case 'classRoom':
                    texto.push(value);
                    break;        
            }
        }
        return texto.join(',');
    }
    public noteToString(obj:Note):string{
        let texto: string[]=[];
        for(const [key,value] of Object.entries(obj)){ //RECORRO EL OBJETO
            texto.push(value);
        }
        return texto.join(',');
    }
    public loadStudents():Student[]{
        let listStudents: Student[]=[];
        this.fileManager.list.forEach((student)=>{
            let text: string[]= student.split(',');
            let firstModule: Note = new Note(text[4],parseInt(text[5]));
            let secondModule: Note  = new Note(text[4],parseInt(text[5]));
            let thirdModule: Note = new Note(text[6],parseInt(text[7]));
            listStudents.push(new Student(parseInt(text[0]),text[1],text[2],text[3],
                                            [firstModule,secondModule,thirdModule]));                                  
        });
        return listStudents;
    }
    public addStudentTxt(obj:Student){
       let notesArray: string[]= [
                                this.noteToString(obj.notes[0]),
                                this.noteToString(obj.notes[1]),
                                this.noteToString(obj.notes[2])
                                 ];
       let notes: string= notesArray.join(',');
       this.fileManager.writeLine((this.studentToString(obj)+(',')+notes),this.fileManager.fileName); 
    }
    public deleteStudentTxt(id:number){
        this.fileManager.deleteLine(id);
    }
}