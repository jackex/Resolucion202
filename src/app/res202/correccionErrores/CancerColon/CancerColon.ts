import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

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

export class CorregirCancerColon{

    corregirDatosCancerColon(data: any, errores: any, fechaSuperiorReporte: any): any{
        return this.corregirCancerColon(data,errores,fechaSuperiorReporte);
    }

    corregirCancerColon(data: any, errores: any, fechaSuperiorReporte: any): any{
            data = data.split(/\r\n|\n/);
    
            for (let index = 0; index < errores.length; index++) {
                if(errores[index].datoCancerColon.errores[0].length > 0){
                    for(let i = 0; i < errores[index].datoCancerColon.errores[0].length; i++){
                        let fila = parseInt(errores[index].datoCancerColon.errores[0][i].posicion[0]);
                        //let columna = parseInt(errores[index].datoCancerColon.errores[0][i].posicion[1]);
                            let temp = data[fila].split('|');
                                this.corregirResultadoPruebaSangreOcultaMateriaFecal(temp, fechaSuperiorReporte);
                                this.corregirResultadoColonoscopiaTamizaje(temp, fechaSuperiorReporte);
                                this.validarFechaRealizacionColonoscopia(temp, fechaSuperiorReporte);
                                this.validarFechaPruebaSangreOcultaMateriaFecal(temp, fechaSuperiorReporte);
                                data[fila] = temp.join('|');
                }            
            }
        }
            return data;            
    }
    
    corregirResultadoPruebaSangreOcultaMateriaFecal(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        let añoFecha = this.obtenerFecha(data[67]);
        if(edad > edadPermitida.edadMaxima){
            if(parseInt(data[24]) !== 0){data[24] = 0;}
        }else{
            if(edad >= edadPermitida.edadMaxima && edad <= edadPermitida.edadMaxima){
                if(parseInt(data[24]) === 0){data[24] = 21;}

                if(parseInt(data[24]) === 0 && añoFecha > valorMinimo){
                    data[24] = 21;
                }

                if(parseInt(data[24]) > 0 && parseInt(data[24]) < 21 && añoFecha < valorMinimo){
                    if(comodines.cincoComodines.test(data[67])){data[24] = 21;}
                if(comodines.sinDato.test(data[67])){data[24] = 21;}
                }

            }
            
            if(parseInt(data[24]) === 0 && añoFecha > valorMinimo){
                data[24] = 21;
            }
            if(parseInt(data[24]) > 0 && parseInt(data[24]) < 21 && añoFecha < valorMinimo){
                if(comodines.cincoComodines.test(data[67])){data[24] = 21;}
                if(comodines.sinDato.test(data[67])){data[24] = 21;}
                
            }
            
        }
        
    }

    corregirResultadoColonoscopiaTamizaje(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        let añoFecha = this.obtenerFecha(data[66]);
        if(edad > edadPermitida.edadMaxima){
            if(parseInt(data[36]) !== 0){data[36] = 0;}
        }else{
            if(edad >= edadPermitida.edadMaxima && edad <= edadPermitida.edadMaxima){

                if(parseInt(data[36]) === 0){data[36] = 21;}

                if(parseInt(data[36]) === 0 && añoFecha > valorMinimo || parseInt(data[36]) === 21 && añoFecha > valorMinimo){
                    data[36] = 21;
                }
            }

            if(parseInt(data[36]) === 0 && añoFecha > valorMinimo || parseInt(data[36]) === 21 && añoFecha > valorMinimo){
                data[36] = 21;
            }
        }
    }

    validarFechaRealizacionColonoscopia(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        if(edad > edadPermitida.edadMaxima){
            if(!comodines.noAplica.test(data[66])){data[66] = '1845-01-01';}            
        }else{
            if(edad >= edadPermitida.edadMaxima && edad <= edadPermitida.edadMaxima){
                if(comodines.noAplica.test(data[66])){data[66] = '1800-01-01';}
            }
        }
    }

    validarFechaPruebaSangreOcultaMateriaFecal(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        if(edad > edadPermitida.edadMaxima){
            if(!comodines.noAplica.test(data[67])){data[67] = '1845-01-01';}            
        }else{
            if(edad >= edadPermitida.edadMaxima && edad <= edadPermitida.edadMaxima){
                if(comodines.noAplica.test(data[67])){data[67] = '1800-01-01';}
            }
        }
    }

    obtenerFecha(data: any): any{
        let fecha = data;
        fecha = fecha.split('-');
        return fecha[0];
    }



}