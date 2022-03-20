import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

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

export class CorregirGestacion{

    corregirDatoGestacion(data: any, errores: any, fechaSuperiorReporte: any): any{
        return this.corregirGestacion(data, errores, fechaSuperiorReporte);
    }

    corregirGestacion(data: any, errores: any, fechaSuperiorReporte: any): any{
         data = data.split(/\r\n|\n/);
    
         for (let index = 0; index < errores.length; index++) {
             if(errores[index].datoGestacion.errores[0].length > 0){
                 for(let i = 0; i < errores[index].datoGestacion.errores[0].length; i++){
                        let fila = parseInt(errores[index].datoGestacion.errores[0][i].posicion[0]);
                        //let columna = parseInt(errores[index].datoGestacion.errores[0][i].posicion[1]);
                            let temp = data[fila].split('|');
                            CalcularEdad.prototype.calcularDiasyMeses(temp[9], fechaSuperiorReporte);
                            const edadUsuario = CalcularEdad.prototype.EDAD;
                            const mesesEdadusuario = CalcularEdad.prototype.NUMERODEMESES;
                            const diasEdadUsuario = CalcularEdad.prototype.NUMERODEDIAS;
                            const datosEdad = [edadUsuario, mesesEdadusuario,diasEdadUsuario];
                            this.corregirGestante(temp, datosEdad);
                            this.corregirAcidoFolicoPreconcepcional(temp, datosEdad);
                            this.corregirFechaProbableParto(temp, datosEdad);
                            this.corregirClasificacionRiesgoGestacional(temp, datosEdad);
                            this.corregirFechaAtencionPartoCesarea(temp, datosEdad);
                            this.corregirFechaSalidaPartoCesarea(temp, datosEdad);
                            this.corregirFechaPrimeraConsultaPrenatal(temp, datosEdad);
                            this.corregirFechaUltimoControlPrenatalSeguimiento(temp, datosEdad);
                            this.corregirSuministroAcidoFolicoControlPrenatal(temp, datosEdad);
                            this.corregirSuministroSulfatoFerrosoControlPrenatal(temp, datosEdad);
                            this.corregirSuministroCarbonatoCalcioControlPrenatal(temp, datosEdad);
                            this.corregirFechaAtencionSaludApoyoLactanciaMaterna(temp, datosEdad);
                            data[fila] = temp.join('|');
                 }
            }
        }
         return data; 
    }

