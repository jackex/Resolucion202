import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

const valorMinimo = 1900;
const edadPermitida = {
    edadMinima: 10
}

const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};
const sexoRegExp = /\F/;

export class CorregirCancerCervix{


    corregirDatosCancerCervix(data: any, errores: any, fechaSuperiorReporte: any): any{
        return this.corregirCancerCervix(data, errores, fechaSuperiorReporte);
    }

    corregirCancerCervix(data: any, errores: any, fechaSuperiorReporte: any): any{
        data = data.split(/\r\n|\n/);

        for (let index = 0; index < errores.length; index++) {
            if(errores[index].datoCancerCervix.errores[0].length > 0){
                for(let i = 0; i < errores[index].datoCancerCervix.errores[0].length; i++){
                    let fila = parseInt(errores[index].datoCancerCervix.errores[0][i].posicion[0]);
                    //let columna = parseInt(errores[index].datoCancerCervix.errores[0][i].posicion[1]);
                        let temp = data[fila].split('|');
                            this.corregirTratamAblativoEncisPostTecnicaInspeccionVisual(temp, fechaSuperiorReporte);
                            this.corregirTratamientoCancerCuelloUterino(temp, fechaSuperiorReporte);
                            this.corregirFechaTamizajeCancerCuelloUterino(temp, fechaSuperiorReporte);
                            this.corregirResultadoTamizajeCancerCuelloUterino(temp, fechaSuperiorReporte);
                            this.validarCodigoHabilitacionIPS(temp, fechaSuperiorReporte);
                            this.validarFechaColposcopia(temp, fechaSuperiorReporte);
                            this.validarFechaBiopsiaCervicouterina(temp, fechaSuperiorReporte);
                            this.validarResultadoBiopsiaCervicouterina(temp, fechaSuperiorReporte);
                            data[fila] = temp.join('|');   
                }
            }            
        }
        return data;
    }

    corregirTratamAblativoEncisPostTecnicaInspeccionVisual(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        if(!sexoRegExp.test(data[10]) && parseInt(data[47]) > 0){
            data[47] = 0; 
        }else{
            if(edad < edadPermitida.edadMinima){
                if(parseInt(data[47]) > 0){data[47] = 0;}
            }else{
                if(parseInt(data[47]) !== 0 && parseInt(data[86]) >= 16){data[47] = 0;}
                if(parseInt(data[47]) === 0 && parseInt(data[86]) === 3){
                    data[47] = 21;
                }
                if(parseInt(data[47]) >= 6 && parseInt(data[47]) <= 8 && parseInt(data[86]) !== 3 && parseInt(data[88]) === 19){
                    data[47] = 0;   
                }
            }
        }
    }

