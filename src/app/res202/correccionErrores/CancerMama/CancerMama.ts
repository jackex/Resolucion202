import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

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

export class CorregirCancerMama{

    corregirDatosCancerMama(data: any, errores: any, fechaSuperiorReporte: any): any{
        return this.corregirCancerMama(data, errores, fechaSuperiorReporte);
    }

    corregirCancerMama(data: any, errores: any, fechaSuperiorReporte: any): any{
         data = data.split(/\r\n|\n/);
 
         for (let index = 0; index < errores.length; index++) {
             if(errores[index].datoCancerMama.errores[0].length > 0){
                 for(let i = 0; i < errores[index].datoCancerMama.errores[0].length; i++){
                     let fila = parseInt(errores[index].datoCancerMama.errores[0][i].posicion[0]);
                     //let columna = parseInt(errores[index].datoCancerMama.errores[0][i].posicion[1]);
                         let temp = data[fila].split('|');
                             this.corregirFechaTomaMamografia(temp, fechaSuperiorReporte);
                            this.corregirResultadoMamografia(temp, fechaSuperiorReporte);
                            this.corregirFechaTomaBiopsiaMama(temp, fechaSuperiorReporte);
                            this.corregirFechaResultadoBiopsiaMama(temp, fechaSuperiorReporte);
                            this.corregirResultadoBiopsiaMama(temp, fechaSuperiorReporte);
                            data[fila] = temp.join('|');
                }            
            }
        }
         return data;            
    }

    corregirFechaTomaMamografia(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        const fecha = this.obtenerFecha(data[96]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[96])){data[96] = '1845-01-01';}
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(edad >= edadPermitida.edadMinima && edad < edadPermitida.edadMaxima){
                        if(comodines.noAplica.test(data[96]) && parseInt(data[97]) > 0){
                            data[96] = '1800-01-01';
                        }
                        if(fecha > valorMinimo &&  parseInt(data[97]) === 21){
                            data[96] = '1800-01-01';
                        }
                        /*if(comodines.cincoComodines.test(data[96]) && parseInt(data[97]) !== 21 ||
                        comodines.sinDato.test(data[96]) && parseInt(data[97]) !== 21){
                            return errorCancerMama.fechaTomaMamografia.errorRelacion3+ " - consecutivo: "+ consecutivo +
                            " Documento: " + numeroDocumento;
                        }*/
                }else{
                    if(comodines.noAplica.test(data[96])){
                        data[96] = '1800-01-01';
                    }
                    if(fecha > valorMinimo &&  parseInt(data[97]) === 21){
                        data[96] = '1800-01-01';
                    }
                    /*if(comodines.cincoComodines.test(data[96]) && parseInt(data[97]) !== 21 ||
                        comodines.sinDato.test(data[96]) && parseInt(data[97]) !== 21){
                        return errorCancerMama.fechaTomaMamografia.errorRelacion3+ " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento;
                    }*/
                }
            }else{
                if(!comodines.noAplica.test(data[96])){
                    data[96] = '1845-01-01';
                }
            }
        }
    }

    corregirResultadoMamografia(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        let añoFecha = this.obtenerFecha(data[96]);
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[97]) > 0){data[97] = 0;}
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(edad >= edadPermitida.edadMinima && edad < edadPermitida.edadMaxima){
                    /*if(añoFecha > valorMinimo && parseInt(data[97]) === 21){
                        return errorCancerMama.resultadoMamografia.errorRelacion + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento;
                    }*/
                    if(parseInt(data[97]) > 0 && parseInt(data[97]) <= 7 && añoFecha < valorMinimo){
                        if(comodines.cincoComodines.test(data[96]) || comodines.sinDato.test(data[96])){
                            data[97] = 21;
                        }
                    }
                }else{
                    if(parseInt(data[97]) === 0){data[97] = 21;}
                    if(parseInt(data[97]) > 0 && parseInt(data[97]) <= 7 && añoFecha < valorMinimo){
                        if(comodines.cincoComodines.test(data[96]) || comodines.sinDato.test(data[96])){
                            data[97] = 21;
                        }
                    }
                }
            }else{
                if(parseInt(data[97]) > 0){data[97] = 0;}
            }
            
        }
    }

    corregirFechaTomaBiopsiaMama(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        const añoFecha100 = this.obtenerFecha(data[100]);
        const añoFecha = this.obtenerFecha(data[99]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[99])){data[99] = '1845-01-01';}            
        }else{
            if(edad >= edadPermitida.edadMinima){
                /*if(comodines.noAplica.test(data[99]) && añoFecha > valorMinimo ||
                comodines.sinDato.test(data[99]) && añoFecha > valorMinimo ||
                comodines.cincoComodines.test(data[99]) && añoFecha > valorMinimo){
                    return errorCancerMama.fechaTomaBiopsia.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento;
                }*/
                if(añoFecha > valorMinimo && añoFecha100 > valorMinimo){
                    if(!this.validarFechaMenor(data[99], data[100])){
                        data[99] = '1800-01-01';
                    }
                }
            }else{
                if(!comodines.noAplica.test(data[99])){
                    data[99] = '1845-01-01';
                }                
            }
        }
    }

    corregirFechaResultadoBiopsiaMama(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        const añoFecha = this.obtenerFecha(data[100]);
        const añoFecha99 = this.obtenerFecha(data[99]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[100])){data[100] = '1845-01-01';}
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(comodines.noAplica.test(data[99]) && comodines.sinDato.test(data[100])){
                    data[100] = '1845-01-01';
                }
                if(comodines.sinDato.test(data[100]) && comodines.noAplica.test(data[99])){
                    data[100] = '1800-01-01';
                }
                if(añoFecha99 > valorMinimo && añoFecha < valorMinimo){
                    data[100] = '1800-01-01';
                }
                if(comodines.cincoComodines.test(data[99]) && añoFecha > valorMinimo){
                    data[100] = '1845-01-01';
                }
            }else{
                if(!comodines.noAplica.test(data[100])){data[100] = '1845-01-01';}
            }
        }
    }

    corregirResultadoBiopsiaMama(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        const añoFecha = this.obtenerFecha(data[100]);
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[101]) > 0){data[101] = 0;}            
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(añoFecha > valorMinimo && parseInt(data[101]) === 0 ||
                    añoFecha > valorMinimo && parseInt(data[101]) === 21){
                        data[101] = 21;
                    }
                if(comodines.noAplica.test(data[100]) && parseInt(data[101]) > 0){
                    data[101] = 0;
                }
                if(comodines.sinDato.test(data[100]) && parseInt(data[101]) !== 21){
                    data[101] = 21;
                }
                
            }else{
                if(parseInt(data[101]) > 0){data[101] = 0;}
            }
        }
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