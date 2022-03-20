import { erroresDatoAnticoncepcion } from "./ErroresDatoAnticoncepcion";

const valorMinimo = 1900;
const edadPermitida = {
    edadMinima: 10,
    edadMaxima: 60
};

const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    seisComodines: /^(1800\-01\-01$)|^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};
export class DatoAnticoncepion{

    

    validarDatosAnticoncepion(data: any, edad: any, consecutivo: any, numeroDocumento: any, arrayAnticoncepcion: Array<any>){
        const FAAC = this.validarFechaAtencionAsesoriaAnticoncepcion(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FAAC)){arrayAnticoncepcion.push(FAAC);}
        const SMA = this.validarSuministroMetodoAnticonceptivo(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(SMA)){arrayAnticoncepcion.push(SMA);}
        const FSMA = this.validarFechaSuministroMetodoAnticonceptivo(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FSMA)){arrayAnticoncepcion.push(FSMA);}
        
    }

    validarFechaAtencionAsesoriaAnticoncepcion(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añofecha = this.obtenerFecha(data[53]);
        if(edad < edadPermitida.edadMinima){
            if(parseInt(añofecha) >= valorMinimo || comodines.seisComodines.test(data[53]) || comodines.sinDato.test(data[53])){
                return {mensaje: erroresDatoAnticoncepcion.FechaAtencionAsesoriaAnticoncepcion.invalidData + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 53]};
            }
        }else{
            if(parseInt(añofecha) < valorMinimo){
                if(comodines.noAplica.test(data[53])){
                    return {mensaje: erroresDatoAnticoncepcion.FechaAtencionAsesoriaAnticoncepcion.noAplica + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 53]};
                }
            }
        }
    }

    validarSuministroMetodoAnticonceptivo(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad < edadPermitida.edadMinima || edad >= edadPermitida.edadMaxima){    
            if(parseInt(data[54]) > 0){
                return erroresDatoAnticoncepcion.suministroMetodoAnticonceptivo.invalidData + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
            }else{
                if(parseInt(data[54]) === 0 && !comodines.noAplica.test(data[55])){
                    return {mensaje: erroresDatoAnticoncepcion.suministroMetodoAnticonceptivo.noAplicaRelacionada + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 54]};
                }
            }
        }else{
            if(parseInt(data[54]) === 0){
                return {mensaje: erroresDatoAnticoncepcion.suministroMetodoAnticonceptivo.noAplica + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 54]};
            }
        }
    }

    validarFechaSuministroMetodoAnticonceptivo(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[55]);
        if(edad < edadPermitida.edadMinima || edad >= edadPermitida.edadMaxima){
            if(parseInt(añoFecha) >= valorMinimo || comodines.seisComodines.test(data[55]) || comodines.sinDato.test(data[55])){
                return {mensaje: erroresDatoAnticoncepcion.fechaSuministroMetodoAnticonceptivo.noAplica + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 55]};
            }
        }else{
            if(parseInt(añoFecha) < valorMinimo){
                if(comodines.noAplica.test(data[55])){
                    return {mensaje: erroresDatoAnticoncepcion.fechaSuministroMetodoAnticonceptivo.noAplica + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 55]};
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