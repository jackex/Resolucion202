import {ErroresRecienNacidos} from './ErroresEstructuraRecienNacidos';
import {ValidateEmpty} from '../ValidarEspacios/ValidarEspacios';
import {validarEstructura} from '../ValoresEstructura202/ValoresEstructura202';

const allowOnlyNumbersRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;

export class RecienNacido{

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
    formatoGeneralValidarFecha(excelFecha: any, fechaMaximaDeReporte: any, fechaNacimiento: any, ErroresRecienNacidos: any, validarEstructuraComodines: any,
        consecutivo: any, numeroIdentificacion: any): any{
        if(excelFecha.toString().length > 0){
            excelFecha = ValidateEmpty.prototype.validateEmpty(excelFecha);

            if(validarEstructura.formatoFecha.value.test(excelFecha)){
               return this.validarFechaEstructura(excelFecha, fechaMaximaDeReporte,  fechaNacimiento, ErroresRecienNacidos, validarEstructuraComodines,
                consecutivo, numeroIdentificacion);    

            }else{
                return ErroresRecienNacidos.dateFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRecienNacidos.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    //valida la fecha  registrar con la fecha maxima del reporte y la fecha de nacimiento con dos o siete comodines de fecha
    validarFechaEstructura(excelFecha: any,fechaMaximaDeReporte:any, fechaNacimiento: any, ErroresRecienNacidos: any, validarEstructuraComodines: any,
        consecutivo: any, numeroIdentificacion: any): any{
        const arrayFechaGestacion = this.obtenerFecha(excelFecha);
        const añoFechaGestacion = arrayFechaGestacion[0];
        if(añoFechaGestacion > validarEstructura.comodinesFecha.valorMinimo){

            if(this.validarFechaMayor(excelFecha, fechaMaximaDeReporte)){
                
                if(this.validarFechaMayor(fechaNacimiento,excelFecha)){
                    //console.log(excelFecha);
                }else{
                    return ErroresRecienNacidos.dateBirthdayError + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresRecienNacidos.dateValue + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            if(validarEstructuraComodines.test(excelFecha)){
                //console.log(excelFecha);
            }else{
                return ErroresRecienNacidos.dateComodin + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }  
        } 
    }

    validarResultadoTamizajeAuditivoNeonatal(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.resultadoTamizajeAuditivoNeonatal.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresRecienNacidos.resultadoTamizajeAuditivoNeonatal.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresRecienNacidos.resultadoTamizajeAuditivoNeonatal.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRecienNacidos.resultadoTamizajeAuditivoNeonatal.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        } 
    }

    validarResultadoTamizajeVisualNeonatal(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.resultadoTamizajeVisualNeonatal.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresRecienNacidos.resultadoTamizajeVisualNeonatal.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresRecienNacidos.resultadoTamizajeVisualNeonatal.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRecienNacidos.resultadoTamizajeVisualNeonatal.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        } 
    }

    validarResultadoTamizacionOximetriaPreYPostDuctal(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.resultTamizConOximPreYPostDuctal.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                   return ErroresRecienNacidos.resultadoTamizacionOximetriaPreYPostDuctal.invalidOptions + 
                   " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresRecienNacidos.resultadoTamizacionOximetriaPreYPostDuctal.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRecienNacidos.resultadoTamizacionOximetriaPreYPostDuctal.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        } 
    }

    validarFechaTamizaciónOximetríaPreYPpostDuctal(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresRecienNacidos.fechaTamizaciónOximetríaPreYPpostDuctal, validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarFechaTamizajeAuditivoNeonatal(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento,
            ErroresRecienNacidos.fechaTamizajeAuditivoNeonatal, validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarFechaTamizajeVisualNeonatal(excelFecha: any, fechaMaximaDeReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresRecienNacidos.fechaTamizajeVisualNeonatal, validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarFechaTSHNeonatal(excelFecha: any, fechaMaximaDeReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresRecienNacidos.fechaTSHNeonatal, validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarResultadoTSHNeonatal(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.resultadoTSHNeonatal.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresRecienNacidos.resultadoTSHNeonatal.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresRecienNacidos.resultadoTSHNeonatal.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresRecienNacidos.resultadoTSHNeonatal.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        } 
    }
    

}