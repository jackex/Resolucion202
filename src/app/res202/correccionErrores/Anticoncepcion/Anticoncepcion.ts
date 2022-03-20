import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

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

export class CorregirAnticoncepcion{

    corregirDatosAnticoncepcion(data: any, errores: any, fechaSuperiorReporte: any): any{
        data = this.corregirAnticoncepcion(data, errores, fechaSuperiorReporte);
        return data;
    }

    obtenerFecha(data: any): any{
        let fecha = data;
        fecha = fecha.split('-');
        return fecha[0];
    }

    corregirAnticoncepcion(data: any, errores: any, fechaSuperiorReporte: any): any{
        data = data.split(/\r\n|\n/);

        for (let index = 0; index < errores.length; index++) {
            if(errores[index].datoAnticoncepcion.errores[0].length > 0){
                for(let i = 0; i < errores[index].datoAnticoncepcion.errores[0].length; i++){
                    let fila = parseInt(errores[index].datoAnticoncepcion.errores[0][i].posicion[0]);
                    //let columna = parseInt(errores[index].datoAnticoncepcion.errores[0][i].posicion[1]);
                        let temp = data[fila].split('|');
                            this.corregirFechaAtencionAsesoriaAnticoncepcion(temp, fechaSuperiorReporte);
                            this.corregirSuministroMetodoAnticonceptivo(temp, fechaSuperiorReporte);
                            this.corregirFechaSuministroMetodoAnticonceptivo(temp, fechaSuperiorReporte);
                            data[fila] = temp.join('|');             
                }
            }            
        }
        return data;
    }

    corregirFechaAtencionAsesoriaAnticoncepcion(data: any, fechaSuperiorReporte: any){
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        if(edad < edadPermitida.edadMinima){
            if(!comodines.noAplica.test(data[53])){data[53] = '1845-01-01';}
        }else{
            if(comodines.noAplica.test(data[53])){data[53] = '1800-01-01';}
        }
    }

    corregirSuministroMetodoAnticonceptivo(data: any, fechaSuperiorReporte: any){
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        if(edad < edadPermitida.edadMinima || edad >= edadPermitida.edadMaxima){    
            if(parseInt(data[54]) !== 0){data[54] = 0;}
        }else{
            if(parseInt(data[54]) === 0){data[54] = 21;}
            if(parseInt(data[54]) !== 21 && comodines.sinDato.test(data[55])){data[54] = 21;}
        }
    }

    corregirFechaSuministroMetodoAnticonceptivo(data: any, fechaSuperiorReporte: any){
        let fecha = this.obtenerFecha(data[55]);
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        if(edad < edadPermitida.edadMinima || edad >= edadPermitida.edadMaxima){
            if(!comodines.noAplica.test(data[55])){data[55] = '1845-01-01';}
        }else{
            if(comodines.noAplica.test(data[55])){data[55] = '1800-01-01';}
            if(parseInt(data[54]) === 21 && fecha > valorMinimo){data[55] = '1800-01-01';}
        }
    }
}