    corregirGestante(data: any, edad: any): any{
        const añoFecha49  = this.obtenerFecha(data[49]);
        const añoFecha50  = this.obtenerFecha(data[50]);
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[14]) > 0){
                data[14] = 0;
            }             
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[14]) === 0){
                    data[14] = 21;
                }
                if(añoFecha49 > valorMinino && añoFecha50 > valorMinino || añoFecha49 > valorMinino && comodines.sinDato.test(data[50])){
                    if(parseInt(data[14]) === 1 && parseInt(data[23]) === 21 && comodines.sinDato.test(data[33]) 
                        && parseInt(data[35]) === 21 && comodines.sinDato.test(data[51]) && comodines.sinDato.test(data[56]) 
                        && comodines.sinDato.test(data[58]) && parseInt(data[59]) === 21 && parseInt(data[60]) === 21 &&
                        parseInt(data[61]) === 21){
                            data[14] = 2;
                        }
                }
            }else{
                if(parseInt(data[14]) > 0){
                    data[14] = 0; 
                }
            }
        }
    }

    corregirAcidoFolicoPreconcepcional(data: any, edad: any): any{
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[23]) > 0){data[23] = 0;}            
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[23]) > 0 && parseInt(data[14]) === 0 || parseInt(data[23]) > 0 && parseInt(data[14]) === 2 ||
                    parseInt(data[23]) > 0 && parseInt(data[14]) === 21){
                        data[23] = 0;
                }
                if(parseInt(data[14]) === 1 && parseInt(data[23]) === 0){data[23] = 21;}   
            }else{
                if(parseInt(data[23]) > 0){data[23] = 0;}
            }
        }
    }

    corregirFechaProbableParto(data: any, edad: any): any{

        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[33])){data[33] = '1845-01-01';}            
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                    if(!comodines.noAplica.test(data[33]) && parseInt(data[14]) === 0 || 
                        !comodines.noAplica.test(data[33]) && parseInt(data[14]) === 2 ||
                        !comodines.noAplica.test(data[33]) && parseInt(data[14]) === 21){
                            data[33] = '1845-01-01';
                        }
            }
        }
    }

    corregirClasificacionRiesgoGestacional(data: any, edad: any): any{
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[35]) > 0){data[35] = 0;}
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[35]) > 0 && parseInt(data[14]) === 0 || parseInt(data[35]) > 0 && parseInt(data[14]) === 2 ||
                parseInt(data[35]) > 0 && parseInt(data[14]) === 21){
                    data[35] = 0;
                }
                if(parseInt(data[14]) === 1 && parseInt(data[35]) === 0){data[35] = 21;}
            }else{
                if(parseInt(data[35]) > 0){data[35] = 0;}
            }
        }
    }

    corregirFechaAtencionPartoCesarea(data: any, edad: any): any{
        //const añoFecha49  = this.obtenerFecha(data[49]);
        //const añoFecha50  = this.obtenerFecha(data[50]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[49])){data[49] = '1845-01-01';}
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[14]) === 0 && !comodines.noAplica.test(data[49]) || 
                        parseInt(data[14]) === 21 && !comodines.noAplica.test(data[49])){
                            data[49] = '1845-01-01';
                }
                /*if(añoFecha49 > valorMinino && añoFecha50 > valorMinino || añoFecha49 > valorMinino && comodines.sinDato.test(data[50])){
                    if(parseInt(data[14]) === 1 && parseInt(data[23]) === 21 && comodines.sinDato.test(data[33]) 
                        && parseInt(data[35]) === 21 && comodines.sinDato.test(data[51]) && comodines.sinDato.test(data[56]) 
                        && comodines.sinDato.test(data[58]) && parseInt(data[59]) === 21 && parseInt(data[60]) === 21 &&
                        parseInt(data[61]) === 21){
                            return erroresGestacion.fechaAtencionPartoCesarea.errorRelacion2 + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento;  
                        }
                }*/
            }else{
                if(!comodines.noAplica.test(data[49])){
                    data[49] = '1845-01-01';
                }
            }
        }
    }

    corregirFechaSalidaPartoCesarea(data: any, edad: any): any{
       // const añoFecha49 = this.obtenerFecha(data[49]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[50])){data[50] = '1845-01-01';}
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[14]) === 0 && !comodines.noAplica.test(data[50]) ||
                parseInt(data[14]) === 21 && !comodines.noAplica.test(data[50])){
                    data[50] = '1845-01-01';
            }
            if(comodines.noAplica.test(data[49]) && !comodines.noAplica.test(data[50])){
                data[50] = '1845-01-01';
            }

            if(comodines.sinDato.test(data[49]) && !comodines.sinDato.test(data[50])){
                data[50] = '1800-01-01';
            }

            }else{
                if(!comodines.noAplica.test(data[50])){
                    data[50] = '1845-01-01';
                }
            }
        }
    }

    corregirFechaPrimeraConsultaPrenatal(data: any, edad: any): any{
       // const añoFecha56 = this.obtenerFecha(data[56]);
      // const añoFecha58 = this.obtenerFecha(data[58]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[56])){data[56] = '1845-01-01';}
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                    /*if(añoFecha56 > valorMinino && añoFecha58 > valorMinino){
                        if(!this.corregirFechaMenor(data[56], data[58])){
                            return erroresGestacion.fechaPrimeraConsultaPrenatal.errorRelacion + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento;
                        }
                    }*/
                    if(parseInt(data[14]) === 1 && comodines.noAplica.test(data[56])){
                        data[56] = '1800-01-01';
                    }
                    if(parseInt(data[14]) === 2 && !comodines.noAplica.test(data[56])){
                        data[56] = '1845-01-01';
                    }
                    if(parseInt(data[14]) === 21 && !comodines.noAplica.test(data[56])){
                        data[56] = '1845-01-01';
                    }              
            }else{
                if(!comodines.noAplica.test(data[56])){
                    data[56] = '1845-01-01';
                }
            }
        }
    }

    corregirFechaUltimoControlPrenatalSeguimiento(data: any, edad: any): any{
        const añoFecha56 = this.obtenerFecha(data[56]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[58])){data[58] = '1845-01-01';}
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[14]) === 0 && !comodines.noAplica.test(data[58]) ||
                parseInt(data[14]) === 2 && !comodines.noAplica.test(data[58]) ||
                parseInt(data[14]) === 21 && !comodines.noAplica.test(data[58])){
                    data[58] = '1845-01-01';
                }
                if(parseInt(data[14]) === 1 && comodines.noAplica.test(data[58])){
                    data[58] = '1800-01-01';
                }
                if(comodines.noAplica.test(data[56]) && !comodines.noAplica.test(data[58])){
                    data[58] = '1845-01-01';
                }
                if(comodines.sinDato.test(data[56]) && !comodines.sinDato.test(data[58])){
                    data[58] = '1800-01-01';
                }
                if(añoFecha56 > valorMinino && comodines.noAplica.test(data[58])){
                    data[58] = '1800-01-01';
                }
            }else{
                if(!comodines.noAplica.test(data[58])){
                    data[58] = '1845-01-01';
                }
            }   
        }
    }

    corregirSuministroAcidoFolicoControlPrenatal(data: any, edad: any): any{
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[59]) > 0){data[59] = 0;}
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[59]) > 0 && parseInt(data[14]) === 0 || parseInt(data[59]) > 0 && parseInt(data[14]) === 2 ||
                parseInt(data[59]) > 0 && parseInt(data[14]) === 21){
                    data[59] = 0;
                }
            }else{
                if(parseInt(data[59]) > 0){data[59] = 0;}
            }
        }
    }

    corregirSuministroSulfatoFerrosoControlPrenatal(data: any, edad: any): any{
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[60]) > 0){data[60] = 0;}
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[60]) > 0 && parseInt(data[14]) === 0 || parseInt(data[60]) > 0 && parseInt(data[14]) === 2 ||
                parseInt(data[60]) > 0 && parseInt(data[14]) === 21){
                    data[60] = 0;
                }
            }else{
                if(parseInt(data[60]) > 0){data[60] = 0;}
            }
        }
    }

    corregirSuministroCarbonatoCalcioControlPrenatal(data: any, edad: any): any{
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[61]) > 0){data[61] = 0;}
        }else{
            if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[61]) > 0 && parseInt(data[14]) === 0 || parseInt(data[61]) > 0 && parseInt(data[14]) === 2 ||
                parseInt(data[61]) > 0 && parseInt(data[14]) === 21){
                    data[61] = 0;
                }
            }else{
                if(parseInt(data[61]) > 0){data[61] = 0;}
            }
        }
    }

    corregirFechaAtencionSaludApoyoLactanciaMaterna(data: any, edad: any): any{
        if(edad[0] < edadPermitida.edadMinima){
            if(edad[1] >= edadPermitida.edadMinimaMeses && edad[0]  === 0){
                if(!comodines.noAplica.test(data[51])){
                    data[51] = '1845-01-01';
                }
            }
        }else{
            if(edad[1] < edadPermitida.edadMinimaMeses && edad[0]  === 0){
                    if(comodines.noAplica.test(data[51])){
                        data[51] = '1800-01-01';
                    }
            }else{
                if(sexoRegExp.test(data[10])){
                    if(edad[0] >= edadPermitida.edadMinima && edad[0] < edadPermitida.edadMaxima){
                        if(parseInt(data[14]) === 1 && comodines.noAplica.test(data[51])){
                            data[51] = '1800-01-01';
                        }else{
                            if(edad >= edadPermitida.edadMaxima){
                                if(!comodines.noAplica.test(data[51])){
                                    data[51] = '1845-01-01';
                                }
                            }
                        }
                    }else{
                        data[51] = '1845-01-01';
                    }
                }else{
                    if(!comodines.noAplica.test(data[51])){
                        data[51] = '1845-01-01';
                    }
                }
            }
        }
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

    obtenerFecha(data: any): any{
        let fecha = data;
        fecha = fecha.split('-');
        return fecha[0];
    }



}