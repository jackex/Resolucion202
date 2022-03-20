import { errorTuberculosis } from "./ErrorTuberculosis";

const valorMinimo = 1900;

const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};

export class DatoTuberculosis{

    validarTuberculosis(data: any, consecutivo: any, numeroDocumento: any, arrayTuberculosis: Array<any>){
        const SINTRESP = this.validarSintomaticoRespiratorio(data, consecutivo, numeroDocumento);
        if(this.validarResultado(SINTRESP)){arrayTuberculosis.push(SINTRESP);}
        const FTOMBASIL = this.validarFechaTomaBaciloscopiaDiagnostico(data, consecutivo, numeroDocumento);
        if(this.validarResultado(FTOMBASIL)){arrayTuberculosis.push(FTOMBASIL);}
        const RESBASIL = this.validarResultadoBasiloscipiaDiagnostico(data, consecutivo, numeroDocumento);
        if(this.validarResultado(RESBASIL)){arrayTuberculosis.push(RESBASIL);}
    }

    validarSintomaticoRespiratorio(data: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[112]);
        if(parseInt(data[113]) !== 4 && añoFecha > valorMinimo && parseInt(data[18]) === 0 ||
            parseInt(data[113]) !== 4 && comodines.cincoComodines.test(data[112]) && parseInt(data[18]) === 0){
                return {mensaje:errorTuberculosis.sintomaticoRespiratorio.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,18]};
        }
        if(parseInt(data[113]) === 4 && comodines.noAplica.test(data[112]) && parseInt(data[18]) !== 2){
            return {mensaje:errorTuberculosis.sintomaticoRespiratorio.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,18]};
        }
    }

    validarFechaTomaBaciloscopiaDiagnostico(data: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[112]);
        if(comodines.cincoComodines.test(data[112]) && parseInt(data[18]) === 0){
            return {mensaje:errorTuberculosis.fechaTomaBaciloscopiaDiagnostico.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,112]};
        }
        if(comodines.sinDato.test(data[112]) && parseInt(data[18]) === 0){
            return {mensaje:errorTuberculosis.fechaTomaBaciloscopiaDiagnostico.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,112]};
        }
        if(añoFecha > valorMinimo && parseInt(data[18]) === 0){
            return {mensaje:errorTuberculosis.fechaTomaBaciloscopiaDiagnostico.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,112]};
        }
    }

    validarResultadoBasiloscipiaDiagnostico(data: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[112]);
        if(comodines.cincoComodines.test(data[112]) && parseInt(data[113]) !== 21){
            return {mensaje:errorTuberculosis.resultadoBasiloscipiaDiagnostico.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,113]};
        }
        if(comodines.sinDato.test(data[112]) && parseInt(data[113]) !== 21){
            return {mensaje:errorTuberculosis.resultadoBasiloscipiaDiagnostico.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,113]};
        }
        if(añoFecha > valorMinimo && parseInt(data[113]) === 21){
            return {mensaje:errorTuberculosis.resultadoBasiloscipiaDiagnostico.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,113]};
        }
        if(añoFecha > valorMinimo && parseInt(data[113]) === 4){
            return {mensaje:errorTuberculosis.resultadoBasiloscipiaDiagnostico.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,113]};
        }
        if(!comodines.noAplica.test(data[112]) && parseInt(data[113]) === 4){
            return {mensaje:errorTuberculosis.resultadoBasiloscipiaDiagnostico.errorRelacion4 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,113]};
        }
        if(comodines.noAplica.test(data[112]) && parseInt(data[113]) !== 4){
            return {mensaje:errorTuberculosis.resultadoBasiloscipiaDiagnostico.errorRelacion5 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo,113]};
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