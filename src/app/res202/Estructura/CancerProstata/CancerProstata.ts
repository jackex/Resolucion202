
import {validarEstructura} from '../ValoresEstructura202/ValoresEstructura202';
import {ErroresCancerProstata} from './ErroresEstructuraCancerProstata';
import {ValidateEmpty} from '../ValidarEspacios/ValidarEspacios';

const allowOnlyNumbersRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;

//PERMITE VALIDAR NUMEROS CON DECIMALES
const allowOnlyNumbersPointRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*,_?¿\\|¨"´`¡!°':;@<>¬~]/;

export class CancerProstata{

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
    formatoGeneralValidarFecha(excelFecha: any, fechaMaximaDeReporte: any, fechaNacimiento: any, ErroresCancerProstata: any, validarEstructuraComodines: any,
        consecutivo: any, numeroIdentificacion: any){
        if(excelFecha.toString().length > 0){
            excelFecha = ValidateEmpty.prototype.validateEmpty(excelFecha);

            if(validarEstructura.formatoFecha.value.test(excelFecha)){
                return this.validarFechaEstructura(excelFecha, fechaMaximaDeReporte,  fechaNacimiento, ErroresCancerProstata, validarEstructuraComodines,
                consecutivo, numeroIdentificacion);    

            }else{
                return ErroresCancerProstata.dateFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;}
        }else{
            return ErroresCancerProstata.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    //valida la fecha  registrar con la fecha maxima del reporte y la fecha de nacimiento con dos o siete comodines de fecha
    validarFechaEstructura(excelFecha: any,fechaMaximaDeReporte:any, fechaNacimiento: any, ErroresCancerProstata: any, validarEstructuraComodines: any,
        consecutivo: any, numeroIdentificacion: any): any{
        const arrayFechaGestacion = this.obtenerFecha(excelFecha);
        const añoFechaGestacion = arrayFechaGestacion[0];
        if(añoFechaGestacion > validarEstructura.comodinesFecha.valorMinimo){

            if(this.validarFechaMayor(excelFecha, fechaMaximaDeReporte)){
                
                if(this.validarFechaMayor(fechaNacimiento,excelFecha)){
                    //console.log(excelFecha);
                }else{
                    return ErroresCancerProstata.dateBirthdayError + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresCancerProstata.dateValue + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            if(validarEstructuraComodines.test(excelFecha)){
                //console.log(excelFecha);
            }else{
                return ErroresCancerProstata.dateComodin + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }  
        } 
    }

    validarResultadoTactoRectal(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);

            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.resultadoTactoRectal.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresCancerProstata.resultadoTactoRectal.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresCancerProstata.resultadoTactoRectal.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresCancerProstata.resultadoTactoRectal.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarFechaTactoRectal(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, ErroresCancerProstata.fechaTactoRectal,
            validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarFechaTomaPSA(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, ErroresCancerProstata.fechaTomaPSA,
            validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    //falta verificar que tipo numero es el resultado para reajustar la función
    validarResultadoPSA(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);

            if(!allowOnlyNumbersPointRegExp.test(excelData)){

                if(excelData.toString() >= validarEstructura.resultadoPSA.min 
                && excelData.toString() <= validarEstructura.resultadoPSA.max){
                    if(excelData.toString().length <= validarEstructura.resultadoPSA.length){
                        //console.log(excelData.toString().length);
                    }else{
                        console.log(excelData.toString().length);
                        return ErroresCancerProstata.resultadoPSA.invalidLength + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                    }
                }else{
                    if(validarEstructura.resultadoPSA.value.test(excelData)){
                        //console.log(excelData.toString());
                    }else{
                        return ErroresCancerProstata.resultadoPSA.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;}
                }                
            }else{
                return ErroresCancerProstata.resultadoPSA.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresCancerProstata.resultadoPSA.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

}