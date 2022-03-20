import { errorCancerProstata } from "./ErrorCancerProstata";

const valorMinimo = 1900;
const edadPermitida = {
    edadMinima: 40,
    edadMaxima: 49
}

const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};
const sexoRegExp = /\M/;

export class DatoCancerProstata{

    validarCancerProstata(data: any, edad: any, consecutivo: any, numeroDocumento: any, arrayCancerProstata: Array<any>){
        const RTR = this.validarResultadoTactoRectal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RTR)){ arrayCancerProstata.push(RTR);}
        const FTR = this.validarFechaDelTactoRectal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FTR)){arrayCancerProstata.push(FTR);}
        const FTPSA = this.validarFechaTomaPSA(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FTPSA)){arrayCancerProstata.push(FTPSA);}
        const RPSA = this.validarResultadoPSA(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RPSA)){arrayCancerProstata.push(RPSA);}
    }

    validarResultadoTactoRectal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[64]);
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[22]) > 0){
                return {mensaje: errorCancerProstata.resultadoCancerProstata.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 22]};
            }                
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(edad >= edadPermitida.edadMinima && edad <= edadPermitida.edadMaxima){
                        if(añoFecha < valorMinimo){
                            if(parseInt(data[22]) === 21 && !comodines.sinDato.test(data[64]) &&
                                parseInt(data[22]) === 21 && !comodines.cincoComodines.test(data[64])){
                                    return {mensaje: errorCancerProstata.resultadoCancerProstata.errorRelacion + " - consecutivo: "+ consecutivo +
                                    " Documento: " + numeroDocumento, posicion:[consecutivo, 22]};
                            } 
                        }                                    
                        if(parseInt(data[22]) === 21 && añoFecha > valorMinimo){
                            return {mensaje: errorCancerProstata.resultadoCancerProstata.errorRelacion + " - consecutivo: "+ consecutivo +
                                " Documento: " + numeroDocumento, posicion:[consecutivo, 22]};
                        }
                }else{
                    if(parseInt(data[22]) === 0){
                        return  {mensaje: errorCancerProstata.resultadoCancerProstata.errorEdad2 + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 22]};
                    }
                    if(parseInt(data[22]) === 21 && !comodines.sinDato.test(data[64]) ||
                            parseInt(data[22]) === 21 && comodines.noAplica.test(data[64])){
                                return {mensaje: errorCancerProstata.resultadoCancerProstata.errorRelacion + " - consecutivo: "+ consecutivo +
                                " Documento: " + numeroDocumento, posicion:[consecutivo, 22]};
                    }
                    if(parseInt(data[22]) === 21 && añoFecha > valorMinimo){
                        return {mensaje: errorCancerProstata.resultadoCancerProstata.errorRelacion + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 22]};
                    }
                }
                
            }else{
                if(parseInt(data[22]) > 0){
                    return {mensaje: errorCancerProstata.resultadoCancerProstata.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 22]};
                }
            }
        }
    }

    validarFechaDelTactoRectal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[64]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[64])){
                return  {mensaje: errorCancerProstata.fechaDelTactoRectal.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 64]};
            }
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(edad >= edadPermitida.edadMinima && edad <= edadPermitida.edadMaxima){
                    if(parseInt(data[22]) === 0 && añoFecha < valorMinimo){
                        if(parseInt(data[22]) === 0 && !comodines.noAplica.test(data[64])){
                                return {mensaje: errorCancerProstata.fechaDelTactoRectal.errorRelacion2 + " - consecutivo: "+ consecutivo +
                                " Documento: " + numeroDocumento, posicion:[consecutivo, 64]};
                        }
                    }
                    if(parseInt(data[22]) === 4 || parseInt(data[22]) === 5 && añoFecha < valorMinimo){
                        if(comodines.noAplica.test(data[64]) || comodines.sinDato.test(data[64]) ||comodines.cincoComodines.test(data[64])){
                            return {mensaje: errorCancerProstata.fechaDelTactoRectal.errorRelacion + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 64]};
                        }
                    }
                }else{
                    if(comodines.noAplica.test(data[64])){
                        return {mensaje: errorCancerProstata.fechaDelTactoRectal.errorEdad2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 64]};
                    }
                    if(parseInt(data[22]) === 4 || parseInt(data[22]) === 5 && añoFecha < valorMinimo){
                        if(comodines.noAplica.test(data[64]) || comodines.sinDato.test(data[64]) ||comodines.cincoComodines.test(data[64])){
                            return {mensaje: errorCancerProstata.fechaDelTactoRectal.errorRelacion + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 64]};
                        }
                    }
                } 
            }else{
                if(!comodines.noAplica.test(data[64])){
                    return {mensaje: errorCancerProstata.fechaDelTactoRectal.errorEdad2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 64]};
                }
            }
        }
    }

    validarFechaTomaPSA(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[73]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[73])){
                return {mensaje: errorCancerProstata.fechaTomaPSA.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 73]};
            }            
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(edad >= edadPermitida.edadMinima && edad <= edadPermitida.edadMaxima){
                    if(parseInt(data[109]) > 0 && parseInt(data[109]) < 998 && añoFecha < valorMinimo){
                        if(comodines.noAplica.test(data[73]) || comodines.sinDato.test(data[73]) ||comodines.cincoComodines.test(data[73])){
                            return {mensaje: errorCancerProstata.fechaTomaPSA.errorRelacion + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 73]};
                        }
                    }
                }else{
                    if(comodines.noAplica.test(data[73])){
                        return {mensaje: errorCancerProstata.fechaTomaPSA.errorEdad2 + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 73]};
                    }
                    if(parseInt(data[109]) > 0 && parseInt(data[109]) < 998 && añoFecha < valorMinimo){
                        if(comodines.noAplica.test(data[73]) || comodines.sinDato.test(data[73]) || comodines.cincoComodines.test(data[73])){
                            return {mensaje: errorCancerProstata.fechaTomaPSA.errorRelacion + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 73]};
                        }
                    }
                }
            }else{
                if(!comodines.noAplica.test(data[73])){
                    return {mensaje: errorCancerProstata.fechaTomaPSA.errorEdad2 + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 73]};
                }
            }
        }
    }

    validarResultadoPSA(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[73]);
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[109]) > 0){
                return {mensaje: errorCancerProstata.resultadoPSA.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 109]};   
            }            
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(edad >= edadPermitida.edadMinima && edad <= edadPermitida.edadMaxima){
                    if(parseInt(data[109]) === 0 && añoFecha < valorMinimo){
                        if(parseInt(data[109]) === 0 && !comodines.noAplica.test(data[73])){
                            return {mensaje: errorCancerProstata.resultadoPSA.errorRelacion + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 109]};
                        }                        
                    }
                }else{
                    if(parseInt(data[109]) === 0){
                        return {mensaje: errorCancerProstata.resultadoPSA.errorRelacion2 + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 109]};
                    }
                    if(parseInt(data[109]) > 0 && parseInt(data[109]) < 998 && añoFecha < valorMinimo){
                        if(comodines.sinDato.test(data[73])){
                            return {mensaje: errorCancerProstata.resultadoPSA.errorRelacion3 + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento, posicion:[consecutivo, 109]};
                        }
                    }
                }                
            }else{
                if(parseInt(data[109]) > 0){
                    return {mensaje: errorCancerProstata.resultadoPSA.errorRelacion2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 109]};
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

}