    corregirTratamientoCancerCuelloUterino(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[86]) > 0){data[86] = 0;}
        }else{
            if(edad < edadPermitida.edadMinima){
                if(parseInt(data[86]) > 0){data[86] = 0;}                
            }else{
                if(parseInt(data[86]) === 0){data[86] = 21;}
            }
        }
    }

    corregirFechaTamizajeCancerCuelloUterino(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        const añoFecha = this.obtenerFecha(data[87]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[87])){data[87] = '1845-01-01';}             
        }else{
            if(edad < edadPermitida.edadMinima){
                if(añoFecha > valorMinimo || comodines.cincoComodines.test(data[87]) || comodines.sinDato.test(data[87])){
                    data[87] = '1845-01-01';
                }                
            }else{
                if(comodines.noAplica.test(data[87])){data[87] = '1800-01-01';}
                if(añoFecha > valorMinimo && parseInt(data[88]) === 21){data[87] = '1800-01-01';}
            }
        }
    }

    corregirResultadoTamizajeCancerCuelloUterino(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[88]) > 0){data[88] = 0;}            
        }else{
            if(edad < edadPermitida.edadMinima){
                if(parseInt(data[88]) > 0){data[88] = 0;}                
            }else{
                if(parseInt(data[88]) === 0){data[88] = 21;}
                if(comodines.sinDato.test(data[87]) && parseInt(data[88]) !== 21){data[88] = 21;}
            }
        }
    }

    corregirCalidadMuestraCitologiaCervicouterina(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        if(!sexoRegExp.test(data[10]) && parseInt(data[89]) > 0){
            data[89] = 0;
        }else{
            if(edad < edadPermitida.edadMinima){
                if(parseInt(data[89]) > 0){data[89] = 0;}                
            }else{
                if(parseInt(data[89]) === 1 || parseInt(data[89]) === 2 || parseInt(data[89]) === 3){
                    if(parseInt(data[88]) === 0 || parseInt(data[88]) === 21){data[89] = 0;}
                }
                if(parseInt(data[89]) !== 999 && parseInt(data[88]) === 21){data[89] = 999;}
            }
        }
    }

    validarCodigoHabilitacionIPS(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[90]) > 0){data[90] = 0;}
        }else{
            if(edad < edadPermitida.edadMinima){
                if(parseInt(data[90]) > 0){data[90] = 0;}                
            }else{
                if(parseInt(data[90]) > 0 && comodines.sinDato.test(data[87])){data[90] = 999;}
                }
            }
    }

    validarFechaColposcopia(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        if(!sexoRegExp.test(data[10]) && !comodines.noAplica.test(data[91])){
            data[91] = '1845-01-01';
        }else{
            if(edad < edadPermitida.edadMinima){
                if(!comodines.noAplica.test(data[91])){
                    data[91] = '1845-01-01';
                }                
            }else{
                if(parseInt(data[86]) >= 16 && !comodines.noAplica.test(data[91])){
                    data[91] = '1845-01-01';
                }
                if(parseInt(data[88]) === 20 && !comodines.noAplica.test(data[91])){
                    data[91] = '1845-01-01';
                }
                if(parseInt(data[89]) === 4 && !comodines.noAplica.test(data[91])){
                    data[91] = '1845-01-01';
                }
            }
        }
    }

    validarFechaBiopsiaCervicouterina(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        let añoFecha = this.obtenerFecha(data[93]);
        if(!sexoRegExp.test(data[10]) && !comodines.noAplica.test(data[93])){
            data[93] = '1845-01-01';
        }else{
            if(edad < edadPermitida.edadMinima){
                if(!comodines.noAplica.test(data[93])){data[93] = '1845-01-01';}
            }else{
                if(parseInt(data[86]) >= 16 && !comodines.noAplica.test(data[93])){
                    data[93] = '1845-01-01';
                }
                if(parseInt(data[88]) === 20 && !comodines.noAplica.test(data[93])){
                    data[93] = '1845-01-01';
                }
                if(parseInt(data[89]) === 4 && !comodines.noAplica.test(data[93])){
                    data[93] = '1845-01-01';
                }
            }
        }
    }

    validarResultadoBiopsiaCervicouterina(data: any, fechaSuperiorReporte: any): any{
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        let añoFecha = this.obtenerFecha(data[93]);
        if(!sexoRegExp.test(data[10]) && parseInt(data[94]) > 0){
            data[94] = 0;
        }else{
            if(edad < edadPermitida.edadMinima){
                if(parseInt(data[94]) > 0){data[94] = 0;}
                
            }else{
                if(parseInt(data[94]) > 1 && parseInt(data[94]) !== 21 && añoFecha <= valorMinimo){
                    data[94] = 21;
                }
                if(parseInt(data[94]) > 0 && comodines.cincoComodines.test(data[87]) && añoFecha < valorMinimo ||
                    parseInt(data[94]) > 0 && comodines.sinDato.test(data[87]) && añoFecha < valorMinimo){
                        data[94] = 21;
                }


                if(parseInt(data[94]) > 0 && parseInt(data[86]) >= 16 || parseInt(data[94]) > 0 && parseInt(data[88]) === 20){
                    data[94] = 0;
                }
            }
        }
    }
    


    obtenerFecha(data: any): any{
        let fecha = data;
        fecha = fecha.split('-');
        return fecha[0];
    }
    
}