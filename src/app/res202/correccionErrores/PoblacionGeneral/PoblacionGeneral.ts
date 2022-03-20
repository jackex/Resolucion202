import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

const valorMinimo = 1900;

const edadPermitida ={
    edadMinima: 26
};

const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};

const sexoRegExp = /\F/;

export class CorregirPoblacionGeneral{

    corregirDatoPoblacionGeneral(data: any, errores: any, fechaSuperiorReporte: any): any{
        return this.corregirPoblacionGeneral(data, errores, fechaSuperiorReporte);
    }

    corregirPoblacionGeneral(data: any, errores: any, fechaSuperiorReporte: any): any{
        data = data.split(/\r\n|\n/);
    
        for (let index = 0; index < errores.length; index++) {
            if(errores[index].datoPoblacionGeneral.errores[0].length > 0){
                for(let i = 0; i < errores[index].datoPoblacionGeneral.errores[0].length; i++){
                    let fila = parseInt(errores[index].datoPoblacionGeneral.errores[0][i].posicion[0]);
                    let temp = data[fila].split('|');
                    CalcularEdad.prototype.calcularEdad(temp[9], fechaSuperiorReporte);
                    const edad = CalcularEdad.prototype.EDAD;
                    this.corregirFechaPeso(temp);
                    this.corregirPesoKGS(temp);
                    this.corregirFechaTalla(temp);
                    this.corregirTallaCMS(temp);
                    this.corregirResultadoTamizajeHepatitisC(temp,edad);
                    this.corregirResultadoAntigenoSuperficieHepatitisB(temp);
                    this.corregirFechaTomaTamizajeSifilis(temp);
                    this.corregirResultadoTamizajeSifilis(temp);
                    this.corregirFechaPruebaVIH(temp);
                    this.corregirResultadoVIH(temp);
                    this.corregirFechaTamizajeHepatitisC(temp,edad);
                    data[fila] = temp.join('|');
                }
           }
       }
        return data;
    }

    corregirFechaPeso(data: any){
        if(!comodines.sinDato.test(data[29]) && parseInt(data[30]) === 999){
            data[29] = '1800-01-01';
        }
        /*if(comodines.sinDato.test(data[29]) && !comodines.sinDato.test(data[31])){
            return errorPoblacionGeneral.fechaPeso.errorRelacion2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento;
        }*/
        if(!comodines.sinDato.test(data[29]) && comodines.sinDato.test(data[31])){
            data[29] = '1800-01-01';
        }
    }

    corregirPesoKGS(data: any){
        //const añoFecha = this.obtenerFecha(data[29]);
        if(comodines.sinDato.test(data[29]) && parseInt(data[30]) !== 999){
            data[30] = 999;
        }
    }

    corregirFechaTalla(data: any){
        if(!comodines.sinDato.test(data[31]) && parseInt(data[32]) === 999){
            data[31] = '1800-01-01';
        }
        /*if(!comodines.sinDato.test(data[29]) && comodines.sinDato.test(data[31])){
            return errorPoblacionGeneral.fechaTalla.errorRelacion2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento;
        }*/
        if(comodines.sinDato.test(data[29]) && !comodines.sinDato.test(data[31])){
            data[31] = '1800-01-01';
        }
    }

    corregirTallaCMS(data: any){
        //const añoFecha = this.obtenerFecha(data[31]);
        if(comodines.sinDato.test(data[31]) && parseInt(data[32]) !== 999){
            data[32] = 999;
        }
    }

    corregirResultadoTamizajeHepatitisC(data: any, edad: any){
        //const añoFecha = this.obtenerFecha(data[110]);
        if(edad >= edadPermitida.edadMinima){
            if(parseInt(data[42]) === 0){data[42] = 21;}
            if(comodines.cincoComodines.test(data[110]) && parseInt(data[42]) !== 21){
                data[42] = 21;
            }
            if(comodines.sinDato.test(data[110]) && parseInt(data[42]) !== 21){
                data[42] = 21;
            }
            /*if(añoFecha > valorMinimo && parseInt(data[42]) === 21){
                return errorPoblacionGeneral.resultadoTamizajeHepatitisC.errorRelacion + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento;
            }*/
        }else{
            if(parseInt(data[42]) !== 0){data[42] = 0;}
        }
    }

    corregirResultadoAntigenoSuperficieHepatitisB(data: any){
        const añoFecha = this.obtenerFecha(data[78]);

        if(comodines.sinDato.test(data[78]) && parseInt(data[79]) !== 21){
            data[79] = 21;
        }
        if(comodines.noAplica.test(data[78]) && parseInt(data[79]) !== 0){
            data[79] = 0;
        }
        if(comodines.cincoComodines.test(data[78]) && parseInt(data[79]) !== 21){
            data[79] = 21;
        }
        if(añoFecha > valorMinimo && parseInt(data[79]) === 0){
            data[79] = 21;
        }

    }

