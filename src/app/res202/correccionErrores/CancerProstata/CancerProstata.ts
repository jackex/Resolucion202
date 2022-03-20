import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

const valorMinimo = 1900;
const edadPermitida = {
    edadMinima: 40,
    edadMaxima: 49
}

const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};
const sexoRegExp = /\M/;

export class CorregirCancerProstata{

    corregirDatosCancerProstata(data: any, errores: any, fechaSuperiorReporte: any): any{
        return this.corregirCancerProstata(data, errores, fechaSuperiorReporte);
    }

    corregirCancerProstata(data: any, errores: any, fechaSuperiorReporte: any): any{
             data = data.split(/\r\n|\n/);
     
             for (let index = 0; index < errores.length; index++) {
                 if(errores[index].datoCancerProstata.errores[0].length > 0){
                     for(let i = 0; i < errores[index].datoCancerProstata.errores[0].length; i++){
                            let fila = parseInt(errores[index].datoCancerProstata.errores[0][i].posicion[0]);
                            //let columna = parseInt(errores[index].datoCancerProstata.errores[0][i].posicion[1]);
                                let temp = data[fila].split('|');               
                                    this.corregirResultadoTactoRectal(temp, fechaSuperiorReporte);
                                    this.corregirFechaDelTactoRectal(temp, fechaSuperiorReporte);
                                    this.corregirFechaTomaPSA(temp, fechaSuperiorReporte);
                                    this.corregirResultadoPSA(temp, fechaSuperiorReporte);
                                    data[fila] = temp.join('|');                        
                        }            
                    }
                 }
             return data;
    }

    corregirResultadoTactoRectal(data: any, fechaSuperiorReporte: any){
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        let añoFecha = this.obtenerFecha(data[64]);
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[22]) > 0){data[22] = 0;}                
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(edad >= edadPermitida.edadMinima && edad <= edadPermitida.edadMaxima){
                        if(añoFecha < valorMinimo){
                            if(parseInt(data[22]) !== 21 && comodines.sinDato.test(data[64]) &&
                                parseInt(data[22]) !== 21 && comodines.cincoComodines.test(data[64])){
                                    data[22] = 21;
                            } 
                        }                                    
                }else{
                    //if(parseInt(data[22]) === 0){data[22] = 21;}
                    if(parseInt(data[22]) !== 21 && comodines.sinDato.test(data[64])){data[22] = 21;}
                    if(parseInt(data[22]) === 21 && comodines.noAplica.test(data[64])){data[22] = 0;}
                }
                
            }else{
                if(parseInt(data[22]) > 0){data[22] = 0;}
            }
        }
    }

    corregirFechaDelTactoRectal(data: any, fechaSuperiorReporte: any){
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        let añoFecha = this.obtenerFecha(data[64]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[64])){data[64] = '1845-01-01';}
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(edad >= edadPermitida.edadMinima && edad <= edadPermitida.edadMaxima){
                    if(parseInt(data[22]) === 0 && añoFecha < valorMinimo){
                        if(parseInt(data[22]) === 0 && !comodines.noAplica.test(data[64])){
                            data[64] = '1845-01-01';
                        }
                    }
                    if(parseInt(data[22]) === 4 || parseInt(data[22]) === 5 && añoFecha < valorMinimo){
                        if(comodines.noAplica.test(data[64])){data[64] = '1800-01-01';}
                        if(comodines.cincoComodines.test(data[64])){data[64] = '1800-01-01';}
                    }
                    if(parseInt(data[22]) === 21 && añoFecha < valorMinimo){data[64] = '1800-01-01';}
                }else{
                    if(comodines.noAplica.test(data[64])){data[64] = '1800-01-01';}
                    if(parseInt(data[22]) === 4 || parseInt(data[22]) === 5 && añoFecha < valorMinimo){
                            if(comodines.noAplica.test(data[64])){data[64] = '1800-01-01';}
                            if(comodines.cincoComodines.test(data[64])){data[64] = '1800-01-01';}
                    }
                } 
            }else{
                if(!comodines.noAplica.test(data[64])){data[64] = '1845-01-01';}
            }
        }
    }

    corregirFechaTomaPSA(data: any, fechaSuperiorReporte: any){
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        let añoFecha = this.obtenerFecha(data[73]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[73])){data[73] = '1845-01-01';}            
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(edad >= edadPermitida.edadMinima && edad <= edadPermitida.edadMaxima){
                    if(parseInt(data[109]) > 0 && parseInt(data[109]) < 998 && añoFecha < valorMinimo){
                        if(comodines.noAplica.test(data[73])){
                            data[73] = '1800-01-01';
                        }
                    }
                }else{
                    if(comodines.noAplica.test(data[73])){data[73] = '1800-01-01';}
                    if(parseInt(data[109]) > 0 && parseInt(data[109]) < 998 && añoFecha < valorMinimo){
                        if(comodines.noAplica.test(data[73])){
                            data[73] = '1800-01-01';
                        }
                    }
                }
            }else{
                if(!comodines.noAplica.test(data[73])){data[73] = '1845-01-01';}
            }
        }
    }

    corregirResultadoPSA(data: any, fechaSuperiorReporte: any){
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        let añoFecha = this.obtenerFecha(data[73]);
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[109]) > 0){data[109] = 0;}            
        }else{
            if(edad >= edadPermitida.edadMinima){
                if(edad >= edadPermitida.edadMinima && edad <= edadPermitida.edadMaxima){
                    if(parseInt(data[109]) === 0 && añoFecha < valorMinimo){
                        if(parseInt(data[109]) === 0 && comodines.sinDato.test(data[73])){
                            data[109] = 998;
                        }
                        if(parseInt(data[109]) === 0 && comodines.cincoComodines.test(data[73])){
                            data[109] = 998;
                        }                    
                    }
                    if(parseInt(data[109]) > 0 && parseInt(data[109]) < 998){
                        if(comodines.sinDato.test(data[73]) || comodines.cincoComodines.test(data[73])){
                            data[109] = 998;
                        }
                    }
                }else{
                    if(comodines.sinDato.test(data[73]) || comodines.cincoComodines.test(data[73]) 
                        || añoFecha > valorMinimo){
                            if( parseInt(data[109]) === 0){
                                data[109] = 998;
                            }
                    }
                    if(parseInt(data[109]) > 0 && parseInt(data[109]) < 998){
                        if(comodines.sinDato.test(data[73]) || comodines.cincoComodines.test(data[73])){
                            data[109] = 998;
                        }
                    } 
                }                
            }else{
                if(parseInt(data[109]) > 0){data[109] = 0;}
            }
        }
    }


    obtenerFecha(data: any): any{
        let fecha = data;
        fecha = fecha.split('-');
        return fecha[0];
    }

}