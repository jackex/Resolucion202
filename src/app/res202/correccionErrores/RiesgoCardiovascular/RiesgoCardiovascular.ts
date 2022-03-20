import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

const valorMinimo = 1900;
const edadPermitida = {
    edadMinimaTabaco: 12,
    edadMinima: 18,
    edadHemoglogina :{
        edadMinimaMeses: 6,
        edadMaximaMeses: 23,
        edadMinimaMujeres: 10,
        edadMaximaMujeres: 18,
        edadMinimaGestantes: 10,
        eddMaximaGestantes: 60
    },edadGlicemiaBasal:{
        edadMinima: 28
    }
};
const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};

const sexoRegExp = /\F/;

export class CorregirRiesgoCardiovascular{

    corregirDatoRiesgoCardiovascular(data: any, errores: any, fechaSuperiorReporte: any): any{
        return this.corregirRiesgoCardiovascular(data, errores, fechaSuperiorReporte);
    }

    corregirRiesgoCardiovascular(data: any, errores: any, fechaSuperiorReporte: any): any{
        data = data.split(/\r\n|\n/);
    
        for (let index = 0; index < errores.length; index++) {
            if(errores[index].datoRiesgoCardiovascular.errores[0].length > 0){
                for(let i = 0; i < errores[index].datoRiesgoCardiovascular.errores[0].length; i++){
                    let fila = parseInt(errores[index].datoRiesgoCardiovascular.errores[0][i].posicion[0]);
                    let temp = data[fila].split('|');
                    CalcularEdad.prototype.calcularEdad(temp[9], fechaSuperiorReporte);
                    CalcularEdad.prototype.calcularDiasyMeses(temp[9], fechaSuperiorReporte);
                    const edadUsuario = CalcularEdad.prototype.EDAD;
                    const mesesEdadusuario = CalcularEdad.prototype.NUMERODEMESES;
                    const diasEdadUsuario = CalcularEdad.prototype.NUMERODEDIAS;
                    const datosEdad = [edadUsuario, mesesEdadusuario,diasEdadUsuario];
                    this.corregirConsumoDeTabaco(temp, datosEdad);
                    this.corregirResultadoGlicemaBasal(temp, datosEdad);
                    this.corregirFechaTomaLDL(temp, datosEdad);
                    this.corregirResultadoLDL(temp, datosEdad);
                    this.corregirResultadoHDL(temp, datosEdad);
                    this.corregirResultadoTrigliceridos(temp, datosEdad);
                    this.corregirFechaTomaHemoglobina(temp, datosEdad);
                    this.corregirResultadoHemoglobina(temp, datosEdad);
                    this.corregirFechaGlicemiaBasal(temp, datosEdad);
                    this.corregirFechaTomaCreatinina(temp, datosEdad);
                    this.corregirResultadoCreatinina(temp, datosEdad);
                    this.corregirFechaTomaHDL(temp, datosEdad);
                    this.corregirClasificacionRiesgoCardiovascular(temp, datosEdad);
                    this.corregirClasificacionRiesgoMetabolico(temp, datosEdad);
                    this.corregirFechaTomaTrigliceridos(temp, datosEdad);
                    data[fila] = temp.join('|');
                }
           }
       }
        return data;
    }

    corregirConsumoDeTabaco(data: any, edad: any){
        if(edad[0] >= edadPermitida.edadMinimaTabaco){
            //if(parseInt(data[19]) === 98){data[19] = 99;}
        }else{
            if(parseInt(data[19]) !== 98){data[19] = 98;}            
        }
    }

    corregirResultadoGlicemaBasal(data: any, edad: any){
        //const añoFecha = this.obtenerFecha(data[105]);
        if(edad[0] >= edadPermitida.edadHemoglogina.edadMinimaGestantes && 
            edad[0] < edadPermitida.edadHemoglogina.eddMaximaGestantes){
                if(data[14] === 1 && data[57] === 0){data[57] = 998;}
        }else{
            if(edad[0] >= edadPermitida.edadMinima){
                if(parseInt(data[57]) === 0){data[57] = 998;}
                /*if(añoFecha > valorMinimo && parseInt(data[57]) === 998){
                    return {mensaje:errorRiesgoCardiovascular.resultadoGlicemaBasal.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento,posicion:[consecutivo, 57]};
                }*/
                if(comodines.cincoComodines.test(data[105]) && parseInt(data[57]) !== 998){
                    data[57] = 998;
                }
                if(comodines.sinDato.test(data[105]) && parseInt(data[57]) !== 998){
                    data[57] = 998;
                }
            }else{
                if(comodines.noAplica.test(data[105]) && parseInt(data[57]) !== 0){
                    data[57] = 0;
                }
                /*if(añoFecha > valorMinimo && parseInt(data[57]) === 998){
                    return {mensaje:errorRiesgoCardiovascular.resultadoGlicemaBasal.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento,posicion:[consecutivo, 57]};
                }*/
                if(comodines.cincoComodines.test(data[105]) && parseInt(data[57]) !== 998){
                    data[57] = 998;
                }
                if(comodines.sinDato.test(data[105]) && parseInt(data[57]) !== 998){
                    data[57] = 998;
                }          
            }
        }
    }

