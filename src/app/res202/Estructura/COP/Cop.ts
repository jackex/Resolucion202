import {validarEstructura} from '../ValoresEstructura202/ValoresEstructura202';
import {ValidateEmpty} from '../ValidarEspacios/ValidarEspacios';
import {ErroresCOP} from './ErroresEstructuraCOP';

const allowOnlyNumbersRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;

export class Cop {

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
    formatoGeneralValidarFecha(excelFecha: any, fechaMaximaDeReporte: any, fechaNacimiento: any, ErroresCOP: any, validarEstructuraComodines: any,
        consecutivo: any, numeroIdentificacion: any): any{
        if(excelFecha.toString().length > 0){
            excelFecha = ValidateEmpty.prototype.validateEmpty(excelFecha);

            if(validarEstructura.formatoFecha.value.test(excelFecha)){
               return this.validarFechaEstructura(excelFecha, fechaMaximaDeReporte,  fechaNacimiento, ErroresCOP, validarEstructuraComodines,
                consecutivo, numeroIdentificacion);    

            }else{
                return ErroresCOP.dateFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresCOP.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    //valida la fecha  registrar con la fecha maxima del reporte y la fecha de nacimiento con dos o siete comodines de fecha
    validarFechaEstructura(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, ErroresCOP: any, validarEstructuraComodines: any,
        consecutivo: any, numeroIdentificacion: any): any{
        const arrayFechaGestacion = this.obtenerFecha(excelFecha);
        const añoFechaGestacion = arrayFechaGestacion[0];
        if(añoFechaGestacion > validarEstructura.comodinesFecha.valorMinimo){

            if(this.validarFechaMayor(excelFecha, fechaMaximaDeReporte)){
                
                if(this.validarFechaMayor(fechaNacimiento,excelFecha)){
                    //console.log(excelFecha);
                }else{
                    return ErroresCOP.dateBirthdayError + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresCOP.dateValue  + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            if(validarEstructuraComodines.test(excelFecha)){
                //console.log(excelFecha);
            }else{
                return ErroresCOP.dateComodin + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }  
        } 
    }

    validarFechaAtenSaludBucalPorProfesOdontologia(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any ,consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, ErroresCOP.FechaAtenSaludBucalPorProfesOdontologia, 
            validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarCOPPorPersona(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);

            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(excelData.length > validarEstructura.COPPorPersona.min){
                    if(excelData.length === validarEstructura.COPPorPersona.length){
                        //console.log(excelData.toString());
                    }else{
                        return ErroresCOP.COPPorPersona.invalidLength  + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                    }
                }else{                    
                    if(validarEstructura.COPPorPersona.value.test(excelData)){
                        //console.log(excelData.toString());
                    }else{
                        return ErroresCOP.COPPorPersona.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                    }
                }
            }else{
                return ErroresCOP.COPPorPersona.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresCOP.COPPorPersona.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }
}