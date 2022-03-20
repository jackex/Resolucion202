
import {ValidateEmpty} from '../ValidarEspacios/ValidarEspacios'

const formatoFecha = /^([0-9]{4}\-[0-9]{2}\-[0-9]{2}$)/;
const valorMinimo = 1900;

export class Fecha{

    //diasDelAnio = [31,29,31,30,31,30,31,31,30,31,30,31];

    validarMeses(mes: any): any{
        if(mes <= 12){return true;}
        return false;
    }

    validarDiasMes(dias : any): any{
        if(dias <= 31){return true;}
        return false;
    }

    obtenerFecha(fecha: any){
        const dateArray = fecha.split('-');
            return dateArray;
    }

    validarFechaMayor(fechaMenor: any, fechaMayor: any): any{
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
                        if(diaFechaMenor < diaFechaMayor){
                            return true;
                        }
                    }
                }
        }
        return "Error en el registro de control - La fecha inicial de reporte debe ser menor a la fecha final del periodo de reporte";
    }

    //formato general para validar las fechas
    formatoGeneralValidarFecha(fechaInferiorDeReporte: any, fechaMaximaDeReporte: any): any{
        if(fechaInferiorDeReporte.toString() !== 'undefined' && fechaMaximaDeReporte.toString() !== 'undefined'){
            fechaInferiorDeReporte = ValidateEmpty.prototype.validateEmpty(fechaInferiorDeReporte);
            fechaMaximaDeReporte = ValidateEmpty.prototype.validateEmpty(fechaMaximaDeReporte);
        
            if(formatoFecha.test(fechaInferiorDeReporte)){
                if(formatoFecha.test(fechaMaximaDeReporte)){
                    return this.validarFechaEstructura(fechaInferiorDeReporte, fechaMaximaDeReporte);
                }else{return "Error en registro de control - La fecha final del periodo de reporte debe tener el formato [AAAA-MM-DD].";}
            }else{return "Error en registro de control - La fecha inicial del periodo de reporte tener el formato [AAAA-MM-DD].";}
        }else{return "Error en registro de control - Los campos de fecha inicial y fecha de final del periodo de reporte no pueden estar vacíos.";}
    }

    //valida la fecha  registrar con la fecha maxima del reporte y la fecha de nacimiento con dos o siete comodines de fecha
    validarFechaEstructura(fechaInferiorDeReporte: any,fechaMaximaDeReporte: any): any{
        const arrayFechaInferiorReporte = this.obtenerFecha(fechaInferiorDeReporte);
        const añoFechaInferiorReporte = parseInt(arrayFechaInferiorReporte[0]);
        const arrayFechaSuperiorReporte = this.obtenerFecha(fechaMaximaDeReporte);
        const añoFechaSuperiorReporte = parseInt(arrayFechaSuperiorReporte[0]);
        
        if(this.validarMeses(arrayFechaInferiorReporte[1])){
            if(this.validarMeses(arrayFechaSuperiorReporte[1])){
                if(añoFechaInferiorReporte > valorMinimo && añoFechaSuperiorReporte > valorMinimo){
                    if(this.validarDiasMes(arrayFechaInferiorReporte[2])){
                        if(this.validarDiasMes(arrayFechaSuperiorReporte[2])){
                            return this.validarFechaMayor(fechaInferiorDeReporte, fechaMaximaDeReporte);
                        }else{
                            return "Error en registro de control - El número de días de la fecha final del periodo de reporte es incorrecto";
                        }
                    }else{
                        return "Error en registro de control - El número de días de la fecha inicial del periodo de reporte es incorrecto";
                    }
                }else{
                    return "Error en registro de control - La fecha debe ser mayor a 1900-01-01.";
                }
            }else{
                return "Error en registro de control - El mes reportado no se encuentra dentro de los valores permitidos: Error en Fecha final de reporte"; 
            }
        }else{
            return "Error en registro de control - El mes reportado no se encuentra dentro de los valores permitidos: Error en Fecha inicial de reporte"; 
        }
    }

}