    corregirFechaTomaLDL(data: any, edad: any){
        const añoFecha = this.obtenerFecha(data[72]);
        if(edad[0] >= edadPermitida.edadMinima){
            if(comodines.noAplica.test(data[72])){data[72] = '1800-01-01';}
            if(añoFecha > valorMinimo && parseInt(data[92]) === 998){data[72] = '1800-01-01';}
        }else{
            if(!comodines.noAplica.test(data[72]) && parseInt(data[92]) === 0){data[72] = '1845-01-01';}
        }
    }

    corregirResultadoLDL(data: any, edad: any){
        //const añoFecha = this.obtenerFecha(data[72]);
        if(edad[0] >= edadPermitida.edadMinima){
            if(parseInt(data[92]) === 0){data[92] = 998;}
            /*if(añoFecha > valorMinimo && parseInt(data[95]) === 998){
                return errorRiesgoCardiovascular.resultadoLDL.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
            }*/
            if(comodines.cincoComodines.test(data[72]) && parseInt(data[92]) !== 998){
                data[92] = 998;
            }
            if(comodines.sinDato.test(data[72]) && parseInt(data[92]) !== 998){
                data[92] = 998;
            }
        }else{
            if(comodines.noAplica.test(data[72]) && parseInt(data[92]) !== 0){
                data[92] = 0;
            }
            if(comodines.cincoComodines.test(data[72]) && parseInt(data[92]) !== 998){
                data[92] = 998;
            }
            if(comodines.sinDato.test(data[72]) && parseInt(data[92]) !== 998){
                data[92] = 998;
            }
        }
    }

    corregirResultadoHDL(data: any, edad: any){
        //const añoFecha = this.obtenerFecha(data[111]);
        if(edad[0] >= edadPermitida.edadMinima){
            if(parseInt(data[95]) === 0){data[95] = 998;}
            /*if(añoFecha > valorMinimo && parseInt(data[95]) === 998){
                return errorRiesgoCardiovascular.resultadoHDL.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
            }*/
            if(comodines.cincoComodines.test(data[111]) && parseInt(data[95]) !== 998){
                data[95] = 998;
            }
            if(comodines.sinDato.test(data[111]) && parseInt(data[95]) !== 998){
                data[95] = 998;
            }
        }else{
            /*if(añoFecha > valorMinimo && parseInt(data[95]) === 998){
                return errorRiesgoCardiovascular.resultadoHDL.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
            }*/
            if(comodines.cincoComodines.test(data[111]) && parseInt(data[95]) !== 998){
                data[95] = 998;
            }
            if(comodines.sinDato.test(data[111]) && parseInt(data[95]) !== 998){
                data[95] = 998;
            }
            if(comodines.noAplica.test(data[111]) && parseInt(data[95]) !== 0){
                data[95] = 0;
            }
        }
    }

    corregirResultadoTrigliceridos(data: any, edad: any){
        //const añoFecha = this.obtenerFecha(data[118]);
        if(edad[0] >= edadPermitida.edadMinima){
            if(parseInt(data[98]) === 0){data[98] = 998;}
            /*if(añoFecha > valorMinimo && parseInt(data[98]) === 998){
                return errorRiesgoCardiovascular.resultadoTrigliceridos.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
            }*/
            if(comodines.cincoComodines.test(data[118]) && parseInt(data[98]) !== 998){
                data[98] = 998;
            }
            if(comodines.sinDato.test(data[118]) && parseInt(data[98]) !== 998){
                data[98] = 998;
            }
        }else{
            if(comodines.noAplica.test(data[118]) && parseInt(data[98]) !== 0){
                data[98] = 0;
            }
            if(comodines.cincoComodines.test(data[118]) && parseInt(data[98]) !== 998){
                data[98] = 998;
            }
            if(comodines.sinDato.test(data[118]) && parseInt(data[98]) !== 998){
                data[98] = 998;
            }           
        }
    }

