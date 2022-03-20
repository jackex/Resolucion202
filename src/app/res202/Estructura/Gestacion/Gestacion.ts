import {ErroresGestacion} from './ErroresEstructuraGestacion';
import {validarEstructura} from '../ValoresEstructura202/ValoresEstructura202';
import {ValidateEmpty} from '../ValidarEspacios/ValidarEspacios';

const allowOnlyNumbersRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;

export class Gestacion{

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
    formatoGeneralValidarFecha(excelFecha: any, fechaMaximaDeReporte: any, fechaNacimiento: any, ErroresGestacion: any, validarEstructuraComodines: any
        , consecutivo: any, numeroIdentificacion: any): any{
        if(excelFecha.toString().length > 0){
            excelFecha = ValidateEmpty.prototype.validateEmpty(excelFecha);

            if(validarEstructura.formatoFecha.value.test(excelFecha)){
               return this.validarFechaEstructura(excelFecha, fechaMaximaDeReporte,  fechaNacimiento, ErroresGestacion, validarEstructuraComodines,
                consecutivo, numeroIdentificacion);    

            }else{
                return ErroresGestacion.dateFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion
            }
        }else{
            return ErroresGestacion.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    //valida la fecha  registrar con la fecha maxima del reporte y la fecha de nacimiento con dos o siete comodines de fecha
    validarFechaEstructura(excelFecha: any,fechaMaximaDeReporte:any, fechaNacimiento: any, ErroresGestacion: any, validarEstructuraComodines: any
        , consecutivo: any, numeroIdentificacion: any): any{
        const arrayFechaGestacion = this.obtenerFecha(excelFecha);
        const añoFechaGestacion = arrayFechaGestacion[0];
        if(añoFechaGestacion > validarEstructura.comodinesFecha.valorMinimo){

            if(this.validarFechaMayor(excelFecha, fechaMaximaDeReporte)){
                
                if(this.validarFechaMayor(fechaNacimiento,excelFecha)){
                //console.log(excelFecha);
                }else{
                    return ErroresGestacion.dateBirthdayError + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                return ErroresGestacion.dateValue + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            if(validarEstructuraComodines.test(excelFecha)){
                //console.log(excelFecha);
            }else{
                return ErroresGestacion.dateComodin + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }  
        } 
    }

    validarGestacion(excelGestation: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelGestation.toString().length > 0){
            excelGestation = ValidateEmpty.prototype.validateEmpty(excelGestation);
            if(!allowOnlyNumbersRegExp.test(excelGestation)){
                       if(validarEstructura.gestacion.value.test(excelGestation)){
                           //console.log(excelGestation.toString());
                       }else{
                            return ErroresGestacion.gestation.invalidOptions + 
                            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                       }
            }else{
                    return ErroresGestacion.gestation.invalidFormat + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
                return ErroresGestacion.gestation.emptyField + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    //formato general para validar comodines numericos
    formatoGeneralValidarValoresNumericos(excelDato: any, ErroresGestacion: any, validarEstructuraValores: any
        , consecutivo: any, numeroIdentificacion: any): any{
        if(excelDato.toString().length > 0){
            excelDato = ValidateEmpty.prototype.validateEmpty(excelDato);

            if(!allowOnlyNumbersRegExp.test(excelDato)){
                       if(validarEstructuraValores.test(excelDato)){
                           //console.log(excelDato.toString());
                       }else{
                        return ErroresGestacion.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion
                    }
            }else{
                return ErroresGestacion.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
            return ErroresGestacion.emptyField + 
            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarAcidoFolicoPreconcepional(excelAcidoFolico: any, consecutivo: any, numeroIdentificacion: any): any {
        return this.formatoGeneralValidarValoresNumericos(excelAcidoFolico,ErroresGestacion.acidoFolioPreconcepcional,validarEstructura.AcidoFolicoPReconcepcional.value,
            consecutivo,numeroIdentificacion);
    }

    validarFechaProbableDeParto(excelFechaDeParto: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelFechaDeParto.toString().length > 0){
            excelFechaDeParto = ValidateEmpty.prototype.validateEmpty(excelFechaDeParto);

            if(validarEstructura.formatoFecha.value.test(excelFechaDeParto)){
                const arrayFechaGestacion = this.obtenerFecha(excelFechaDeParto);
                const añoFechaGestacion = arrayFechaGestacion[0];

                if(añoFechaGestacion > validarEstructura.comodinesFecha.valorMinimo){
                    if(this.validarFechaMayor(fechaNacimiento,excelFechaDeParto)){
                        //console.log(excelFechaDeParto);
                        }else{
                            return ErroresGestacion.FechaProbableDelParto.dateBirthdayError + 
                            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }                    
                }else{
                    if(validarEstructura.comodinesFecha.Doscomodines.test(excelFechaDeParto)){
                        //console.log(excelFechaDeParto);
                    }else{
                        return ErroresGestacion.FechaProbableDelParto.dateComodin + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }  
                }
                             
            }else{
                return ErroresGestacion.FechaProbableDelParto.dateFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
        }else{
                return ErroresGestacion.FechaProbableDelParto.emptyField + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }
    }

    validarClasificacionRiesgoGestacional(excelRiesgoGestacional: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelRiesgoGestacional.toString().length > 0){
            excelRiesgoGestacional = ValidateEmpty.prototype.validateEmpty(excelRiesgoGestacional);

            if(!allowOnlyNumbersRegExp.test(excelRiesgoGestacional)){
                if(validarEstructura.clasificacionRiesgoGestacional.value.test(excelRiesgoGestacional)){
                    //console.log(excelRiesgoGestacional.toString());
                }else{
                    
                        return ErroresGestacion.clasificacionRiesgoGestacional.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
                }
            }else{
                
                    return ErroresGestacion.clasificacionRiesgoGestacional.invalidFormat + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
            }            
        }else{
            
                return ErroresGestacion.clasificacionRiesgoGestacional.emptyField + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion;
        }
    }

    validarFechaDeAtencionPartoOCesarea(excelvalue: any, fechaNacimiento: any, fechaMaximaReporte: any, consecutivo: any, numeroIdentificacion: any): any{
      return this.formatoGeneralValidarFecha(excelvalue, fechaMaximaReporte, fechaNacimiento, ErroresGestacion.fechaAtencionPartoOCesarea,validarEstructura.comodinesFecha.Doscomodines
        ,consecutivo, numeroIdentificacion);  
    }

    validarFechaSalidaAtencionPartoOCesarea(excelvalue: any, fechaNacimiento: any, fechaMaximaReporte: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelvalue, fechaMaximaReporte, fechaNacimiento, ErroresGestacion.fechaSalidaAtencionPartoOCesarea, validarEstructura.comodinesFecha.Doscomodines
            ,consecutivo, numeroIdentificacion);  
    }

    validarFechaPrimeraConsultaPrenatal(excelvalue: any, fechaNacimiento: any, fechaMaximaReporte: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelvalue, fechaMaximaReporte, fechaNacimiento, ErroresGestacion.fechaPrimeraConsultaPrenatal,validarEstructura.comodinesFecha.SieteComodines
            ,consecutivo, numeroIdentificacion);
    }

    validarFechaUltimoControlPrenatalDeSeguimiento(excelvalue: any, fechaNacimiento: any, fechaMaximaReporte: any, consecutivo: any, numeroIdentificacion: any): any{
       return  this.formatoGeneralValidarFecha(excelvalue, fechaMaximaReporte, fechaNacimiento, ErroresGestacion.fechaUltimoControlPrenatalDeSeguimiento,validarEstructura.comodinesFecha.Doscomodines
            ,consecutivo, numeroIdentificacion);
    }

    validarAcidoFolicoEnControlPrenatalPeriodoReportado(excelvalue: any, consecutivo: any, numeroIdentificacion: any): any{
       return this.formatoGeneralValidarValoresNumericos(excelvalue, ErroresGestacion.acidoFolicoEnControlPrenatalPeriodoReportado, validarEstructura.acidoFolicoEnControlPrenatalPeriodoReportado.value
            ,consecutivo, numeroIdentificacion);
    }
    validarSulfatoFerrosoEnControlPrenatalPeriodoReportado(excelvalue: any, consecutivo: any, numeroIdentificacion: any): any{
       return this.formatoGeneralValidarValoresNumericos(excelvalue, ErroresGestacion.sulfatoFerrosoEnControlPrenatalPeriodoReportado, validarEstructura.sulfatoFerrosoEnControlPrenatalPeriodoReportado.value
            ,consecutivo, numeroIdentificacion);
    }

    validarCarbonatoCalcioEnControlPrenatalPeriodoReportado(excelvalue: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarValoresNumericos(excelvalue, ErroresGestacion.carbonatoCalcioEnControlPrenatalPeriodoReportado, validarEstructura.carbonatoCalcioEnControlPrenatalPeriodoReportado.value
            ,consecutivo, numeroIdentificacion);
    }

    validarFechaAtenciónSaludPromociónApoyoLactanciaMaterna(excelFecha: any, fechaNacimiento: any, fechaMaximaReporte: any, consecutivo: any, numeroIdentificacion: any): any{
        return this.formatoGeneralValidarFecha(excelFecha, fechaMaximaReporte, fechaNacimiento, ErroresGestacion.fechaAtenciónSaludPromociónApoyoLactanciaMaterna, validarEstructura.comodinesFecha.SieteComodines
            ,consecutivo, numeroIdentificacion);
    }

    

}