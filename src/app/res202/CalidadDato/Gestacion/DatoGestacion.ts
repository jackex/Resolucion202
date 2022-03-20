import { erroresGestacion } from "./errorGestacion";

const valorMinino = 1900;

const edadPermitida = {
    edadMinimaMeses: 7,
    edadMinima: 10,
    edadMaxima: 60
}

const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};

const sexoRegExp = /\F/;

export class DatoGestacion{

    validarGestacion(data: any, edad: any, consecutivo: any, numeroDocumento: any, arrayGestacion: Array<any>){
        const GES = this.validarGestante(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(GES)){arrayGestacion.push(GES);}
        const AFP = this.validarAcidoFolicoPreconcepcional(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(AFP)){arrayGestacion.push(AFP);}
        const FPP = this.validarFechaProbableParto(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FPP)){arrayGestacion.push(FPP);}
        const CRG = this.validarClasificacionRiesgoGestacional(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(CRG)){arrayGestacion.push(CRG);}
        const FAPC = this.validarFechaAtencionPartoCesarea(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FAPC)){arrayGestacion.push(FAPC);}
        const FSPC = this.validarFechaSalidaPartoCesarea(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FSPC)){arrayGestacion.push(FSPC);}
        const FPCP = this.validarFechaPrimeraConsultaPrenatal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FPCP)){arrayGestacion.push(FPCP);}
        const FUCPS = this.validarFechaUltimoControlPrenatalSeguimiento(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FUCPS)){arrayGestacion.push(FUCPS);}
        const SSACP = this.validarSuministroAcidoFolicoControlPrenatal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(SSACP)){arrayGestacion.push(SSACP);}
        const  SSFCP = this.validarSuministroSulfatoFerrosoControlPrenatal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(SSFCP)){arrayGestacion.push(SSFCP);}
        const SCCCP = this.validarSuministroCarbonatoCalcioControlPrenatal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(SCCCP)){arrayGestacion.push(SCCCP);}
        const FASALM = this.validarFechaAtencionSaludApoyoLactanciaMaterna(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FASALM)){arrayGestacion.push(FASALM);}
    }

    validarGestante(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha49  = this.obtenerFecha(data[49]);
        const añoFecha50  = this.obtenerFecha(data[50]);
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[14]) > 0){
                return {mensaje: erroresGestacion.errorGestantes.errorSexo + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo,14]}
            }             
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[14]) === 0){
                    return {mensaje: erroresGestacion.errorGestantes.errorNoAplica + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo,14]}
                }
                if(añoFecha49 > valorMinino && añoFecha50 > valorMinino || añoFecha49 > valorMinino && comodines.sinDato.test(data[50])){
                    if(parseInt(data[14]) === 1 && parseInt(data[23]) === 21 && comodines.sinDato.test(data[33]) 
                        && parseInt(data[35]) === 21 && comodines.sinDato.test(data[51]) && comodines.sinDato.test(data[56]) 
                        && comodines.sinDato.test(data[58]) && parseInt(data[59]) === 21 && parseInt(data[60]) === 21 &&
                        parseInt(data[61]) === 21){
                            return { mensaje:erroresGestacion.fechaAtencionPartoCesarea.errorRelacion2 + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento , posicion:[consecutivo, 14]};
                        }
                }
            }else{
                if(parseInt(data[14]) > 0){
                    return {mensaje: erroresGestacion.errorGestantes.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo,14]}
                }
            }
        }
    }

    validarAcidoFolicoPreconcepcional(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[23]) > 0){
                return {mensaje: erroresGestacion.acidoFolicoPreconcepcional.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 23]}
            }            
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[23]) > 0 && parseInt(data[14]) === 0 || parseInt(data[23]) > 0 && parseInt(data[14]) === 2 ||
                    parseInt(data[23]) > 0 && parseInt(data[14]) === 21){
                        return {mensaje: erroresGestacion.acidoFolicoPreconcepcional.errorRelacion + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 23]}
                }
                if(parseInt(data[14]) === 1 && parseInt(data[23]) === 0){
                        return {mensaje: erroresGestacion.acidoFolicoPreconcepcional.errorRelacion2 + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 23]}
                }   
            }else{
                if(parseInt(data[23]) > 0){
                    return {mensaje: erroresGestacion.acidoFolicoPreconcepcional.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 23]}
                }
            }
        }
    }

    validarFechaProbableParto(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[33])){
                return {mensaje: erroresGestacion.fechaProbableparto.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 33]};
            }            
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                    if(!comodines.noAplica.test(data[33]) && parseInt(data[14]) === 0 || 
                        !comodines.noAplica.test(data[33]) && parseInt(data[14]) === 2 ||
                        !comodines.noAplica.test(data[33]) && parseInt(data[14]) === 21){
                            return {mensaje: erroresGestacion.fechaProbableparto.errorRelacion + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 33]};
                        }
            }
        }
    }

    validarClasificacionRiesgoGestacional(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[35]) > 0){
                return { mensaje: erroresGestacion.clasificacionRiesgoGestacional.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 35]};
            }
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[35]) > 0 && parseInt(data[14]) === 0 || parseInt(data[35]) > 0 && parseInt(data[14]) === 2 ||
                parseInt(data[35]) > 0 && parseInt(data[14]) === 21){
                    return { mensaje: erroresGestacion.clasificacionRiesgoGestacional.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 35]};
                }
                if(parseInt(data[14]) === 1 && parseInt(data[35]) === 0){
                    return { mensaje: erroresGestacion.clasificacionRiesgoGestacional.errorRelacion2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 35]};
                }
            }else{
                if(parseInt(data[35]) > 0){
                    return { mensaje: erroresGestacion.clasificacionRiesgoGestacional.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 35]};
                }
            }
        }
    }

    validarFechaAtencionPartoCesarea(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        //const añoFecha49  = this.obtenerFecha(data[49]);
        //const añoFecha50  = this.obtenerFecha(data[50]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[49])){
                return { mensaje:erroresGestacion.fechaAtencionPartoCesarea.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 49]};
            }
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[14]) === 0 && !comodines.noAplica.test(data[49]) || 
                        parseInt(data[14]) === 21 && !comodines.noAplica.test(data[49])){
                            return { mensaje:erroresGestacion.fechaAtencionPartoCesarea.errorRelacion + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 49]};
                }
                /*if(añoFecha49 > valorMinino && añoFecha50 > valorMinino || añoFecha49 > valorMinino && comodines.sinDato.test(data[50])){
                    if(parseInt(data[14]) === 1 && parseInt(data[23]) === 21 && comodines.sinDato.test(data[33]) 
                        && parseInt(data[35]) === 21 && comodines.sinDato.test(data[51]) && comodines.sinDato.test(data[56]) 
                        && comodines.sinDato.test(data[58]) && parseInt(data[59]) === 21 && parseInt(data[60]) === 21 &&
                        parseInt(data[61]) === 21){
                            return { mensaje:erroresGestacion.fechaAtencionPartoCesarea.errorRelacion2 + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento , posicion:[consecutivo, 49]};
                        }
                }*/
            }else{
                if(!comodines.noAplica.test(data[49])){
                    return { mensaje:erroresGestacion.fechaAtencionPartoCesarea.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 49]};
                }
            }
        }
    }

    validarFechaSalidaPartoCesarea(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        //const añoFecha49 = this.obtenerFecha(data[49]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[50])){
                    return {mensaje: erroresGestacion.fechaSalidaPartoCesarea.errorSexo + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 50]};
            }
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[14]) === 0 && !comodines.noAplica.test(data[50]) ||
                parseInt(data[14]) === 21 && !comodines.noAplica.test(data[50])){
                    return {mensaje: erroresGestacion.fechaSalidaPartoCesarea.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 50]};
            }
            if(comodines.noAplica.test(data[49]) && !comodines.noAplica.test(data[50])){
                return {mensaje: erroresGestacion.fechaSalidaPartoCesarea.errorRelacion2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 50]};
            }

            if(comodines.sinDato.test(data[49]) && !comodines.sinDato.test(data[50])){
                return {mensaje: erroresGestacion.fechaSalidaPartoCesarea.errorRelacion3 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 50]};
            }

            }else{
                if(!comodines.noAplica.test(data[50])){
                    return {mensaje: erroresGestacion.fechaSalidaPartoCesarea.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 50]};
                }
            }
        }
    }

    validarFechaPrimeraConsultaPrenatal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha56 = this.obtenerFecha(data[56]);
        const añoFecha58 = this.obtenerFecha(data[58]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[56])){
                return {mensaje: erroresGestacion.fechaPrimeraConsultaPrenatal.errorSexo + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 56]};
            }
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                    if(añoFecha56 > valorMinino && añoFecha58 > valorMinino){
                        if(!this.validarFechaMenor(data[56], data[58])){
                            return {mensaje: erroresGestacion.fechaPrimeraConsultaPrenatal.errorRelacion + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 56]};
                        }
                    }
                    if(parseInt(data[14]) === 1 && comodines.noAplica.test(data[56])){
                        return {mensaje: erroresGestacion.fechaPrimeraConsultaPrenatal.errorRelacion2 + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 56]};
                    }

                    if(parseInt(data[14]) === 2 && !comodines.noAplica.test(data[56])){
                        return {mensaje: erroresGestacion.fechaPrimeraConsultaPrenatal.errorRelacion3 + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 56]};
                    }
                    if(parseInt(data[14]) === 21 && !comodines.noAplica.test(data[56])){
                        return {mensaje: erroresGestacion.fechaPrimeraConsultaPrenatal.errorRelacion4 + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 56]};
                    }              
            }else{
                if(!comodines.noAplica.test(data[56])){
                    return {mensaje: erroresGestacion.fechaPrimeraConsultaPrenatal.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 56]};
                }
            }
        }
    }

    validarFechaUltimoControlPrenatalSeguimiento(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha56 = this.obtenerFecha(data[56]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[58])){
                return {mensaje: erroresGestacion.fechaUltimoControlPrenatalSeguimiento.errorSexo + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 58]};
            }
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[14]) === 0 && !comodines.noAplica.test(data[58]) ||
                parseInt(data[14]) === 2 && !comodines.noAplica.test(data[58]) ||
                parseInt(data[14]) === 21 && !comodines.noAplica.test(data[58])){
                    return {mensaje: erroresGestacion.fechaUltimoControlPrenatalSeguimiento.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 58]};
                }
                if(parseInt(data[14]) === 1 && comodines.noAplica.test(data[58])){
                    return {mensaje: erroresGestacion.fechaUltimoControlPrenatalSeguimiento.errorRelacion5 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 58]};
                }
                if(comodines.noAplica.test(data[56]) && !comodines.noAplica.test(data[58])){
                    return {mensaje: erroresGestacion.fechaUltimoControlPrenatalSeguimiento.errorRelacion2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 58]};
                }
                if(comodines.sinDato.test(data[56]) && !comodines.sinDato.test(data[58])){
                    return {mensaje: erroresGestacion.fechaUltimoControlPrenatalSeguimiento.errorRelacion3 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 58]};
                }
                if(añoFecha56 > valorMinino && comodines.noAplica.test(data[58])){
                    return {mensaje: erroresGestacion.fechaUltimoControlPrenatalSeguimiento.errorRelacion3 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 58]};
                }
            }else{
                if(!comodines.noAplica.test(data[58])){
                    return {mensaje: erroresGestacion.fechaUltimoControlPrenatalSeguimiento.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 58]};
                }
            }   
        }
    }

    validarSuministroAcidoFolicoControlPrenatal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[59]) > 0){
                return {mensaje: erroresGestacion.suministroAcidoFolicoControlPrenatal.errorSexo + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 59]};
            }
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[59]) > 0 && parseInt(data[14]) === 0 || parseInt(data[59]) > 0 && parseInt(data[14]) === 2 ||
                parseInt(data[59]) > 0 && parseInt(data[14]) === 21){
                    return {mensaje: erroresGestacion.suministroAcidoFolicoControlPrenatal.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 59]};
                }
            }else{
                if(parseInt(data[59]) > 0){
                    return {mensaje: erroresGestacion.suministroAcidoFolicoControlPrenatal.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 59]};
                }
            }
        }
    }

    validarSuministroSulfatoFerrosoControlPrenatal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[60]) > 0){
                return {mensaje: erroresGestacion.suministroSulfatoFerrosoControlPrenatal.errorSexo + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 60]};
            }
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[60]) > 0 && parseInt(data[14]) === 0 || parseInt(data[60]) > 0 && parseInt(data[14]) === 2 ||
                parseInt(data[60]) > 0 && parseInt(data[14]) === 21){
                    return {mensaje: erroresGestacion.suministroSulfatoFerrosoControlPrenatal.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 60]};
                }
            }else{
                if(parseInt(data[60]) > 0){
                    return {mensaje: erroresGestacion.suministroSulfatoFerrosoControlPrenatal.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 60]};
                }
            }
        }
    }

    validarSuministroCarbonatoCalcioControlPrenatal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[61]) > 0){
                return {mensaje: erroresGestacion.suministroCarbonatoCalcioControlPrenatal.errorSexo + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 61]};
            }
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[61]) > 0 && parseInt(data[14]) === 0 || parseInt(data[61]) > 0 && parseInt(data[14]) === 2 ||
                parseInt(data[61]) > 0 && parseInt(data[14]) === 21){
                    return {mensaje: erroresGestacion.suministroCarbonatoCalcioControlPrenatal.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 61]};
                }
            }else{
                if(parseInt(data[61]) > 0){
                    return {mensaje: erroresGestacion.suministroCarbonatoCalcioControlPrenatal.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 61]};
                }
            }
        }
    }

    validarFechaAtencionSaludApoyoLactanciaMaterna(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] < edadPermitida.edadMinima){
            if(edad[1] >= edadPermitida.edadMinimaMeses && edad[0]  === 0){
                if(!comodines.noAplica.test(data[51])){
                    return {mensaje: erroresGestacion.fechaAtencionSaludApoyoLactanciaMaterna.errorSexo + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 51]};
                }
            }
        }else{
            if(edad[1] < edadPermitida.edadMinimaMeses  && edad[0]  === 0){
                    if(comodines.noAplica.test(data[51])){
                        return {mensaje: erroresGestacion.fechaAtencionSaludApoyoLactanciaMaterna.errorNoAplica + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 51]};
                    }
            }else{
                if(sexoRegExp.test(data[10])){
                    if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                        if(parseInt(data[14]) === 1 && comodines.noAplica.test(data[51])){
                            return {mensaje: erroresGestacion.fechaAtencionSaludApoyoLactanciaMaterna.errorRelacion + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 51]};
                        }
                    }else{
                        if(!comodines.noAplica.test(data[51])){
                            return {mensaje: erroresGestacion.fechaAtencionSaludApoyoLactanciaMaterna.errorNoAplica + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 51]};
                        }
                    }
                }else{
                    if(!comodines.noAplica.test(data[51])){
                        return {mensaje: erroresGestacion.fechaAtencionSaludApoyoLactanciaMaterna.errorSexo + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 51]};
                    }
                }
            }
        }
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

    obtenerFecha(data: any): any{
        let fecha = data;
        fecha = fecha.split('-');
        return fecha[0];
    }

    validarFechaMenor(fechaMenor: any, fechaMayor: any){
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

}