    corregirFechaTomaHemoglobina(data: any, edad: any){
            if(edad[0] >= 0 && edad[0] <= 1){
                if(edad[0] === 0 && edad[1] >= 6){
                    if(comodines.noAplica.test(data[103])){
                        data[103] = '1800-01-01';
                    }
                }else{
                    if(edad[0] === 1 && edad[1] <= 10 && edad[2] <= 30){
                        if(comodines.noAplica.test(data[103])){
                            data[103] = '1800-01-01';
                        }
                    }
                }                
            }else{
                if(sexoRegExp.test(data[10])){
                    if(edad[0] >= edadPermitida.edadHemoglogina.edadMinimaMujeres && 
                        edad[0] < edadPermitida.edadHemoglogina.edadMaximaMujeres && data[14] !== 1){
                            if(comodines.noAplica.test(data[103])){
                                data[103] = '1800-01-01';
                            }
                            
                        }else{
                            if(edad[0] >= edadPermitida.edadHemoglogina.edadMinimaGestantes && 
                                edad[0] < edadPermitida.edadHemoglogina.eddMaximaGestantes && data[14] === 1){
                                    if(comodines.noAplica.test(data[103])){
                                        data[103] = '1800-01-01';
                                    }                                
                            }
                        }
                }
            }      
    }

    corregirResultadoHemoglobina(data: any, edad: any){
            if(edad[0] >= 0 && edad[0] <= 1){
                if(edad[0] === 0 && edad[1] >= 6){
                    if(parseInt(data[104]) === 0){data[104] = 998;}
                }else{
                    if(edad[0] === 1 && edad[1] <= 10 && edad[2] <= 30){
                        if(parseInt(data[104]) === 0){data[104] = 998;}
                        if(comodines.cincoComodines.test(data[103]) && parseInt(data[104]) !== 998){
                            data[104] = 998;
                        }
                        if(comodines.sinDato.test(data[103]) && parseInt(data[104]) !== 998){
                            data[104] = 998;
                        }
                    }
                }                
            }else{
                if(sexoRegExp.test(data[10])){
                    if(edad[0] >= edadPermitida.edadHemoglogina.edadMinimaMujeres && 
                        edad[0] <= edadPermitida.edadHemoglogina.edadMaximaMujeres && data[14] !== 1){
                            if(parseInt(data[104]) === 0){
                                data[104] = 998;
                            }
                            if(comodines.cincoComodines.test(data[103]) && parseInt(data[104]) !== 998){
                                data[104] = 998;
                            }
                            if(comodines.sinDato.test(data[103]) && parseInt(data[104]) !== 998){
                                data[104] = 998;
                            }
                        }else{
                            if(edad[0] >= edadPermitida.edadHemoglogina.edadMinimaGestantes && 
                                edad[0] < edadPermitida.edadHemoglogina.eddMaximaGestantes && data[14] === 1){
                                    if(parseInt(data[104]) === 0){
                                        data[104] = 998;
                                    }
                                    if(comodines.cincoComodines.test(data[103]) && parseInt(data[104]) !== 998){
                                        data[104] = 998;
                                    }
                                    if(comodines.sinDato.test(data[103]) && parseInt(data[104]) !== 998){
                                        data[104] = 998;
                                    }                                
                            }else{
                                if(comodines.cincoComodines.test(data[103]) && parseInt(data[104]) !== 998){
                                    data[104] = 998;
                                }
                                if(comodines.sinDato.test(data[103]) && parseInt(data[104]) !== 998){
                                    data[104] = 998;
                                }
                            }
                        }
                }
            }
    }

