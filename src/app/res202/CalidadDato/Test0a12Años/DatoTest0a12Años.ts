import { errorTest0a12Años } from "./ErrorDato0a12Años";

const valorMinimo = 1900;

const edadPermitida = {
    edadMaxima: 13
};

const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};

export class DatoTest0a12Años{

    validarTest0a12Años(data: any, edad: any, consecutivo: any, numeroDocumento: any, arrayTest0a12Años: Array<any>){
        const RTVALE = this.validarResultadoTamizajeVALE(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RTVALE)){arrayTest0a12Años.push(RTVALE);}
        const FTVALE = this.validarFechaTamizajeVALE(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FTVALE)){arrayTest0a12Años.push(FTVALE);}
    }

    validarResultadoTamizajeVALE(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[63]);
        if(edad < edadPermitida.edadMaxima){
            if(parseInt(data[40]) === 0){
                return {mensaje:errorTest0a12Años.resultadoTamizajeVALE.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 40]};
            }
            if(comodines.sinDato.test(data[63]) && parseInt(data[40]) !== 21){
                return {mensaje:errorTest0a12Años.resultadoTamizajeVALE.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 40]};
            }
            if(comodines.cincoComodines.test(data[63]) && parseInt(data[40]) !== 21){
                return {mensaje:errorTest0a12Años.resultadoTamizajeVALE.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 40]};
            }
            if(añoFecha > valorMinimo && parseInt(data[40]) === 21){
                return {mensaje:errorTest0a12Años.resultadoTamizajeVALE.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 40]};
            }
        }else{
            if(parseInt(data[40]) !== 0){
                return errorTest0a12Años.resultadoTamizajeVALE.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
            }
        }
    }

    validarFechaTamizajeVALE(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad < edadPermitida.edadMaxima){
            if(comodines.noAplica.test(data[63])){
                return {mensaje:errorTest0a12Años.resultadoTamizajeVALE.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,63]};
            }
        }else{
            if(!comodines.noAplica.test(data[63])){
                return {mensaje:errorTest0a12Años.resultadoTamizajeVALE.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,63]};
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