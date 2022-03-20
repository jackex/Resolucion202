import {ErroresTest0a7Anios} from './ErroresEstructuraTest0a7Anios';
import {ValidateEmpty} from '../ValidarEspacios/ValidarEspacios';
import {validarEstructura} from '../ValoresEstructura202/ValoresEstructura202';

const allowOnlyNumbersRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;

export class Test0a7Anios{

    validarResulEscalaAbrevDesaMotricGruesa(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.ResulEscalaAbrevDesaMotricGruesa.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresTest0a7Anios.resulEscalaAbrevDesaMotricGruesa.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresTest0a7Anios.resulEscalaAbrevDesaMotricGruesa.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresTest0a7Anios.resulEscalaAbrevDesaMotricGruesa.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarResulEscalaAbrevDesaMotriFinoadaptativa(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.ResulEscalaAbrevDesaMotriFinoadaptativa.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresTest0a7Anios.resulEscalaAbrevDesaMotriFinoadaptativa.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresTest0a7Anios.resulEscalaAbrevDesaMotriFinoadaptativa.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresTest0a7Anios.resulEscalaAbrevDesaMotriFinoadaptativa.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarResulEscalaAbrevDesaAreaPersonal(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.ResulEscalaAbrevDesaMotriAreaPersonal.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresTest0a7Anios.resulEscalaAbrevDesaAreaPersonal.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresTest0a7Anios.resulEscalaAbrevDesaAreaPersonal.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresTest0a7Anios.resulEscalaAbrevDesaAreaPersonal.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarResulEscalaAbrevDesaMotricAudicionLenguaje(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.ResulEscalaAbrevDesaMotricAudicionLenguaje.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresTest0a7Anios.resulEscalaAbrevDesaAudiLenguaje.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresTest0a7Anios.resulEscalaAbrevDesaAudiLenguaje.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresTest0a7Anios.resulEscalaAbrevDesaAudiLenguaje.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }



}