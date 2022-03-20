import { CalcularEdad } from '../../CalidadDato/CalcularEdad';
const valorMinimo = 1900;

const edadPermitida = {
    edadMaxima: 13
};

const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};
export class CorregirTest0a12Anios{

    corregirDatoTest0a12Anios(data: any, errores: any, fechaSuperiorReporte: any): any{
        return this.corregirTest0a12Anios(data, errores, fechaSuperiorReporte);
    }

    corregirTest0a12Anios(data: any, errores: any, fechaSuperiorReporte: any): any{
        data = data.split(/\r\n|\n/);
    
        for (let index = 0; index < errores.length; index++) {
            if(errores[index].datoRiesgoCardiovascular.errores[0].length > 0){
                for(let i = 0; i < errores[index].datoRiesgoCardiovascular.errores[0].length; i++){
                    let fila = parseInt(errores[index].datoRiesgoCardiovascular.errores[0][i].posicion[0]);
                    let temp = data[fila].split('|');
                    CalcularEdad.prototype.calcularEdad(temp[9], fechaSuperiorReporte);
                    const edad = CalcularEdad.prototype.EDAD;
                    this.corregirResultadoTamizajeVALE(temp, edad);
                    this.validarFechaTamizajeVALE(temp, edad);
                    data[fila] = temp.join('|');
                }
           }
       }
        return data;
    }

    corregirResultadoTamizajeVALE(data: any, edad: any){
        //const añoFecha = this.obtenerFecha(data[63]);
        if(edad < edadPermitida.edadMaxima){
            if(parseInt(data[40]) === 0){data[40] = 21;}
            if(comodines.sinDato.test(data[63]) && parseInt(data[40]) !== 21){
                data[40] = 21;
            }
            if(comodines.cincoComodines.test(data[63]) && parseInt(data[40]) !== 21){
                data[40] = 21;
            }
            /*if(añoFecha > valorMinimo && parseInt(data[40]) === 21){
                return errorTest0a12Años.resultadoTamizajeVALE.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
            }*/
        }else{
            if(parseInt(data[40]) !== 0){data[40] = 0;}
        }
    }

    validarFechaTamizajeVALE(data: any, edad: any){
        const añoFecha = this.obtenerFecha(data[63]);
        if(edad < edadPermitida.edadMaxima){
            if(comodines.noAplica.test(data[63])){data[63] = '1800-01-01';}
            if(añoFecha > valorMinimo && data[40] === 21){data[63] = '1800-01-01';}
        }else{
            if(!comodines.noAplica.test(data[63])){data[63] = '1845-01-01';}
        }
    }

        obtenerFecha(data: any): any{
            let fecha = data;
            fecha = fecha.split('-');
            return fecha[0];
        }
    }