    corregirFechaGlicemiaBasal(data: any, edad: any){
        const añoFecha = this.obtenerFecha(data[105]);
        if(edad[0] >= edadPermitida.edadHemoglogina.edadMinimaGestantes && 
            edad[0] < edadPermitida.edadHemoglogina.eddMaximaGestantes){
                if(data[14] === 1 && comodines.noAplica.test(data[105])){data[105] = '1800-01-01';}
                if(data[14] === 1 && añoFecha > valorMinimo && parseInt(data[57]) === 998){
                    data[105] = '1800-01-01';
                }
                if(data[14] === 1 && !comodines.sinDato.test(data[105]) && parseInt(data[57]) === 998){
                    data[105] = '1800-01-01';
                }
                if(data[14] === 1 && !comodines.cincoComodines.test(data[105]) && parseInt(data[57]) === 998){
                    data[105] = '1800-01-01';
                }
            }
            else{
                if(edad[0] >= edadPermitida.edadMinima){
                    if(comodines.noAplica.test(data[105])){data[105] = '1800-01-01';}
                    if(añoFecha > valorMinimo && parseInt(data[57]) === 998){
                        data[105] = '1800-01-01';
                    }
                    if(!comodines.sinDato.test(data[105]) && parseInt(data[57]) === 998){
                        data[105] = '1800-01-01';
                    }
                    if(!comodines.cincoComodines.test(data[105]) && parseInt(data[57]) === 998){
                        data[105] = '1800-01-01';
                    }
                }else{
                    if(añoFecha > valorMinimo && parseInt(data[57]) === 998){
                        data[105] = '1800-01-01';
                    }
                    if(!comodines.noAplica.test(data[105]) && parseInt(data[57]) === 0){
                        data[105] = '1845-01-01';
                    }
                    if(!comodines.sinDato.test(data[105]) && parseInt(data[57]) === 998){
                        data[105] = '1800-01-01';
                    }
                    if(!comodines.cincoComodines.test(data[105]) && parseInt(data[57]) === 998){
                        data[105] = '1800-01-01';
                    }
                }
            }
    
    }

    corregirFechaTomaCreatinina(data: any, edad: any){
        if(edad[0] >= edadPermitida.edadMinima){
            if(comodines.noAplica.test(data[106])){data[106] = '1800-01-01';}
        }else{
            /*if(!comodines.noAplica.test(data[106])){
                return errorRiesgoCardiovascular.fechaTomaCreatinina.errorEdad2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
            }*/
        }
    }

    corregirResultadoCreatinina(data: any, edad: any){
        //const añoFecha = this.obtenerFecha(data[106]);
        if(edad[0] >= edadPermitida.edadMinima){
            if(parseFloat(data[107]) === 0){
                data[107] = 998;
            }
            if(comodines.cincoComodines.test(data[106]) && parseInt(data[107]) !== 998){
                data[107] = 998;
            }
            if(comodines.sinDato.test(data[106]) && parseInt(data[107]) !== 998){
                data[107] = 998;
            }
            /*if(añoFecha > valorMinimo && parseInt(data[107]) === 998){
                return errorRiesgoCardiovascular.resultadoCreatinina.errorRelacion3 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
            }*/
        }else{
            /*if(parseInt(data[107]) !== 0){
                return errorRiesgoCardiovascular.resultadoCreatinina.errorEdad2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
            }*/
        }
    }

    corregirFechaTomaHDL(data: any, edad: any){
        if(edad[0] >= edadPermitida.edadMinima){
            if(comodines.noAplica.test(data[111])){data[111] = '1800-01-01';}
        }else{
            /*if(!comodines.noAplica.test(data[111])){
                return errorRiesgoCardiovascular.fechaTomaHDL.errorEdad2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
            }*/
        }
    }

    corregirClasificacionRiesgoCardiovascular(data: any, edad: any){
        if(edad[0] >= edadPermitida.edadMinima){
            if(parseInt(data[114]) === 0){data[114]  = 21;}
        }else{
            if(parseInt(data[114]) !== 0){
                data[114] = 0;
            }
        }
    }

    corregirClasificacionRiesgoMetabolico(data: any, edad: any){
        if(edad[0] >= edadPermitida.edadMinima){
            if(parseInt(data[117]) === 0){data[117] = 21;}
        }else{
            if(parseInt(data[117]) !== 0){
                data[117] = 0;
            }
        }
    }

    corregirFechaTomaTrigliceridos(data: any, edad: any){
        const añoFecha = this.obtenerFecha(data[118]);
        if(edad[0] >= edadPermitida.edadMinima){
             if(comodines.noAplica.test(data[118])){
                 data[118] = '1800-01-01';
             } 
             if(añoFecha > valorMinimo && parseInt(data[98]) === 998){
                data[118] = '1800-01-01';
            }
        }else{
            if(añoFecha > valorMinimo && parseInt(data[98]) === 998){
                data[118] = '1800-01-01';
            }
            if(!comodines.noAplica.test(data[118]) && parseInt(data[98]) === 0){
                data[118] = '1845-01-01';
            }
            if(!comodines.sinDato.test(data[118]) && parseInt(data[98]) === 998){
                data[118] = '1800-01-01';
            }
        }
     }

    obtenerFecha(data: any): any{
        let fecha = data;
        fecha = fecha.split('-');
        return fecha[0];
    }

}