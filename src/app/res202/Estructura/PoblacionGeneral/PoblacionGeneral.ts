import {ErroresPoblacionGeneral} from './ErroresEstructuraPoblacionGeneral';
import {ValidateEmpty} from '../ValidarEspacios/ValidarEspacios';
import {validarEstructura} from '../ValoresEstructura202/ValoresEstructura202';

const allowOnlyNumbersRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;

//PERMITE VALIDAR NUMEROS CON DECIMALES
const allowOnlyNumbersPointRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*,_?¿\\|¨"´`¡!°':;@<>¬~]/;

export class PoblacionGeneral{

    obtenerFecha(fecha: any){
        let dateArray  = fecha.toString();
        dateArray = dateArray.split('-');
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

        if(añoFechaMenor < añoFechaMayor){ 
            if(añoFechaMenor > validarEstructura.comodinesFecha.valorMinimo){ return true;}
        }
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
    formatoGeneralValidarFecha(excelFecha: any, fechaMaximaDeReporte: any, fechaNacimiento: any, ErroresPoblacionGeneral: any, validarEstructuraComodines: any
        , consecutivo: any, numeroIdentificacion: any): any{
        if(excelFecha.toString().length > 0){
            excelFecha = ValidateEmpty.prototype.validateEmpty(excelFecha);

            if(validarEstructura.formatoFecha.value.test(excelFecha.toString())){
               return this.validarFechaEstructura(excelFecha, fechaMaximaDeReporte,  fechaNacimiento, ErroresPoblacionGeneral, validarEstructuraComodines
                , consecutivo, numeroIdentificacion);

            }else{
                return ErroresPoblacionGeneral.dateFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;                
            }
        }else{
            return ErroresPoblacionGeneral.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    //valida la fecha  registrar con la fecha maxima del reporte y la fecha de nacimiento con dos o siete comodines de fecha
    validarFechaEstructura(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, ErroresPoblacionGeneral: any, validarEstructuraComodines: any
        , consecutivo: any, numeroIdentificacion: any): any{
        const arrayFechaGestacion = this.obtenerFecha(excelFecha);
        const añoFechaGestacion = arrayFechaGestacion[0];
        if(añoFechaGestacion > validarEstructura.comodinesFecha.valorMinimo){

            if(this.validarFechaMayor(excelFecha, fechaMaximaDeReporte)){                
                if(this.validarFechaMayor(fechaNacimiento,excelFecha)){
                    //console.log(excelFecha);
                }else{
                    return ErroresPoblacionGeneral.dateBirthdayError + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresPoblacionGeneral.dateValue + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            if(validarEstructuraComodines.test(excelFecha)){
                //console.log(excelFecha);
            }else{
                return ErroresPoblacionGeneral.dateComodin + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }  
        } 
    }

    validarFechaDelPeso(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresPoblacionGeneral.fechaDelPeso, validarEstructura.fechaPeso.value, consecutivo, numeroIdentificacion);
    }

    validarPesoEnKG(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersPointRegExp.test(excelData)){

                if(excelData.length <= validarEstructura.pesoKG.length){

                    if(excelData.toString() >= validarEstructura.pesoKG.value.min &&
                    excelData.toString() <= validarEstructura.pesoKG.value.max){
                        //console.log(excelData.toString());
                    }else{

                        if(validarEstructura.pesoKG.comodinPeso.test(excelData)){
                            //console.log(excelData.toString());
                        }else{
                            return ErroresPoblacionGeneral.pesoEnKG.invalidOptions + 
                            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                        }
                    } 
                }else{
                    return ErroresPoblacionGeneral.pesoEnKG.invalidLength + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
                               
            }else{
                return ErroresPoblacionGeneral.pesoEnKG.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresPoblacionGeneral.pesoEnKG.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarFechaDeLaTalla(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresPoblacionGeneral.fechaDeLaTalla, validarEstructura.fechaTalla.value, consecutivo, numeroIdentificacion);
    }

    validarTallaEnCMS(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersPointRegExp.test(excelData)){

                if(excelData.length <= validarEstructura.tallaCMS.length){

                    if(excelData.toString() >= validarEstructura.tallaCMS.value.min &&
                    excelData.toString() <= validarEstructura.tallaCMS.value.max){
                        //console.log(excelData.toString());
                    }else{

                        if(validarEstructura.tallaCMS.comodinTalla.test(excelData)){
                            //console.log(excelData.toString());
                        }else{
                            return ErroresPoblacionGeneral.tallaEnCMS.invalidOptions + 
                            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                        }
                    } 
                }else{
                    return ErroresPoblacionGeneral.tallaEnCMS.invalidLength + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
                               
            }else{
                return ErroresPoblacionGeneral.tallaEnCMS.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{return ErroresPoblacionGeneral.tallaEnCMS.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;}
    }

    validarResultadoTamizajeHepatitisC(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);

            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.resultadoTamizajeHepatitisC.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresPoblacionGeneral.resultadoTamizajeHepatitisC.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresPoblacionGeneral.resultadoTamizajeHepatitisC.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresPoblacionGeneral.resultadoTamizajeHepatitisC.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarFechaConsultaValoracionIntegral(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
       return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresPoblacionGeneral.fechaConsultaValoracionIntegral, validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarFechaAntigenoSuperficieHepatitisB(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresPoblacionGeneral.fechaAntigenoHepatitisB, validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarResultadoAntigenoSuperficieHepatitisB(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);

            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.resultadoTamizajeHepatitisB.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresPoblacionGeneral.resultadoAntigenoSuperficieHepatitisB.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresPoblacionGeneral.resultadoAntigenoSuperficieHepatitisB.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresPoblacionGeneral.resultadoAntigenoSuperficieHepatitisB.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarFechaTomaPruebaTamizajeSifilis(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresPoblacionGeneral.fechaTomaPruebaTamizajeSifilis, validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarResultadoPruebaTamizajeSífilis(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);

            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.resultadoPruebaTamizajeSífilis.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresPoblacionGeneral.resultadoPruebaTamizajeSífilis.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresPoblacionGeneral.resultadoPruebaTamizajeSífilis.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresPoblacionGeneral.resultadoPruebaTamizajeSífilis.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }
    
    validarFechaTomaPruebaVIH(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresPoblacionGeneral.fechaTomaPruebaVIH, validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

    validarResultadoPruebaVIH(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);

            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(validarEstructura.resultadoPruebaVIH.value.test(excelData)){
                    //console.log(excelData.toString());
                }else{
                    return ErroresPoblacionGeneral.resultadoPruebaVIH.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresPoblacionGeneral.resultadoPruebaVIH.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresPoblacionGeneral.resultadoPruebaVIH.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarFechaTomaTamizajeHepatitisC(excelFecha: any, fechaMaximaDeReporte:any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaDeReporte, fechaNacimiento, 
            ErroresPoblacionGeneral.fechaTomaTamizajeHepatitisC, validarEstructura.comodinesFecha.SieteComodines, consecutivo, numeroIdentificacion);
    }

}