import {validarEstructura} from '../ValoresEstructura202/ValoresEstructura202';
import {ValidateEmpty} from '../ValidarEspacios/ValidarEspacios';
import {ErroresPrimeraInfancia} from './ErroresEstructuraPrimeraInfancia';

const allowOnlyNumbersRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;

export class PrimerInfancia{

    validarSuministroFortificaciónCaseraPrimeraInfancia(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.suministroFortificacionCaseraPI.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresPrimeraInfancia.suministroFortificaciónCaseraPI.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresPrimeraInfancia.suministroFortificaciónCaseraPI.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresPrimeraInfancia.suministroFortificaciónCaseraPI.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        } 
    }

    validarSuministroVitaminaAPrimeraInfancia(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.suministroVitaminaAPrimeraInfancia.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresPrimeraInfancia.suministroVitaminaAPrimeraInfancia.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresPrimeraInfancia.suministroVitaminaAPrimeraInfancia.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresPrimeraInfancia.suministroVitaminaAPrimeraInfancia.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        } 
    }

    validarSuministroHierroPrimeraInfancia(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.suministroHierroPrimeraInfancia.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresPrimeraInfancia.suministroHierroPrimeraInfancia.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresPrimeraInfancia.suministroHierroPrimeraInfancia.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresPrimeraInfancia.suministroHierroPrimeraInfancia.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        } 
    }

}