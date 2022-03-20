import { erroresCancerColon } from "./ErrorDatoCancerColon";

const valorMinimo = 1900;

const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};

const edadPermitida = {
    edadMinima: 50,
    edadMaxima: 75
}

export class DatoCancerColon{


    validarCancerColon(data: any, edad: any, consecutivo: any, numeroDocumento: any, arrayCancerColon: Array<any>){
        const RPSOCF = this.validarResultadoPruebaSangreOcultaMateriaFecal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RPSOCF)){arrayCancerColon.push(RPSOCF);}
        const RCT = this.validarResultadoColonoscopiaTamizaje(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RCT)){arrayCancerColon.push(RCT);}
        const FRC = this.validarFechaRealizacionColonoscopia(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FRC)){arrayCancerColon.push(FRC);}
        const FPSOMF = this.validarFechaPruebaSangreOcultaMateriaFecal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FPSOMF)){arrayCancerColon.push(FPSOMF);}
    }

    validarResultadoPruebaSangreOcultaMateriaFecal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[67]);
        if(edad > edadPermitida.edadMaxima){
            if(parseInt(data[24]) !== 0){
                return {mensaje: erroresCancerColon.resultadoPruebaSangreOcultaMateriaFecal.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 24]};
            }
        }else{
            if(edad >= edadPermitida.edadMaxima && edad <= edadPermitida.edadMaxima){
                if(parseInt(data[24]) === 0){
                    return {mensaje: erroresCancerColon.resultadoPruebaSangreOcultaMateriaFecal.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 24]};
                }

                if(parseInt(data[24]) === 0 && añoFecha > valorMinimo || parseInt(data[24]) === 21 && añoFecha > valorMinimo){
                    return {mensaje: erroresCancerColon.resultadoPruebaSangreOcultaMateriaFecal.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 24]};
                }

                if(parseInt(data[24]) > 0 && parseInt(data[24]) < 21 && añoFecha < valorMinimo){
                    return {mensaje: erroresCancerColon.resultadoPruebaSangreOcultaMateriaFecal.errorRelacion2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 24]};
                }

            }
            
            if(parseInt(data[24]) === 0 && añoFecha > valorMinimo || parseInt(data[24]) === 21 && añoFecha > valorMinimo){
                return {mensaje: erroresCancerColon.resultadoPruebaSangreOcultaMateriaFecal.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 24]};
            }

            if(parseInt(data[24]) > 0 && parseInt(data[24]) < 21 && añoFecha < valorMinimo){
                return {mensaje: erroresCancerColon.resultadoPruebaSangreOcultaMateriaFecal.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 24]};
            }
            
        }
        
    }

    validarResultadoColonoscopiaTamizaje(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[66]);
        if(edad > edadPermitida.edadMaxima){
            if(parseInt(data[36]) !== 0){
                return {mensaje: erroresCancerColon.resultadoColonoscopiaTamizaje.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 36]};
            }
        }else{
            if(edad >= edadPermitida.edadMaxima && edad <= edadPermitida.edadMaxima){

                if(parseInt(data[36]) === 0){
                    return {mensaje: erroresCancerColon.resultadoColonoscopiaTamizaje.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 36]};
                }

                if(parseInt(data[36]) === 0 && añoFecha > valorMinimo || parseInt(data[36]) === 21 && añoFecha > valorMinimo){
                    return {mensaje: erroresCancerColon.resultadoColonoscopiaTamizaje.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 36]};
                }
            }

            if(parseInt(data[36]) === 0 && añoFecha > valorMinimo || parseInt(data[36]) === 21 && añoFecha > valorMinimo){
                return {mensaje: erroresCancerColon.resultadoColonoscopiaTamizaje.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 36]};
            }
        }
    }

    validarFechaRealizacionColonoscopia(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad > edadPermitida.edadMaxima){
            if(!comodines.noAplica.test(data[66])){
                return {mensaje: erroresCancerColon.fechaRealizacionColonoscopia.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 66]};
            }            
        }else{
            if(edad >= edadPermitida.edadMaxima && edad <= edadPermitida.edadMaxima){
                if(comodines.noAplica.test(data[66])){
                    return {mensaje: erroresCancerColon.fechaRealizacionColonoscopia.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 66]};
                }
            }
        }
    }

    validarFechaPruebaSangreOcultaMateriaFecal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad > edadPermitida.edadMaxima){
            if(!comodines.noAplica.test(data[67])){
                return {mensaje: erroresCancerColon.fechaPruebaSangreOcultaMateriaFecal.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 67]};
            }            
        }else{
            if(edad >= edadPermitida.edadMaxima && edad <= edadPermitida.edadMaxima){
                if(comodines.noAplica.test(data[67])){
                    return {mensaje: erroresCancerColon.fechaPruebaSangreOcultaMateriaFecal.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 67]};
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