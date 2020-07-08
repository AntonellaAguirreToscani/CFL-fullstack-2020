import * as fs from 'fs';

class Padron{
    escuela:string;
    nombres:string[];  

    constructor(_escuela:string,_nombres:string[]) {
        this.escuela= _escuela;
        this.nombres=_nombres;
        
    }
};

let names:string= fs.readFileSync('names.txt','utf-8');
let schools:string = fs.readFileSync('school.txt','utf-8');
let arrayNames: string[] = names.split(',');
let arraySchools:string[] =schools.split(',');
let padron:Padron[]= searchSchool(arraySchools);

//funcion que filtra por la primer letra del apellido y retorna un arreglo nuevo lleno de los votantes solicitados
function filterItems(query:string,query1:string,query2:string,query3:string,query4:string) {
    return arrayNames.filter(function(name) {
        if(name.charAt(0)==query||name.charAt(0)==query1 || name.charAt(0)==query2 ||name.charAt(0)==query3||name.charAt(0)==query4){
            return name;
        }
    })
};
//funcion que retorna listado completo de votantes en cada colegio
function searchSchool(array:string[]):Padron[]{
    let assigned:Padron[]=[];
    for(let i:number=0; i<array.length;i++){
       if(array[i].charAt(0)=='1'){
        let names:string[]=filterItems('A','B','C','D','E');
        let school:string= array[i]; 
        assigned.push(new Padron(school,names));
       }else{
            if(array[i].charAt(0)=='2'){
                let names:string[]=filterItems('F','G','H','I','J');
                let school:string= array[i]; 
                assigned.push(new Padron(school,names));  
            }else{
                if(array[i].charAt(0)=='3'){
                    let names:string[]=filterItems('K','L','M','N','O');
                    let school:string= array[i]; 
                    assigned.push(new Padron(school,names));  
                }else{
                    if(array[i].charAt(0)=='4'){
                        let names:string[]=filterItems('P','Q','R','S','T');
                        let school:string= array[i]; 
                        assigned.push(new Padron(school,names));  
                    }else{
                        if(array[i].charAt(0)=='5'){
                            let names:string[]=filterItems('U','V','X','Y','Z');
                            let school:string= array[i]; 
                            assigned.push(new Padron(school,names));  
                        }
                    } 
                } 
            } 
        } 
              
    }
    return assigned;
};

console.log(padron);

