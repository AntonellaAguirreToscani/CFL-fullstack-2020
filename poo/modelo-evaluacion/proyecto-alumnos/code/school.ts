import {Student} from './student';
import {Note} from './note';
import {DbContext} from './dbContext';

interface ISchool{
    searchStudent(id:number):Student;
    getAverageStudent(id:number): any;
    getAllAverages():any[];
    addStudent(student:Student):void;
}
export class School implements ISchool{
    private schoolName: string;
    private dbContext: DbContext;
    private studentsList: Student[];
    
    public constructor(_schoolName:string){
        this.schoolName=_schoolName;
        this.dbContext = new DbContext();
        this.studentsList = this.dbContext.loadStudents();
    }
    public searchStudent(id:number):Student{
        let studentFound: Student = this.studentsList.reduce((obj,student)=>{
            if(student.id == id)
                obj = student;
                return obj;
        },<Student> {});

        return studentFound;
    }
    public getAverageStudent(id:number): any{
       let student: Student =this.searchStudent(id);
       let notes: Note[] = student.notes;
       let average: number= (notes[0].result + notes[1].result + notes[2].result) / 3;
        return `Average Student: ${student.fullName}...: ${average}`;
    }
    public getAllAverages():any[]{
        let listAverages: any[]=[];
        this.studentsList.forEach(student=>{
            let notes: Note[]= student.notes;
            let average: number= (notes[0].result + notes[1].result + notes[2].result) / 3;
            listAverages.push(`Average Student: ${student.fullName}...: ${average}`);
        });
        return listAverages;
    }
    public addStudent(student:Student):void{
        try{
            if(student.name==="")
                throw new Error('Student must contain a Name');
            this.studentsList.push(student);
            this.dbContext.addStudentTxt(student);  
        }
        catch(error){
            console.log(error);
        }
        
    }
}