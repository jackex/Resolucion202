const comodines = {
    noAplica: /^(1845\-01\-01$)/
};

export class CorregirComodines{

    corregirDatoComodines(data: any, errores: any): any{
        return this.corregirComodines(data, errores);
    }

    corregirComodines(data: any, errores: any): any{
        data = data.split(/\r\n|\n/);
     
        for (let index = 0; index < errores.length; index++) {
            if(errores[index].datoCancerProstata.errores[0].length > 0){
                for(let i = 0; i < errores[index].datoCancerProstata.errores[0].length; i++){
                       let fila = parseInt(errores[index].datoCancerProstata.errores[0][i].posicion[0]);
                       //let columna = parseInt(errores[index].datoCancerProstata.errores[0][i].posicion[1]);
                           let temp = data[fila].split('|');               
                               this.GestacionalOCongenita(temp);
                               this.corregirHipotiroidismoCongénito(temp);
                               this.corregirLepra(temp);
                               this.corregirObesidadDesnutricionPC(temp);
                               this.corregirEnfermendadMental(temp);
                               this.corregirCancerCervix(temp);
                               this.corregirDPTMenores5Anios(temp);
                               this.corregirNeumococo(temp);
                               this.corregirConsultaPsicologia(temp);
                               this.corregirPreservativosEntregadosPITS(temp);
                               this.corregirFechaHemoglobinaGlicosilada(temp);
                               this.corregirTratamientoSifilisGestacional(temp);
                               this.corregirTratamientoSifilisCongenita(temp);
                               data[fila] = temp.join('|');                        
                   }            
               }
            }
        return data;
    }
    
    GestacionalOCongenita(data: any){
        if(data[15] !== 0){data[15] = 0;}
    }

    corregirHipotiroidismoCongénito(data: any){
        if(data[17] !== 0){data[17] = 0;}
    }

    corregirLepra(data: any){
        if(data[20] !== 21){ data[20] = 21;}
    }

    corregirObesidadDesnutricionPC(data: any){
        if(data[21] !== 21){data[21] = 21;}
    }

    corregirEnfermendadMental(data: any){
        if(data[25] !== 21){data[25] = 21;}
    }

    corregirCancerCervix(data: any){
        if(data[26] !== 0){data[26] = 0;}
    }

    corregirDPTMenores5Anios(data: any){
        if(data[39] !== 0){data[39] = 0;}
    }

    corregirNeumococo(data: any){
        if(data[41] !== 0){data[41] = 0;}
    }

    corregirConsultaPsicologia(data: any){
        if(!comodines.noAplica.test(data[68])){
            data[68] = '1845-01-01';
        }
    }

    corregirPreservativosEntregadosPITS(data: any){
        if(data[74] !== 0){data[74] = 0;}
    }

    corregirFechaHemoglobinaGlicosilada(data: any){
        if(!comodines.noAplica.test(data[108])){
            data[108] = '1845-01-01';
        }
    }

    corregirTratamientoSifilisGestacional(data: any){
        if(data[115] !== 0){data[115] = 0;}
    }

    corregirTratamientoSifilisCongenita(data: any){
        if(data[116] !== 0){data[116] = 0;}
    }





}