    corregirFechaTomaTamizajeSifilis(data: any){
        const añoFecha = this.obtenerFecha(data[80]);
        if(sexoRegExp.test(data[10])){
            if(parseInt(data[14]) === 1 && comodines.noAplica.test(data[80])){
                data[80] = '1800-01-01';
            }
            if(añoFecha > valorMinimo && parseInt(data[81]) === 21){
                data[80] = '1800-01-01';
            }
        }        
    }

    corregirResultadoTamizajeSifilis(data: any){
        const añoFecha = this.obtenerFecha(data[80]);
        if(sexoRegExp.test(data[10])){
            if(parseInt(data[14]) === 1 && añoFecha > valorMinimo && parseInt(data[81]) === 0){
                data[81] = 21;
            }
            /*if(añoFecha > valorMinimo && parseInt(data[81]) === 21){
                return errorPoblacionGeneral.resultadoTamizajeSifilis.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
            }*/
            if(añoFecha > valorMinimo && parseInt(data[81]) === 0){
                data[81] = 21;
            }
            if(comodines.cincoComodines.test(data[80]) && parseInt(data[81]) !== 21){
                data[81] = 21;
            }
            if(comodines.noAplica.test(data[80]) && parseInt(data[81]) !== 0){
                data[81] = 0;
            }
            if(comodines.sinDato.test(data[80]) && parseInt(data[81]) !== 21){
                data[81] = 21;
            }
        }else{
            /*if(añoFecha > valorMinimo && parseInt(data[81]) === 21){
                return errorPoblacionGeneral.resultadoTamizajeSifilis.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;
            }*/
            if(añoFecha > valorMinimo && parseInt(data[81]) === 0){
                data[81] = 21;
            }
            if(comodines.cincoComodines.test(data[80]) && parseInt(data[81]) !== 21){
                data[81] = 21;
            }
            if(comodines.noAplica.test(data[80]) && parseInt(data[81]) !== 0){
                data[81] = 0;
            }
            if(comodines.sinDato.test(data[80]) && parseInt(data[81]) !== 21){
                data[81] = 21;
            }
        }
    }

    corregirFechaPruebaVIH(data: any){
        if(sexoRegExp.test(data[10])){
            const añoFecha = this.obtenerFecha(data[82]);
            if(parseInt(data[14]) === 1 && comodines.noAplica.test(data[82])){
                data[82] = '1800-01-01';
            }
            if(añoFecha > valorMinimo && parseInt(data[83]) === 21){
                data[82] = '1800-01-01';
            }
        }
    }

    corregirResultadoVIH(data: any){
        const añoFecha = this.obtenerFecha(data[82]);
        if(sexoRegExp.test(data[10])){
            if(parseInt(data[14]) === 1 && añoFecha > valorMinimo && parseInt(data[83]) === 0){
                data[83] = 21;
            }
            /*if(añoFecha > valorMinimo && parseInt(data[83]) === 21){
                return errorPoblacionGeneral.resultadoPruebaVIH.errorRelacion2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento;
            }*/
            if(añoFecha > valorMinimo && parseInt(data[83]) === 0){
                data[83] = 21;
            }
            if(comodines.cincoComodines.test(data[82]) && parseInt(data[83]) !== 21){
                data[83] = 21;
            }
            if(comodines.noAplica.test(data[82]) && parseInt(data[83]) !== 0){
                data[83] = 0;
            }
            if(comodines.sinDato.test(data[82]) && parseInt(data[83]) !== 21){
                data[83] = 21;
            }
        }else{
            /*if(añoFecha > valorMinimo && parseInt(data[83]) === 21){
                return errorPoblacionGeneral.resultadoPruebaVIH.errorRelacion2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento;
            }*/
            if(añoFecha > valorMinimo && parseInt(data[83]) === 0){
                data[83] = 21;
            }
            if(comodines.cincoComodines.test(data[82]) && parseInt(data[83]) !== 21){
                data[83] = 21;
            }
            if(comodines.noAplica.test(data[82]) && parseInt(data[83]) !== 0){
                data[83] = 0;
            }
            if(comodines.sinDato.test(data[82]) && parseInt(data[83]) !== 21){
                data[83] = 21;
            }
        }
    }

    corregirFechaTamizajeHepatitisC(data: any, edad: any){
        if(edad  >= edadPermitida.edadMinima){
            if(comodines.noAplica.test(data[110])){
                data[110] = '1800-01-01';
            }
        }else{
            if(!comodines.noAplica.test(data[110])){
                data[110] = '1845-01-01';
            }
        }
    }

    obtenerFecha(data: any): any{
        let fecha = data;
        fecha = fecha.split('-');
        return fecha[0];
    }

}