import {ErroresRiesgoCardiovascular} from './ErroresEstructuraRiesgoCardiovascular';
import {validarEstructura} from '../ValoresEstructura202/ValoresEstructura202';
import {ValidateEmpty} from '../ValidarEspacios/ValidarEspacios';

const allowOnlyNumbersRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;

//PERMITE VALIDAR NUMEROS CON DECIMALES
const allowOnlyNumbersPointRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*,_?¿\\|¨"´`¡!°':;@<>¬~]/;

export class RiesgoCardiovascular{

    obtenerFecha(fecha: any){
        const dateArray = fecha.split('-');
            return dateArray;
    }

    validarFechaMayor(fechaMenor: any, fechaMayor: any){
        const arrayFechaVariable = this.obtenerFecha(fechaMenor);
        const añoFechaMenor = arrayFechaVariable[0];
        const mesFechaMenor = arrayFechaVariable[1];
        const diaFechaMenor = arrayFechaVariable[2];

        const arrayFechaMayor = this.obtenerFecha(fechaMayor);
        const añoFechaMayor = arrayFechaMayor[0];
        const mesFechaMayor = arrayFechaMayor[1];
        const diaFechaMayor = arrayFechaMayor[2];

        if(añoFechaMenor < añoFechaMayor){ return true;}
        if(añoFechaMenor === añoFechaMayor){
                if(mesFechaMenor < mesFechaMayor){
                    return true;
                }else{
                    if(mesFechaMenor === mesFechaMayor){
                        if(diaFechaMenor <= diaFechaMayor){
                            return true;
                        }
                    }
                }
        }
        return false;
    }

