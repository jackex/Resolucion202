import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

const valorMinimo = 1900;

const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};

export class CorregirTuberculosis{


    corregirDatoTuberculosis(data: any, errores: any, fechaSuperiorReporte: any): any{
            return this.corregirTuberculosis(data, errores, fechaSuperiorReporte);
    }

    corregirTuberculosis(data: any, errores: any, fechaSuperiorReporte: any): any{
        data = data.split(/\r\n|\n/);
    
        for (let index = 0; index < errores.length; index++) {
            if(errores[index].datoTuberculosis.errores[0].length > 0){
                for(let i = 0; i < errores[index].datoTuberculosis.errores[0].length; i++){
                    let fila = parseInt(errores[index].datoTuberculosis.errores[0][i].posicion[0]);
                    let temp = data[fila].split('|');
                    CalcularEdad.prototype.calcularEdad(temp[9], fechaSuperiorReporte);
                    const edad = CalcularEdad.prototype.EDAD;
                    this.corregirSintomaticoRespiratorio(temp);
                    this.corregirFechaTomaBaciloscopiaDiagnostico(temp);
                    this.corregirResultadoBasiloscipiaDiagnostico(temp);
                    data[fila] = temp.join('|');
                }
           }
       }
        return data;
    }

    corregirSintomaticoRespiratorio(data: any){
        const añoFecha = this.obtenerFecha(data[112]);
        if(parseInt(data[113]) !== 4 && añoFecha > valorMinimo && parseInt(data[18]) === 0 ||
            parseInt(data[113]) !== 4 && comodines.cincoComodines.test(data[112]) && parseInt(data[18]) === 0){
                data[18] = 21;
        }
        if(parseInt(data[113]) === 4 && comodines.noAplica.test(data[112]) && parseInt(data[18]) !== 2){
            data[18] = 2;
        }
    }

    corregirFechaTomaBaciloscopiaDiagnostico(data: any){
        //const añoFecha = this.obtenerFecha(data[112]);
        if(comodines.cincoComodines.test(data[112]) && parseInt(data[18]) !== 21){
            data[18] = 21;
        }
        if(comodines.sinDato.test(data[112]) && parseInt(data[18]) !== 21){
            data[18] = 21;
        }
        /*if(añoFecha > valorMinimo && parseInt(data[18]) !== 21){
            return errorTuberculosis.fechaTomaBaciloscopiaDiagnostico.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
        }*/
    }

    corregirResultadoBasiloscipiaDiagnostico(data: any){
        const añoFecha = this.obtenerFecha(data[112]);
        if(comodines.cincoComodines.test(data[112]) && parseInt(data[113]) !== 21){
            data[113] = 21;
        }
        if(comodines.sinDato.test(data[112]) && parseInt(data[113]) !== 21){
            data[113] = 21;
        }
        /*if(añoFecha > valorMinimo && parseInt(data[113]) === 21){
            return errorTuberculosis.resultadoBasiloscipiaDiagnostico.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
        }*/
        /*if(añoFecha > valorMinimo && parseInt(data[113]) === 4){
            data[113] = 21;
        }*/
        /*if(!comodines.noAplica.test(data[112]) && parseInt(data[113]) === 4){
            return errorTuberculosis.resultadoBasiloscipiaDiagnostico.errorRelacion4 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
        }*/
        if(comodines.noAplica.test(data[112]) && parseInt(data[113]) !== 4){
            data[113] = 4;
        }        
    }

    obtenerFecha(data: any): any{
        let fecha = data;
        fecha = fecha.split('-');
        return fecha[0];
    }
    
    
}