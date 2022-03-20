import {ErroresCancerCervix} from './ErroresEstructuraCancerCervix';
import {ValidateEmpty} from '../ValidarEspacios/ValidarEspacios';
import {validarEstructura} from '../ValoresEstructura202/ValoresEstructura202';

const allowOnlyNumbersRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;

export class CancerCervix{

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
    formatoGeneralValidarFecha(excelFecha: any, fechaMaximaDeReporte: any, fechaNacimiento: any, ErroresCancerCervix: any, validarEstructuraComodines: any,
        consecutivo: any, numeroIdentificacion: any): any{
        if(excelFecha.toString().length > 0){
            excelFecha = ValidateEmpty.prototype.validateEmpty(excelFecha);

            if(validarEstructura.formatoFecha.value.test(excelFecha)){
               return this.validarFechaEstructura(excelFecha, fechaMaximaDeReporte,  fechaNacimiento, ErroresCancerCervix, validarEstructuraComodines,
                consecutivo, numeroIdentificacion);

            }else{
                return ErroresCancerCervix.dateFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresCancerCervix.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    //valida la fecha  registrar con la fecha maxima del reporte y la fecha de nacimiento con dos o siete comodines de fecha
    validarFechaEstructura(excelFecha: any,fechaMaximaDeReporte:any, fechaNacimiento: any, ErroresCancerCervix: any, validarEstructuraComodines: any,
        consecutivo: any, numeroIdentificacion: any): any{
        const arrayFechaGestacion = this.obtenerFecha(excelFecha);
        const añoFechaGestacion = arrayFechaGestacion[0];
        if(añoFechaGestacion > validarEstructura.comodinesFecha.valorMinimo){

            if(this.validarFechaMayor(excelFecha, fechaMaximaDeReporte)){
                
                if(this.validarFechaMayor(fechaNacimiento,excelFecha)){
                    //console.log(excelFecha);
                }else{
                    return ErroresCancerCervix.dateBirthdayError + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresCancerCervix.dateValue + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            if(validarEstructuraComodines.test(excelFecha)){
                //console.log(excelFecha);
            }else{
                return ErroresCancerCervix.dateComodin + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }  
        } 
    }

    ValidartratamAblatPostTecnInsVisual(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.tratamAblatPostTecnInsVisual.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    
                        return ErroresCancerCervix.tratamAblatPostTecnInsVisual.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                
                    return ErroresCancerCervix.tratamAblatPostTecnInsVisual.invalidFormat + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            
                return ErroresCancerCervix.tratamAblatPostTecnInsVisual.emptyField + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarTamizajeCancerCuelloUterino(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.tamizajeCancerCuelloUterino.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    
                        return ErroresCancerCervix.tamizajeCancerCuelloUterino.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                
                    return ErroresCancerCervix.tamizajeCancerCuelloUterino.invalidFormat + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
           
                return ErroresCancerCervix.tamizajeCancerCuelloUterino.emptyField + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarFechaTamizajeCancerCuelloUterino(excelData: any, fechaMaximaDeReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelData, fechaMaximaDeReporte, fechaNacimiento, ErroresCancerCervix.fechaTamizajeCancerCuelloUterino, 
            validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    ValidarResultadoTamizajeCancerCuelloUterino(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.resultadoTamizajeCancerCuelloUterino.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    
                        return ErroresCancerCervix.resultadoTamizajeCancerCuelloUterino.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                
                    return ErroresCancerCervix.resultadoTamizajeCancerCuelloUterino.invalidFormat + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            
                return ErroresCancerCervix.resultadoTamizajeCancerCuelloUterino.emptyField + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarCalidadMuestraCitologíaCervicouterina(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.calidadMuestraCitologíaCervicouterina.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresCancerCervix.calidadMuestraCitologíaCervicouterina.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresCancerCervix.calidadMuestraCitologíaCervicouterina.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresCancerCervix.calidadMuestraCitologíaCervicouterina.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }  
    }

    validarCodigoHabilitTamizajeCancerCuelloUterino(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(excelData.toString() > validarEstructura.codigoHabilitIPSTamizajeCancerCuelloUterino.min){
                    if(validarEstructura.codigoHabilitIPSTamizajeCancerCuelloUterino.length === excelData.length){
                       // console.log(excelData.toString());
                    }else{
                        return ErroresCancerCervix.codigoHabilitIPSTamizajeCancerCuelloUterino.invalidLength + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                    }
                }else{
                    if(validarEstructura.codigoHabilitIPSTamizajeCancerCuelloUterino.value.test(excelData)){
                        //console.log(excelData.toString());
                    }else{
                        return ErroresCancerCervix.codigoHabilitIPSTamizajeCancerCuelloUterino.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                    }
                }                
            }else{
                return ErroresCancerCervix.codigoHabilitIPSTamizajeCancerCuelloUterino.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresCancerCervix.codigoHabilitIPSTamizajeCancerCuelloUterino.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarFechaColposcopia(excelFecha: any, fechaMaximaDeReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, ErroresCancerCervix.fechaColposcopia, 
            validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarFechaBiopsiaCervicouterina(excelFecha: any, fechaMaximaDeReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, ErroresCancerCervix.fechaBiopsiaCervicouterina, 
            validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarResultadoBiopsiaCervicouterina(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.resultadoBiopsiaCervicouterina.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{                     
                        return ErroresCancerCervix.resultadoBiopsiaCervicouterina.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;   
                }
            }else{               
                    return ErroresCancerCervix.resultadoBiopsiaCervicouterina.invalidFormat + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
                return ErroresCancerCervix.resultadoBiopsiaCervicouterina.emptyField + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

}