import {validarEstructura} from '../ValoresEstructura202/ValoresEstructura202';
import {ValidateEmpty} from '../ValidarEspacios/ValidarEspacios';
import {ErroresAnticonception} from './ErroresEstructuraAnticonception';

const allowOnlyNumbersRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;

export class Anticoncepcion{

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

    formatoGeneralValidarFecha(excelFecha: any, fechaMaximaDeReporte: any, fechaNacimiento: any, StructureErrors: any, validarEstructuraComodines: any,
        consecutivo: any, numeroIdentificacion: any): any{
        if(excelFecha.toString().length > 0){
            excelFecha = ValidateEmpty.prototype.validateEmpty(excelFecha);

            if(validarEstructura.formatoFecha.value.test(excelFecha)){
               return this.validarFechaEstructura(excelFecha, fechaMaximaDeReporte,  fechaNacimiento, StructureErrors, validarEstructuraComodines,
                consecutivo, numeroIdentificacion);    

            }else{
                return StructureErrors.dateFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " valor: " + excelFecha;
            }
        }else{
            return StructureErrors.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion+ " valor: " + excelFecha;
        }
    }

    validarFechaEstructura(excelFecha: any,fechaMaximaDeReporte: any, fechaNacimiento: any, StructureErrors: any, validarEstructuraComodines: any,
        consecutivo: any, numeroIdentificacion: any): any{
        const arrayFecha = this.obtenerFecha(excelFecha);
        const añoFecha = arrayFecha[0];
        if(añoFecha > validarEstructura.comodinesFecha.valorMinimo){
            if(this.validarFechaMayor(excelFecha, fechaMaximaDeReporte)){
                
                if(this.validarFechaMayor(fechaNacimiento,excelFecha)){
                    //console.log(excelFecha);
                }else{
                    return StructureErrors.dateBirthdayError + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion+ " valor: " + excelFecha;
                }
            }else{
                return StructureErrors.dateValue + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion+ " valor: " + excelFecha;
            }
        }else{
            if(validarEstructuraComodines.test(excelFecha)){
                //console.log(excelFecha);
            }else{
                return StructureErrors.dateComodin + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion+ " valor: " + excelFecha;
            }  
        } 
    }

    validarFechaAtencionAsesoriaAnticoncepcion(excelData: any, fechaMaximaReporte: any, fechaNacimiento: any,consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelData, fechaMaximaReporte, fechaNacimiento, ErroresAnticonception.fechaAtencionSaludAsesoriaAnticoncepcion, 
            validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarSuministroMetodoAnticonceptivo(exceldata: any, consecutivo: any, numeroIdentificacion: any): any{
        if(exceldata.toString().length > 0){
            exceldata = ValidateEmpty.prototype.validateEmpty(exceldata);

            if(!allowOnlyNumbersRegExp.test(exceldata)){
                if(validarEstructura.suministroMetodoAnticonceptivo.value.test(exceldata)){
                    //console.log(exceldata.toString());
                }else{                    
                        return ErroresAnticonception.suministroMetodoAnticonceptivo.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{               
                    return ErroresAnticonception.suministroMetodoAnticonceptivo.invalidFormat + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
                            return ErroresAnticonception.suministroMetodoAnticonceptivo.emptyField + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarFechaSuministroMetodoAnticonceptivo(excelData: any, fechaMaximaReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelData, fechaMaximaReporte, fechaNacimiento, ErroresAnticonception.fechaSuministroMetodoAnticonceptivo, 
            validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }
}