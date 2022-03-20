import { errorRiesgoCardiovascular } from "./ErrorRiesgoCardiovascular";

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

export class DatoRiesgoCardiovascular{

    validarRiesgoCardiovascular(data: any, edad: any, consecutivo: any, numeroDocumento: any, arrayRiesgoCardiovascular: Array<any>){
        const CT = this.validarConsumoDeTabaco(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(CT)){arrayRiesgoCardiovascular.push(CT);}
        const RGB = this.validarResultadoGlicemaBasal(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RGB)){arrayRiesgoCardiovascular.push(RGB);}
        const FTLDL = this.validarFechaTomaLDL(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FTLDL)){arrayRiesgoCardiovascular.push(FTLDL);}
        const RLDL = this.validarResultadoLDL(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RLDL)){arrayRiesgoCardiovascular.push(RLDL);}
        const RHDL = this.validarResultadoHDL(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RHDL)){arrayRiesgoCardiovascular.push(RHDL);}
        const RTRIG = this.validarResultadoTrigliceridos(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RTRIG)){arrayRiesgoCardiovascular.push(RTRIG);}
        const FTHEMO = this.validarFechaTomaHemoglobina(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FTHEMO)){arrayRiesgoCardiovascular.push(FTHEMO);}
        const RHEMO = this.validarResultadoHemoglobina(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RHEMO)){arrayRiesgoCardiovascular.push(RHEMO);}
        const FGLIBA = this.validarFechaGlicemiaBasal(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FGLIBA)){arrayRiesgoCardiovascular.push(FGLIBA);}
        const FTCREA = this.validarFechaTomaCreatinina(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FTCREA)){arrayRiesgoCardiovascular.push(FTCREA);}
        const RCREAT = this.validarResultadoCreatinina(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RCREAT)){arrayRiesgoCardiovascular.push(RCREAT);}
        const FTHDL = this.validarFechaTomaHDL(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FTHDL)){arrayRiesgoCardiovascular.push(FTHDL);}
        const CRIECAR = this.validarClasificacionRiesgoCardiovascular(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(CRIECAR)){arrayRiesgoCardiovascular.push(CRIECAR);}
        const CLRIMET = this.validarClasificacionRiesgoMetabolico(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(CLRIMET)){arrayRiesgoCardiovascular.push(CLRIMET);}
        const FTOMTRI = this.validarFechaTomaTrigliceridos(data ,edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FTOMTRI)){arrayRiesgoCardiovascular.push(FTOMTRI);}


    }

    validarConsumoDeTabaco(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] >= edadPermitida.edadMinimaTabaco){
            /*if(parseInt(data[19]) === 98){
                return errorRiesgoCardiovascular.consumoTabaco.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
            }*/
        }else{
            if(parseInt(data[19]) !== 98){
                return {mensaje:errorRiesgoCardiovascular.consumoTabaco.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,19]};
            }            
        }
    }

    validarResultadoGlicemaBasal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[105]);
        if(edad[0] >= edadPermitida.edadHemoglogina.edadMinimaGestantes && 
            edad[0] < edadPermitida.edadHemoglogina.eddMaximaGestantes){
                if(data[14] === 1 && data[57] === 0){
                    return {mensaje:errorRiesgoCardiovascular.resultadoGlicemaBasal.errorRelacion5 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento,posicion:[consecutivo, 57]};
                }
        }else{
            if(edad[0] >= edadPermitida.edadMinima){
                if(parseInt(data[57]) === 0){
                    return {mensaje:errorRiesgoCardiovascular.resultadoGlicemaBasal.errorEdad2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento,posicion:[consecutivo, 57]};
                }
                if(añoFecha > valorMinimo && parseInt(data[57]) === 998){
                    return {mensaje:errorRiesgoCardiovascular.resultadoGlicemaBasal.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento,posicion:[consecutivo, 57]};
                }
                if(comodines.cincoComodines.test(data[105]) && parseInt(data[57]) !== 998){
                    return {mensaje:errorRiesgoCardiovascular.resultadoGlicemaBasal.errorRelacion2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento,posicion:[consecutivo, 57]};
                }
                if(comodines.sinDato.test(data[105]) && parseInt(data[57]) !== 998){
                    return {mensaje:errorRiesgoCardiovascular.resultadoGlicemaBasal.errorRelacion3 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento,posicion:[consecutivo, 57]};
                }
            }else{
                if(comodines.noAplica.test(data[105]) && parseInt(data[57]) !== 0){
                    return {mensaje:errorRiesgoCardiovascular.resultadoGlicemaBasal.errorRelacion4 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento,posicion:[consecutivo, 57]};
                }
                if(añoFecha > valorMinimo && parseInt(data[57]) === 998){
                    return {mensaje:errorRiesgoCardiovascular.resultadoGlicemaBasal.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento,posicion:[consecutivo, 57]};
                }
                if(comodines.cincoComodines.test(data[105]) && parseInt(data[57]) !== 998){
                    return {mensaje:errorRiesgoCardiovascular.resultadoGlicemaBasal.errorRelacion2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento,posicion:[consecutivo, 57]};
                }
                if(comodines.sinDato.test(data[105]) && parseInt(data[57]) !== 998){
                    return {mensaje:errorRiesgoCardiovascular.resultadoGlicemaBasal.errorRelacion3 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento,posicion:[consecutivo, 57]};
                }          
            }
        }

        
    }

    validarFechaTomaLDL(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[72]);
        if(edad[0] >= edadPermitida.edadMinima){
            if(comodines.noAplica.test(data[72])){
                return {mensaje:errorRiesgoCardiovascular.fechatomaLDL.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 72]};
            }
            if(añoFecha > valorMinimo && parseInt(data[92]) === 998){
                return {mensaje:errorRiesgoCardiovascular.fechatomaLDL.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 72]};
            }
        }else{
            if(!comodines.noAplica.test(data[72]) && parseInt(data[92]) === 0){
                return {mensaje:errorRiesgoCardiovascular.fechatomaLDL.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 72]};
            }
        }
    }

    validarResultadoLDL(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[72]);
        if(edad[0] >= edadPermitida.edadMinima){
            if(parseInt(data[92]) === 0){
                return {mensaje:errorRiesgoCardiovascular.resultadoLDL.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 92]};
            }
            if(añoFecha > valorMinimo && parseInt(data[92]) === 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoLDL.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 92]};
            }
            if(comodines.cincoComodines.test(data[92]) && parseInt(data[92]) !== 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoLDL.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 92]};
            }
            if(comodines.sinDato.test(data[92]) && parseInt(data[92]) !== 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoLDL.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 92]};
            }
        }else{
            if(comodines.noAplica.test(data[92]) && parseInt(data[92]) !== 0){
                return {mensaje:errorRiesgoCardiovascular.resultadoLDL.errorRelacion4 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 92]};
            }
            if(añoFecha > valorMinimo && parseInt(data[92]) === 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoLDL.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 92]};
            }
            if(comodines.cincoComodines.test(data[92]) && parseInt(data[92]) !== 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoLDL.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 92]};
            }
            if(comodines.sinDato.test(data[92]) && parseInt(data[92]) !== 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoLDL.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 92]};
            }
            /*if(parseInt(data[95]) !== 0){
                return {mensaje:errorRiesgoCardiovascular.resultadoLDL.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 95]};
            }*/
        }
    }

    validarResultadoHDL(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[111]);
        if(edad[0] >= edadPermitida.edadMinima){
            if(parseInt(data[95]) === 0){
                return {mensaje:errorRiesgoCardiovascular.resultadoHDL.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,95]};
            }
            if(añoFecha > valorMinimo && parseInt(data[95]) === 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoHDL.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,95]};
            }
            if(comodines.cincoComodines.test(data[111]) && parseInt(data[95]) !== 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoHDL.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,95]};
            }
            if(comodines.sinDato.test(data[111]) && parseInt(data[95]) !== 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoHDL.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,95]};
            }
        }else{
            if(añoFecha > valorMinimo && parseInt(data[95]) === 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoHDL.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,95]};
            }
            if(comodines.cincoComodines.test(data[111]) && parseInt(data[95]) !== 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoHDL.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,95]};
            }
            if(comodines.sinDato.test(data[111]) && parseInt(data[95]) !== 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoHDL.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,95]};
            }
            if(comodines.noAplica.test(data[111]) && parseInt(data[95]) !== 0){
                return {mensaje:errorRiesgoCardiovascular.resultadoHDL.errorRelacion4 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,95]};
            }
        }
    }

    validarResultadoTrigliceridos(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[118]);
        if(edad[0] >= edadPermitida.edadMinima){
            if(parseInt(data[98]) === 0){
                return {mensaje:errorRiesgoCardiovascular.resultadoTrigliceridos.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 98]};
            }
            if(añoFecha > valorMinimo && parseInt(data[98]) === 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoTrigliceridos.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 98]};
            }
            if(comodines.cincoComodines.test(data[118]) && parseInt(data[98]) !== 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoTrigliceridos.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 98]};
            }
            if(comodines.sinDato.test(data[118]) && parseInt(data[98]) !== 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoTrigliceridos.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 98]};
            }
        }else{
            if(comodines.cincoComodines.test(data[118]) && parseInt(data[98]) !== 0){
                return {mensaje:errorRiesgoCardiovascular.resultadoTrigliceridos.errorRelacion4 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 98]};
            }
            if(añoFecha > valorMinimo && parseInt(data[98]) === 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoTrigliceridos.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 98]};
            }
            if(comodines.cincoComodines.test(data[118]) && parseInt(data[98]) !== 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoTrigliceridos.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 98]};
            }
            if(comodines.sinDato.test(data[118]) && parseInt(data[98]) !== 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoTrigliceridos.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 98]};
            }           
        }
    }

    validarFechaTomaHemoglobina(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
            if(edad[0] >= 0 && edad[0] <= 1){
                if(edad[0] === 0 && edad[1] >= 6){
                    if(comodines.noAplica.test(data[103]) && parseInt(data[117]) !== 0){
                        console.log("edad " + edad[0] + " meses " + edad[1] + " consecutivo "+ consecutivo);
                        return {mensaje:errorRiesgoCardiovascular.fechaTomaHemoglobina.errorEdad + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo,103]};
                    }
                }else{
                    if(edad[0] === 1 && edad[1] <= 11){
                        if(comodines.noAplica.test(data[103]) && parseInt(data[117]) !== 0){
                            return {mensaje:errorRiesgoCardiovascular.fechaTomaHemoglobina.errorEdad + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo,103]};
                        }
                    }
                }                
            }else{
                if(sexoRegExp.test(data[10])){
                    if(edad[0] >= edadPermitida.edadHemoglogina.edadMinimaMujeres && 
                        edad[0] < edadPermitida.edadHemoglogina.edadMaximaMujeres && data[14] !== 1){
                            if(comodines.noAplica.test(data[103]) && parseInt(data[117]) !== 0){
                                return {mensaje:errorRiesgoCardiovascular.fechaTomaHemoglobina.errorEdad + " - consecutivo: "+ consecutivo +
                                 " Documento: " + numeroDocumento, posicion:[consecutivo,103]};
                            }
                            
                        }else{
                            if(edad[0] >= edadPermitida.edadHemoglogina.edadMinimaGestantes && 
                                edad[0] < edadPermitida.edadHemoglogina.eddMaximaGestantes && data[14] === 1){
                                    if(comodines.noAplica.test(data[103]) && parseInt(data[117]) !== 0){
                                        return {mensaje:errorRiesgoCardiovascular.fechaTomaHemoglobina.errorEdad + " - consecutivo: "+ consecutivo +
                                        " Documento: " + numeroDocumento, posicion:[consecutivo,103]};
                                    }                                
                            }
                        }
                }                
            }      
    }

    validarResultadoHemoglobina(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
            if(edad[0] >= 0 && edad[0] <= 1){
                if(edad[0] === 0 && edad[1] >= 6){
                    if(parseInt(data[104]) === 0){
                        return {mensaje:errorRiesgoCardiovascular.resultadoHemoglobina.errorEdad + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 104]};
                    }
                }else{
                    if(edad[0] === 1 && edad[1] <= 10 && edad[2] <= 30){
                        if(parseInt(data[104]) === 0){
                            return {mensaje:errorRiesgoCardiovascular.resultadoHemoglobina.errorEdad + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 104]};
                        }
                        if(comodines.cincoComodines.test(data[103]) && parseInt(data[104]) !== 998){
                            return {mensaje:errorRiesgoCardiovascular.resultadoHemoglobina.errorRelacion + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 104]};
                        }
                        if(comodines.sinDato.test(data[103]) && parseInt(data[104]) !== 998){
                            return {mensaje:errorRiesgoCardiovascular.resultadoHemoglobina.errorRelacion2 + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 104]};
                        }
                    }
                }                
            }else{
                if(sexoRegExp.test(data[10])){
                    if(edad[0] >= edadPermitida.edadHemoglogina.edadMinimaMujeres && 
                        edad[0] <= edadPermitida.edadHemoglogina.edadMaximaMujeres && data[14] !== 1){
                            if(parseInt(data[104]) === 0){
                                return {mensaje:errorRiesgoCardiovascular.resultadoHemoglobina.errorEdad + " - consecutivo: "+ consecutivo +
                                 " Documento: " + numeroDocumento, posicion:[consecutivo, 104]};
                            }
                            if(comodines.cincoComodines.test(data[103]) && parseInt(data[104]) !== 998){
                                return {mensaje:errorRiesgoCardiovascular.resultadoHemoglobina.errorRelacion + " - consecutivo: "+ consecutivo +
                                " Documento: " + numeroDocumento, posicion:[consecutivo, 104]};
                            }
                            if(comodines.sinDato.test(data[103]) && parseInt(data[104]) !== 998){
                                return {mensaje:errorRiesgoCardiovascular.resultadoHemoglobina.errorRelacion2 + " - consecutivo: "+ consecutivo +
                                " Documento: " + numeroDocumento, posicion:[consecutivo, 104]};
                            }
                        }else{
                            if(edad[0] >= edadPermitida.edadHemoglogina.edadMinimaGestantes && 
                                edad[0] < edadPermitida.edadHemoglogina.eddMaximaGestantes && data[14] === 1){
                                    if(parseInt(data[104]) === 0){
                                        return {mensaje:errorRiesgoCardiovascular.resultadoHemoglobina.errorEdad + " - consecutivo: "+ consecutivo +
                                        " Documento: " + numeroDocumento, posicion:[consecutivo, 104]};
                                    }
                                    if(comodines.cincoComodines.test(data[103]) && parseInt(data[104]) !== 998){
                                        return {mensaje:errorRiesgoCardiovascular.resultadoHemoglobina.errorRelacion + " - consecutivo: "+ consecutivo +
                                        " Documento: " + numeroDocumento, posicion:[consecutivo, 104]};
                                    }
                                    if(comodines.sinDato.test(data[103]) && parseInt(data[104]) !== 998){
                                        return {mensaje:errorRiesgoCardiovascular.resultadoHemoglobina.errorRelacion2 + " - consecutivo: "+ consecutivo +
                                        " Documento: " + numeroDocumento, posicion:[consecutivo, 104]};
                                    }                                
                            }else{
                                if(comodines.cincoComodines.test(data[103]) && parseInt(data[104]) !== 998){
                                    return {mensaje:errorRiesgoCardiovascular.resultadoHemoglobina.errorRelacion + " - consecutivo: "+ consecutivo +
                                    " Documento: " + numeroDocumento, posicion:[consecutivo, 104]};
                                }
                                if(comodines.sinDato.test(data[103]) && parseInt(data[104]) !== 998){
                                    return {mensaje:errorRiesgoCardiovascular.resultadoHemoglobina.errorRelacion2 + " - consecutivo: "+ consecutivo +
                                    " Documento: " + numeroDocumento, posicion:[consecutivo, 104]};
                                }
                            }
                        }
                }
            }
    }

    validarFechaGlicemiaBasal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] >= edadPermitida.edadHemoglogina.edadMinimaGestantes && 
            edad[0] < edadPermitida.edadHemoglogina.eddMaximaGestantes){
                if(data[14] === 1 && comodines.noAplica.test(data[105])){
                    return {mensaje:errorRiesgoCardiovascular.fechaGlicemiaBasal.errorRelacion3 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo,105]};
                }
            }
            else{
                if(edad[0] >= edadPermitida.edadMinima){
                    if(comodines.noAplica.test(data[105])){
                        return {mensaje:errorRiesgoCardiovascular.fechaGlicemiaBasal.errorEdad + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo,105]};
                    }
                }/*else{
                    if(!comodines.noAplica.test(data[105])){
                        return {mensaje:errorRiesgoCardiovascular.fechaGlicemiaBasal.errorEdad2 + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo,105]};
                    }
                }*/
            }
            
        
    }

    validarFechaTomaCreatinina(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] >= edadPermitida.edadMinima){
            if(comodines.noAplica.test(data[106])){
                return {mensaje:errorRiesgoCardiovascular.fechaTomaCreatinina.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 106]};
            }
        }else{
            /*if(!comodines.noAplica.test(data[106])){
                return errorRiesgoCardiovascular.fechaTomaCreatinina.errorEdad2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
            }*/
        }
    }

    validarResultadoCreatinina(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[106]);
        if(edad[0] >= edadPermitida.edadMinima){
            if(parseFloat(data[107]) === 0){
                return {mensaje:errorRiesgoCardiovascular.resultadoCreatinina.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 107]};
            }
            if(comodines.cincoComodines.test(data[106]) && parseInt(data[107]) !== 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoCreatinina.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 107]};
            }
            if(comodines.sinDato.test(data[106]) && parseInt(data[107]) !== 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoCreatinina.errorRelacion2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 107]};
            }
            if(añoFecha > valorMinimo && parseInt(data[107]) === 998){
                return {mensaje:errorRiesgoCardiovascular.resultadoCreatinina.errorRelacion3 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 107]};
            }
        }else{
            /*if(parseInt(data[107]) !== 0){
                return errorRiesgoCardiovascular.resultadoCreatinina.errorEdad2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
            }*/
        }
    }

    validarFechaTomaHDL(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] >= edadPermitida.edadMinima){
            if(comodines.noAplica.test(data[111])){
                return {mensaje:errorRiesgoCardiovascular.fechaTomaHDL.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 111]};
            }
        }else{
            /*if(!comodines.noAplica.test(data[111])){
                return errorRiesgoCardiovascular.fechaTomaHDL.errorEdad2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
            }*/
        }
    }

    validarClasificacionRiesgoCardiovascular(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] >= edadPermitida.edadMinima){
            if(parseInt(data[114]) === 0){
                return {mensaje:errorRiesgoCardiovascular.clasificacionRiesgoCardiovascular.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo,114]};
            }
        }else{
           /* if(parseInt(data[114]) !== 0){
                return "WARNING: " + errorRiesgoCardiovascular.clasificacionRiesgoCardiovascular.errorEdad2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
            }*/
        }
    }

    validarClasificacionRiesgoMetabolico(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] >= edadPermitida.edadMinima){
            if(parseInt(data[117]) === 0){
                return {mensaje:errorRiesgoCardiovascular.clasificacionRiesgoMetabolico.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 117]};
            }
        }else{
            if(parseInt(data[117]) !== 0){
                return {mensaje:errorRiesgoCardiovascular.clasificacionRiesgoMetabolico.errorEdad2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 117]};
            }
        }
    }

    validarFechaTomaTrigliceridos(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
       if(edad[0] >= edadPermitida.edadMinima){
            if(comodines.noAplica.test(data[118])){
                return {mensaje:errorRiesgoCardiovascular.fechaTomaTrigliceridos.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 118]};
            }
       }else{
           if(!comodines.noAplica.test(data[118]) && parseInt(data[98]) === 0){
            return {mensaje:errorRiesgoCardiovascular.fechaTomaTrigliceridos.errorRelacion2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 118]};
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
}