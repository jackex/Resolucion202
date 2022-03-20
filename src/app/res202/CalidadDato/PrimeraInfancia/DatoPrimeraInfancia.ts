import { errorPrimeraInfancia } from "./ErrorPrimeraInfancia"

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
    mesesMaximos3: 3,
}

export class DatoPrimeraInfancia{

    validarPrimeraInfancia(data: any, edad: any, consecutivo: any, numeroDocumento: any, arrayPrimeraInfancia: Array<any>){
        const SFCPI = this.validarSuministroFortificacionCaseraPI(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(SFCPI)){arrayPrimeraInfancia.push(SFCPI);}
        const SVAPI = this.validarSuministroVitaminaAPrimeraInfancia(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(SVAPI)){arrayPrimeraInfancia.push(SVAPI);}
        const SHPI = this.validarSuministroHierroPrimeraInfancia(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(SHPI)){arrayPrimeraInfancia.push(SHPI);}
    }

    validarSuministroFortificacionCaseraPI(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] === edadPermitida.edadMaxima1 && edad[1] <= edadPermitida.mesesMaximos2){
            if(parseInt(data[70]) === 0){
                return {mensaje: errorPrimeraInfancia.suministroFortificacionCaseraPI.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 70]};
            }
        }else{
            if(edad[0] < edadPermitida.edadMaxima1){
                if(edad[0] === edadPermitida.edadMinima1 && edad[1] >= edadPermitida.mesesMinimos1){
                    if(parseInt(data[70]) === 0){
                        return {mensaje: errorPrimeraInfancia.suministroFortificacionCaseraPI.errorEdad + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 70]};
                    }
                }else{
                    if(parseInt(data[70]) === 0){
                        return {mensaje: errorPrimeraInfancia.suministroFortificacionCaseraPI.errorEdad + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 70]};
                    }
                }
            }else{
                if(parseInt(data[70]) > 0){
                    return {mensaje: errorPrimeraInfancia.suministroFortificacionCaseraPI.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 70]};
                }
            }
        }           
    }

    validarSuministroVitaminaAPrimeraInfancia(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] === edadPermitida.edadMaxima2 && edad[1] <= edadPermitida.mesesMaximos2){
            if(parseInt(data[71]) === 0){
                return {mensaje: errorPrimeraInfancia.suministroVitaminaAPrimeraInfancia.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 71]};
            }
        }else{
            if(edad[0] < edadPermitida.edadMaxima2){
                if(edad[0] >= edadPermitida.edadMinima2){
                    if(parseInt(data[71]) === 0){
                        return {mensaje: errorPrimeraInfancia.suministroVitaminaAPrimeraInfancia.errorEdad + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 71]};
                    }
                }
            }else{
                if(parseInt(data[71]) > 0){
                    return {mensaje: errorPrimeraInfancia.suministroVitaminaAPrimeraInfancia.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 71]};
                }
            }
        }
    }

    validarSuministroHierroPrimeraInfancia(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] === edadPermitida.edadMaxima2 && edad[1] <= edadPermitida.mesesMaximos2){
            if(parseInt(data[77]) === 0){
                return {mensaje: errorPrimeraInfancia.suministroHierroPrimeraInfancia.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 77]};
            }
        }else{
            if(edad[0] < edadPermitida.edadMaxima2){
                if(edad[0] >= edadPermitida.edadMinima2){
                    if(parseInt(data[71]) === 0){
                        if(parseInt(data[77]) > 0){
                            return {mensaje: errorPrimeraInfancia.suministroHierroPrimeraInfancia.errorEdad + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 77]};
                        }
                    }
                }
            }else{
                if(parseInt(data[71]) > 0){
                    if(parseInt(data[77]) > 0){
                        return {mensaje: errorPrimeraInfancia.suministroHierroPrimeraInfancia.errorEdad + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 77]};
                    }
                }
            }
        }
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}