import {erroresDatoCancerCervix} from './ErroresDatoCancerCervix';

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

export class DatoCancerCervix{

    validarDatosCancerCervix(data: any, edad: any, consecutivo: any, numeroDocumento: any, arrayCancerCervix: Array<any>){
        const TAEI = this.validarTratamAblativoEncisPostTecnicaInspeccionVisual(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(TAEI)){arrayCancerCervix.push(TAEI);}
        const TACCU = this.validarTratamientoCancerCuelloUterino(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(TACCU)){arrayCancerCervix.push(TACCU);}
        const FTCCU = this.validarFechaTamizajeCancerCuelloUterino(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FTCCU)){arrayCancerCervix.push(FTCCU);}
        const RTCCU = this.validarResultadoTamizajeCancerCuelloUterino(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RTCCU)){arrayCancerCervix.push(RTCCU);}
        const CMCCU = this.validarCalidadMuestraCitologiaCervicouterina(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(CMCCU)){arrayCancerCervix.push(CMCCU);}
        const CHIPS = this.validarCodigoHabilitacionIPS(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(CHIPS)){arrayCancerCervix.push(CHIPS);}
        const FC = this.validarFechaColposcopia(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FC)){arrayCancerCervix.push(FC);}
        const FBC = this.validarFechaBiopsiaCervicouterina(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FBC)){arrayCancerCervix.push(FBC);}
        const RBC = this.validarResultadoBiopsiaCervicouterina(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RBC)){arrayCancerCervix.push(RBC);}
    }

    validarTratamAblativoEncisPostTecnicaInspeccionVisual(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(!sexoRegExp.test(data[10]) && parseInt(data[47]) > 0){
            return {mensaje:erroresDatoCancerCervix.tratamAblatEncisionTecInspeccionVisual.errorSexo + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 47]};
        }else{
            if(edad < edadPermitida.edadMinima){
                if(parseInt(data[47]) > 0){
                    return {mensaje: erroresDatoCancerCervix.tratamAblatEncisionTecInspeccionVisual.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 47]};
                }
            }else{
                if(parseInt(data[47]) !== 0 && parseInt(data[86]) >= 16){
                    return {mensaje: erroresDatoCancerCervix.tratamAblatEncisionTecInspeccionVisual.errorRelacion4 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 47]};
                }
                if(parseInt(data[47]) === 0 && parseInt(data[86]) === 3){
                    return {mensaje: erroresDatoCancerCervix.tratamAblatEncisionTecInspeccionVisual.errorRelacion2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 47]};
                }
                if(parseInt(data[47]) >= 6 && parseInt(data[47]) <= 8 && parseInt(data[86]) !== 3 && parseInt(data[88]) === 19){
                    return {mensaje: erroresDatoCancerCervix.tratamAblatEncisionTecInspeccionVisual.errorRelacion3 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 47]};
                }
            }
        }
    }

    validarTratamientoCancerCuelloUterino(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[86]) > 0){
                return {mensaje: erroresDatoCancerCervix.tratamientoCancerCuelloUterino.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 86]};
            }
            
        }else{
            if(edad < edadPermitida.edadMinima){
                if(parseInt(data[86]) > 0){
                    return {mensaje: erroresDatoCancerCervix.tratamientoCancerCuelloUterino.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 86]};
                }                
            }else{
                if(parseInt(data[86]) === 0){
                    return {mensaje: erroresDatoCancerCervix.tratamientoCancerCuelloUterino.errorNoaplica + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 86]};
                }
            }
        }
    }

    validarFechaTamizajeCancerCuelloUterino(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[87]);
        if(!sexoRegExp.test(data[10])){
            if(!comodines.noAplica.test(data[87])){
                return {mensaje: erroresDatoCancerCervix.FechaTamizajeCancerCuelloUterino.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 87]};
            }             
        }else{
            if(edad < edadPermitida.edadMinima){
                if(añoFecha > valorMinimo || comodines.cincoComodines.test(data[87]) || comodines.sinDato.test(data[87])){
                    return {mensaje: erroresDatoCancerCervix.FechaTamizajeCancerCuelloUterino.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 87]}; 
                }                
            }else{
                if(comodines.noAplica.test(data[87])){
                    return {mensaje: erroresDatoCancerCervix.FechaTamizajeCancerCuelloUterino.errorNoaplica + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 87]}; 
                }
                if(añoFecha > valorMinimo && parseInt(data[88]) < 1 || añoFecha > valorMinimo && parseInt(data[88]) > 20){
                    return {mensaje: erroresDatoCancerCervix.FechaTamizajeCancerCuelloUterino.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 87]}; 
                }
            }
        }
    }

    validarResultadoTamizajeCancerCuelloUterino(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[88]) > 0){
                return {mensaje: erroresDatoCancerCervix.resultadoTamizajeCancerCuelloUterino.errorSexo + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 88]};
            }
            
        }else{
            if(edad < edadPermitida.edadMinima){
                if(parseInt(data[88]) > 0){
                    return {mensaje: erroresDatoCancerCervix.resultadoTamizajeCancerCuelloUterino.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 88]};
                }                
            }else{
                if(parseInt(data[88]) === 0){
                    return {mensaje: erroresDatoCancerCervix.resultadoTamizajeCancerCuelloUterino.errorNoaplica + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 88]};
                }
                if(parseInt(data[86]) > 0 && comodines.sinDato.test(data[87]) && parseInt(data[88]) !== 21){
                    return {mensaje: erroresDatoCancerCervix.resultadoTamizajeCancerCuelloUterino.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 88]};
                }
            }
        }
    }

    validarCalidadMuestraCitologiaCervicouterina(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(!sexoRegExp.test(data[10]) && parseInt(data[89]) > 0){
            return {mensaje: erroresDatoCancerCervix.calidadMuestraCitologiaCervicouterina.errorSexo + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 88]};
        }else{
            if(edad < edadPermitida.edadMinima){
                if(parseInt(data[89]) > 0){
                    return {mensaje: erroresDatoCancerCervix.calidadMuestraCitologiaCervicouterina.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 89]};
                }                
            }else{
                /*if(parseInt(data[89]) === 0){
                    return erroresDatoCancerCervix.calidadMuestraCitologiaCervicouterina.errorNoaplica + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
                }*/
                if(parseInt(data[89]) === 1 || parseInt(data[89]) === 2 || parseInt(data[89]) === 3){
                    if(parseInt(data[88]) === 0 || parseInt(data[88]) === 21){
                        return {mensaje: erroresDatoCancerCervix.calidadMuestraCitologiaCervicouterina.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 89]};
                    }
                }
                if(parseInt(data[89]) !== 999 && parseInt(data[88]) === 21){
                        return {mensaje: erroresDatoCancerCervix.calidadMuestraCitologiaCervicouterina.errorRelacion2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 89]};
                }
                if(parseInt(data[89]) === 999 && parseInt(data[88]) > 0 && parseInt(data[88]) !== 21 && comodines.sinDato.test(data[87]) ||
                    parseInt(data[89]) !== 999 && parseInt(data[88]) > 0 && parseInt(data[88]) !== 21 && comodines.sinDato.test(data[87])){
                    return {mensaje: erroresDatoCancerCervix.calidadMuestraCitologiaCervicouterina.errorRelacion3 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 89]};
                }
            }
        }
    }

    validarCodigoHabilitacionIPS(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[87]);
        if(!sexoRegExp.test(data[10])){
            if(parseInt(data[90]) > 0){
                return {mensaje: erroresDatoCancerCervix.codigoHabilitacionIPS.errorSexo + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 90]};
            }
            
        }else{
            if(edad < edadPermitida.edadMinima){
                if(parseInt(data[90]) > 0){
                    return {mensaje: erroresDatoCancerCervix.codigoHabilitacionIPS.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 90]};
                }                
            }else{
                if(parseInt(data[88]) === 0){
                    return {mensaje: erroresDatoCancerCervix.codigoHabilitacionIPS.errorNoAplica + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 90]};
                }
                if(parseInt(data[90]) > 0 && añoFecha < valorMinimo){
                    if(comodines.noAplica.test(data[87])){
                        return {mensaje: erroresDatoCancerCervix.codigoHabilitacionIPS.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 90]};
                    }
                }
            }
        }
    }

    validarFechaColposcopia(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[91]);
        if(!sexoRegExp.test(data[10]) && !comodines.noAplica.test(data[91])){
            return {mensaje: erroresDatoCancerCervix.fechaColposcopia.errorSexo + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 91]};
        }else{
            if(edad < edadPermitida.edadMinima){
                if(añoFecha > valorMinimo || comodines.sinDato.test(data[91]) || comodines.cincoComodines.test(data[91])){
                    return {mensaje: erroresDatoCancerCervix.fechaColposcopia.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 91]};
                }                
            }else{
                if(parseInt(data[86]) >= 16 && !comodines.noAplica.test(data[91])){
                    return {mensaje: erroresDatoCancerCervix.fechaColposcopia.errorNoAplica + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 91]};
                }
                if(parseInt(data[88]) === 20 && !comodines.noAplica.test(data[91])){
                    return {mensaje: erroresDatoCancerCervix.fechaColposcopia.errorNoAplica + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 91]};
                }
                if(parseInt(data[89]) === 4 && !comodines.noAplica.test(data[91])){
                    return {mensaje: erroresDatoCancerCervix.fechaColposcopia.errorNoAplica + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 91]};
                }
            }
        }
    }

    validarFechaBiopsiaCervicouterina(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[93]);
        if(!sexoRegExp.test(data[10]) && !comodines.noAplica.test(data[93])){
            return {mensaje: erroresDatoCancerCervix.fechaBiopsiaCervicouterina.errorSexo + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 93]};
        }else{
            if(edad < edadPermitida.edadMinima){
                if(añoFecha > valorMinimo || !comodines.noAplica.test(data[93])){
                    return {mensaje: erroresDatoCancerCervix.fechaBiopsiaCervicouterina.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 93]};
                }
            }else{
                if(parseInt(data[86]) >= 16 && !comodines.noAplica.test(data[93])){
                    return {mensaje: erroresDatoCancerCervix.fechaBiopsiaCervicouterina.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 93]};
                }
                if(parseInt(data[88]) === 20 && !comodines.noAplica.test(data[93])){
                    return {mensaje: erroresDatoCancerCervix.fechaBiopsiaCervicouterina.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 93]};
                }
                if(parseInt(data[89]) === 4 && !comodines.noAplica.test(data[93])){
                    return {mensaje: erroresDatoCancerCervix.fechaBiopsiaCervicouterina.errorRelacion + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 93]};
                }
            }
        }
    }

    validarResultadoBiopsiaCervicouterina(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[93]);
        if(!sexoRegExp.test(data[10]) && parseInt(data[94]) > 0){
            return {mensaje: erroresDatoCancerCervix.resultadoBiopsiaCervicouterina.errorSexo + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 94]};
        }else{
            if(edad < edadPermitida.edadMinima){
                if(parseInt(data[94]) > 0){
                    return {mensaje: erroresDatoCancerCervix.resultadoBiopsiaCervicouterina.errorEdad + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 94]};
                }
                
            }else{
                if(parseInt(data[94]) > 1 && parseInt(data[94]) !== 21 && añoFecha <= valorMinimo){
                    return {mensaje: erroresDatoCancerCervix.resultadoBiopsiaCervicouterina.errorComodin + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 94]};
                }
                if(parseInt(data[94]) > 0 && comodines.cincoComodines.test(data[87]) && añoFecha < valorMinimo ||
                    parseInt(data[94]) > 0 && comodines.sinDato.test(data[87]) && añoFecha < valorMinimo){
                        return {mensaje: erroresDatoCancerCervix.resultadoBiopsiaCervicouterina.errorComodin2 + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 94]};
                }

                if(parseInt(data[94]) > 0 && parseInt(data[86]) >= 16 || parseInt(data[94]) > 0 && parseInt(data[88]) === 20){
                    return {mensaje: erroresDatoCancerCervix.resultadoBiopsiaCervicouterina.errorComodin2 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo, 94]};
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