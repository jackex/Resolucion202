import {ErroresTestVejez} from './ErroresEstructuraTestVejez';
import {ValidateEmpty} from '../ValidarEspacios/ValidarEspacios';
import {validarEstructura} from '../ValoresEstructura202/ValoresEstructura202';

const allowOnlyNumbersRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;

export class TestVejez{

    validarResultadoPruebaMiniMentalState(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.resultadoPruebaMiniMentalState.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresTestVejez.resultadoPruebaMiniMentalState.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresTestVejez.resultadoPruebaMiniMentalState.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
           return ErroresTestVejez.resultadoPruebaMiniMentalState.emptyField + 
           " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

}