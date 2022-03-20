import { errorCancerMama } from "./ErrorCancerMama";

const valorMinimo = 1900;
const edadPermitida = {
    edadMinima: 29, //estaba en 35 años
    edadMaxima: 50
}

const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};
const sexoRegExp = /\F/;

export class DatoCancerMama{

    validarCancerMama(data: any, edad: any, consecutivo: any, numeroDocumento: any, arrayCancerMama: Array<any>){
        const FTM = this.validarFechaTomaMamografia(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FTM)){arrayCancerMama.push(FTM);}
        const RM = this.validarResultadoMamografia(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RM)){arrayCancerMama.push(RM);}
        const FTBM = this.validarFechaTomaBiopsiaMama(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FTBM)){arrayCancerMama.push(FTBM);}
        const FRBM = this.validarFechaResultadoBiopsiaMama(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FRBM)){arrayCancerMama.push(FRBM);}
        const RBM = this.validarResultadoBiopsiaMama(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RBM)){arrayCancerMama.push(RBM);}
    }

    validarFechaTomaMamografia(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[96])){
                return errorCancerMama.fechaTomaMamografia.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento; 
            }
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(edad >= edadPermitida.edadMinima && edad < edadPermitida.edadMaxima){
                        if(comodines.noAplica.test(data[96]) && parseInt(data[97]) > 0){
                            return errorCancerMama.fechaTomaMamografia.errorRelacion + " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento;
                        }
                        if(comodines.cincoComodines.test(data[96]) && parseInt(data[97]) !== 21 ||
                        comodines.sinDato.test(data[96]) && parseInt(data[97]) !== 21){
                            return errorCancerMama.fechaTomaMamografia.errorRelacion3+ " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento;
                        }   
                }else{
                    if(comodines.noAplica.test(data[96])){
                        return errorCancerMama.fechaTomaMamografia.errorEdad2+ " - consecutivo: "+ consecutivo +
                                " Documento: " + numeroDocumento;
                    }
                    if(comodines.cincoComodines.test(data[96]) && parseInt(data[97]) !== 21 ||
                        comodines.sinDato.test(data[96]) && parseInt(data[97]) !== 21){
                        return errorCancerMama.fechaTomaMamografia.errorRelacion3+ " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento;
                    } 
                }
            }else{
                if(!comodines.noAplica.test(data[96])){
                    return errorCancerMama.fechaTomaMamografia.errorEdad+ " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento;
                }
            }
        }
    }

    validarResultadoMamografia(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[96]);
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[97]) > 0){
                return errorCancerMama.resultadoMamografia.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
            }
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(edad >= edadPermitida.edadMinima && edad < edadPermitida.edadMaxima){
                    if(añoFecha > valorMinimo && parseInt(data[97]) === 21){
                        return errorCancerMama.resultadoMamografia.errorRelacion + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento;
                    }
                    if(parseInt(data[97]) > 0 && parseInt(data[97]) <= 7 && añoFecha < valorMinimo){
                        return errorCancerMama.resultadoMamografia.errorRelacion2 + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento;
                    }
                }else{
                    if(parseInt(data[97]) === 0){
                        return errorCancerMama.resultadoMamografia.errorRelacion3 + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento;
                    }
                    if(parseInt(data[97]) > 0 && parseInt(data[97]) <= 7 && añoFecha < valorMinimo){
                        return errorCancerMama.resultadoMamografia.errorRelacion2 + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento;
                    }
                }
            }else{
                if(parseInt(data[97]) > 0){
                    return errorCancerMama.resultadoMamografia.errorEdad + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento;
                }
            }
            
        }
    }

    validarFechaTomaBiopsiaMama(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha100 = this.obtenerFecha(data[100]);
        const añoFecha = this.obtenerFecha(data[99]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[99])){
                return errorCancerMama.fechaTomaBiopsia.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
            }            
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(comodines.noAplica.test(data[99]) && añoFecha > valorMinimo ||
                comodines.sinDato.test(data[99]) && añoFecha > valorMinimo ||
                comodines.cincoComodines.test(data[99]) && añoFecha > valorMinimo){
                    return errorCancerMama.fechaTomaBiopsia.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
                }
                if(añoFecha > valorMinimo && añoFecha100 > valorMinimo){
                    if(!this.validarFechaMenor(data[99], data[100])){
                        return errorCancerMama.fechaTomaBiopsia.errorRelacion2 + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento;
                    }
                }
            }else{
                if(!comodines.noAplica.test(data[99])){
                    return errorCancerMama.fechaTomaBiopsia.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
                }                
            }
        }
    }

    validarFechaResultadoBiopsiaMama(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[100]);
        const añoFecha99 = this.obtenerFecha(data[99]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[100])){
                return errorCancerMama.fechaResultadoBiopsiaMama.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
            }
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(comodines.noAplica.test(data[99]) && comodines.sinDato.test(data[100])){
                    return errorCancerMama.fechaResultadoBiopsiaMama.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
                }
                if(comodines.sinDato.test(data[100]) && comodines.noAplica.test(data[99])){
                    return errorCancerMama.fechaResultadoBiopsiaMama.errorRelacion2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
                }
                if(añoFecha99 > valorMinimo && añoFecha < valorMinimo){
                    return errorCancerMama.fechaResultadoBiopsiaMama.errorRelacion3 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
                }
                if(comodines.cincoComodines.test(data[99]) && añoFecha > valorMinimo){
                    return errorCancerMama.fechaResultadoBiopsiaMama.errorRelacion4 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
                }
            }else{
                if(!comodines.noAplica.test(data[100])){
                    return errorCancerMama.fechaResultadoBiopsiaMama.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
                }
            }
        }
    }

    validarResultadoBiopsiaMama(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[100]);
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[101]) > 0){
                return errorCancerMama.resultadoBiopsiaMama.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
            }            
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(añoFecha > valorMinimo && parseInt(data[101]) === 0 ||
                    añoFecha > valorMinimo && parseInt(data[101]) === 21){
                        return errorCancerMama.resultadoBiopsiaMama.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
                    }
                if(comodines.noAplica.test(data[100]) && parseInt(data[101]) > 0){
                    return errorCancerMama.resultadoBiopsiaMama.errorRelacion2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
                }
                if(comodines.sinDato.test(data[100]) && parseInt(data[101]) !== 21){
                    return errorCancerMama.resultadoBiopsiaMama.errorRelacion2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
                }
                
            }else{
                if(parseInt(data[101]) > 0){
                    return errorCancerMama.resultadoBiopsiaMama.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
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

    obtenerFecha2(data: any): any{
        let fecha = data;
        fecha = fecha.split('-');
        return fecha;
    }

    validarFechaMenor(fechaMenor: any, fechaMayor: any): boolean{
        const arrayFechaVariable = this.obtenerFecha2(fechaMenor);
        const añoFechaMenor = parseInt(arrayFechaVariable[0]);
        const mesFechaMenor = parseInt(arrayFechaVariable[1]);
        const diaFechaMenor = parseInt(arrayFechaVariable[2]);

        const arrayFechaMayor = this.obtenerFecha2(fechaMayor);
        const añoFechaMayor = parseInt(arrayFechaMayor[0]);
        const mesFechaMayor = parseInt(arrayFechaMayor[1]);
        const diaFechaMayor = parseInt(arrayFechaMayor[2]);

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