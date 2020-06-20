readlyneSync = require('readline-sync');

let puesto = readlyneSync.questionInt('Indique puesto: ');

if( puesto == 1){
    console.log('Entregar Medalla de ORO');

} else{
     if( puesto == 2){
        console.log('Entregar Medalla de PLATA');
     }else{
         if( puesto == 3){
             console.log('Entregar Medalla BRONCE');
         }else{
             if (puesto > 3){
                 console.log('Entregar Certificado de Asistencia');
             }
         }
     }
}   
    

    
   