    //formato general para validar las fechas
    formatoGeneralValidarFecha(excelFecha: any, fechaMaximaDeReporte: any, fechaNacimiento: any, ErroresRiesgoCardiovascular: any, validarEstructuraComodines: any
        , consecutivo: any, numeroIdentificacion: any): any{
        if(excelFecha.toString().length > 0){
            excelFecha = ValidateEmpty.prototype.validateEmpty(excelFecha);

            if(validarEstructura.formatoFecha.value.test(excelFecha)){
               return this.validarFechaEstructura(excelFecha, fechaMaximaDeReporte,  fechaNacimiento, ErroresRiesgoCardiovascular, validarEstructuraComodines,
                consecutivo, numeroIdentificacion);    

            }else{
                return ErroresRiesgoCardiovascular.dateFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRiesgoCardiovascular.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    //valida la fecha  registrar con la fecha maxima del reporte y la fecha de nacimiento con dos o siete comodines de fecha
    validarFechaEstructura(excelFecha: any,fechaMaximaDeReporte:any, fechaNacimiento: any, ErroresRiesgoCardiovascular: any, validarEstructuraComodines: any
        , consecutivo: any, numeroIdentificacion: any): any{
        const arrayFechaGestacion = this.obtenerFecha(excelFecha);
        const añoFechaGestacion = arrayFechaGestacion[0];
        if(añoFechaGestacion > validarEstructura.comodinesFecha.valorMinimo){

            if(this.validarFechaMayor(excelFecha, fechaMaximaDeReporte)){
                
                if(this.validarFechaMayor(fechaNacimiento,excelFecha)){
                    //console.log(excelFecha);
                }else{
                    return ErroresRiesgoCardiovascular.dateBirthdayError + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresRiesgoCardiovascular.dateValue + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            if(validarEstructuraComodines.test(excelFecha)){
                //console.log(excelFecha);
            }else{
                return ErroresRiesgoCardiovascular.dateComodin + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }  
        } 
    }

    validarConsumoTabaco(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            if(!allowOnlyNumbersRegExp.test(excelData)){
                    if(excelData.toString() >= validarEstructura.consumoTabaco.min
                 && excelData.toString() <= validarEstructura.consumoTabaco.max){
                     //console.log(excelData.toString());
                 }else{
                    if(validarEstructura.consumoTabaco.value.test(excelData)){
                        //console.log(excelData.toString());
                    }else{
                        return ErroresRiesgoCardiovascular.consumoTabaco.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                    }
                 }                                   
            }else{
                return ErroresRiesgoCardiovascular.consumoTabaco.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRiesgoCardiovascular.consumoTabaco.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarResultadoGlicemaBasal(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(excelData.length <= validarEstructura.glicemiaBasal.length){
                    if(excelData.toString() >= validarEstructura.glicemiaBasal.min
                 && excelData.toString() <= validarEstructura.glicemiaBasal.max){
                     //console.log(excelData.toString());
                 }else{
                    if(validarEstructura.glicemiaBasal.value.test(excelData)){
                        //console.log(excelData.toString());
                    }else{
                        return ErroresRiesgoCardiovascular.glicemiaBasal.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                    }
                 } 
                }else{
                    return ErroresRiesgoCardiovascular.glicemiaBasal.invalidLength + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
                                                         
            }else{
                return ErroresRiesgoCardiovascular.glicemiaBasal.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRiesgoCardiovascular.glicemiaBasal.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarFechaTomaLDL(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresRiesgoCardiovascular.fechaTomaLDL, validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarResultadoLDL(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(excelData.length <= validarEstructura.resultadoLDL.length){
                    if(excelData.toString() >= validarEstructura.resultadoLDL.min
                 && excelData.toString() <= validarEstructura.resultadoLDL.max){
                     //console.log(excelData.toString());
                 }else{
                    if(validarEstructura.resultadoLDL.value.test(excelData)){
                        //console.log(excelData.toString());
                    }else{
                        return ErroresRiesgoCardiovascular.resultadoLDL.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                    }
                 }   
                }else{
                   return ErroresRiesgoCardiovascular.resultadoLDL.invalidLength + 
                   " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }                                                       
            }else{
                return ErroresRiesgoCardiovascular.resultadoLDL.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRiesgoCardiovascular.resultadoLDL.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }
    
    validarResultadoTrigliceridos(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            if(!allowOnlyNumbersRegExp.test(excelData)){
                    if(excelData.toString() >= validarEstructura.resultadoTrigliceridos.min
                 && excelData.toString() <= validarEstructura.resultadoTrigliceridos.max){
                     //console.log(excelData.toString());
                 }else{
                    if(validarEstructura.resultadoTrigliceridos.value.test(excelData)){
                        //console.log(excelData.toString());
                    }else{
                        return ErroresRiesgoCardiovascular.resultadoTrigliceridos.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                    }
                 }                                      
            }else{
                return ErroresRiesgoCardiovascular.resultadoTrigliceridos.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRiesgoCardiovascular.resultadoTrigliceridos.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarFechaTomaHemoglobina(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresRiesgoCardiovascular.fechaTomaHemoglobina, validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarResultadoHemoglobina(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            if(!allowOnlyNumbersPointRegExp.test(excelData)){
                if(excelData.length >= validarEstructura.resultadoHemoglobina.minLength &&
                excelData.length <= validarEstructura.resultadoHemoglobina.maxLength){
                    if(excelData.toString() >= validarEstructura.resultadoHemoglobina.min
                    && excelData.toString() <= validarEstructura.resultadoHemoglobina.max){
                        //console.log(excelData.toString());
                    }else{
                       if(validarEstructura.resultadoHemoglobina.value.test(excelData)){
                           //console.log(excelData.toString());
                       }else{
                           return ErroresRiesgoCardiovascular.resultadoHemoglobina.invalidOptions + 
                           " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                       }
                    }
                }else{
                    return ErroresRiesgoCardiovascular.resultadoHemoglobina.invalidLength + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }                                                         
            }else{
                return ErroresRiesgoCardiovascular.resultadoHemoglobina.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRiesgoCardiovascular.resultadoHemoglobina.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarFechaTomaGlicemiaBasal(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresRiesgoCardiovascular.fechaTomaGlicemiaBasal, validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarFechaTomaCreatinina(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresRiesgoCardiovascular.fechaTomaCreatinina, validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarResultadoCreatinina(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            if(!allowOnlyNumbersPointRegExp.test(excelData)){
                if(excelData.toString().length >= validarEstructura.resultadoCreatinina.minLength &&
                excelData.toString().length <= validarEstructura.resultadoCreatinina.maxLength){
                    if(excelData >= validarEstructura.resultadoCreatinina.min
                    && excelData <= validarEstructura.resultadoCreatinina.max){
                        //console.log(excelData.toString());
                    }else{
                       if(validarEstructura.resultadoCreatinina.value.test(excelData)){
                           //console.log(excelData.toString());
                       }else{
                           return ErroresRiesgoCardiovascular.resultadoCreatinina.invalidOptions + 
                           " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " valor: " + excelData;
                       }
                    }
                }else{
                   return ErroresRiesgoCardiovascular.resultadoCreatinina.invalidLength + 
                   " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }                                                         
            }else{
                return ErroresRiesgoCardiovascular.resultadoCreatinina.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRiesgoCardiovascular.resultadoCreatinina.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarFechaTomaHDL(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresRiesgoCardiovascular.fechaTomaHDL, validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarResultadoHDL(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(excelData.length >= validarEstructura.resultadoHDL.minLength &&
                    excelData.length <= validarEstructura.resultadoHDL.maxLength){
                    if(excelData.toString() >= validarEstructura.resultadoHDL.min &&
                excelData.toString() <= validarEstructura.resultadoHDL.max){
                    //console.log(excelData.toString());
                }else{
                    if(validarEstructura.resultadoHDL.value.test(excelData)){
                        //console.log(excelData.toString());
                    }else{
                        return ErroresRiesgoCardiovascular.resultadoHDL.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                    }
                }
                }else{return ErroresRiesgoCardiovascular.resultadoHDL.invalidLength + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;}
                                
            }else{
                return ErroresRiesgoCardiovascular.resultadoHDL.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRiesgoCardiovascular.resultadoHDL.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarRiesgoCardiovascular(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.resultadoRiesgoCardiovascular.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresRiesgoCardiovascular.resultadoRiesgoCardiovascular.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresRiesgoCardiovascular.resultadoRiesgoCardiovascular.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRiesgoCardiovascular.resultadoRiesgoCardiovascular.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarRiesgoMetabolico(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.resultadoRiesgoMetabolico.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresRiesgoCardiovascular.resultadoRiesgoMetabolico.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresRiesgoCardiovascular.resultadoRiesgoMetabolico.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRiesgoCardiovascular.resultadoRiesgoMetabolico.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarFechaTomaTrigliceridos(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresRiesgoCardiovascular.fechaTomaTrigliceridos, validarEstructura.comodinesFecha.SieteComodines, consecutivo , numeroIdentificacion);
    }
    
}