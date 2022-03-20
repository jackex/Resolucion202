import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

const edadPermitida = {
    edadMinima1: 0,
    mesesMinimos1: 6,
    edadMaxima1: 2,
    mesesMaximos1: 11,
    edadMinima2: 2,
    edadMaxima2: 5,
    mesesMaximos2: 3,
    edadMinima3: 2,
    edadMaxima3: 5,
    mesesMaximos3: 3
}


export class CorregirPrimeraInfancia{

    corregirDatoPrimeraInfancia(data: any, errores: any, fechaSuperiorReporte: any){
        return this.corregirPrimeraInfancia(data, errores, fechaSuperiorReporte);
    }

    corregirPrimeraInfancia(data: any, errores: any, fechaSuperiorReporte: any): any{
        data = data.split(/\r\n|\n/);
    
        for (let index = 0; index < errores.length; index++) {
            if(errores[index].datoPrimeraInfancia.errores[0].length > 0){
                for(let i = 0; i < errores[index].datoPrimeraInfancia.errores[0].length; i++){
                    let fila = parseInt(errores[index].datoPrimeraInfancia.errores[0][i].posicion[0]);
                    let temp = data[fila].split('|');
                    CalcularEdad.prototype.calcularDiasyMeses(temp[9], fechaSuperiorReporte);
                    const edadUsuario = CalcularEdad.prototype.EDAD;
                    const mesesEdadusuario = CalcularEdad.prototype.NUMERODEMESES;
                    const diasEdadUsuario = CalcularEdad.prototype.NUMERODEDIAS;
                    const datosEdad = [edadUsuario, mesesEdadusuario,diasEdadUsuario];
                    this.corregirSuministroFortificacionCaseraPI(temp, datosEdad);
                    this.corregirSuministroVitaminaAPrimeraInfancia(temp, datosEdad);
                    this.corregirSuministroHierroPrimeraInfancia(temp, datosEdad);
                    data[fila] = temp.join('|');
                }
           }
       }
        return data;
    }

    corregirSuministroFortificacionCaseraPI(data: any, edad: any){
        if(edad[0] === edadPermitida.edadMaxima1 && edad[1] <= edadPermitida.mesesMaximos2){
            if(parseInt(data[70]) === 0){data[70] = 21;}
        }else{
            if(edad[0] < edadPermitida.edadMaxima1){
                if(edad[0] === edadPermitida.edadMinima1 && edad[1] >= edadPermitida.mesesMinimos1){
                    if(parseInt(data[70]) === 0){data[70] = 21;}
                }else{
                    if(parseInt(data[70]) === 0){data[70] = 21;}
                }
            }else{
                if(parseInt(data[70]) > 0){data[70] = 0;}
            }
        }           
    }

    corregirSuministroVitaminaAPrimeraInfancia(data: any, edad: any){
        if(edad[0] === edadPermitida.edadMaxima2 && edad[1] <= edadPermitida.mesesMaximos2){
            if(parseInt(data[71]) === 0){
                data[71] = 21;
            }
        }else{
            if(edad[0] < edadPermitida.edadMaxima2){
                if(edad[0] >= edadPermitida.edadMinima2){
                    if(parseInt(data[71]) === 0){
                        data[71] = 21;
                    }
                }
            }else{
                if(parseInt(data[71]) > 0){
                    data[71] = 0;
                }
            }
        }
    }

    corregirSuministroHierroPrimeraInfancia(data: any, edad: any){
        if(edad[0] === edadPermitida.edadMaxima2 && edad[1] <= edadPermitida.mesesMaximos2){
            if(parseInt(data[77]) === 0){
                data[77] = 21;
            }
        }else{
            if(edad[0] < edadPermitida.edadMaxima2){
                if(edad[0] >= edadPermitida.edadMinima2){
                    if(parseInt(data[77]) === 0){
                        data[77] = 21;
                    }
                }
            }else{
                if(parseInt(data[77]) > 0){
                    data[77] = 0;
                }
            }
        }
    }


}