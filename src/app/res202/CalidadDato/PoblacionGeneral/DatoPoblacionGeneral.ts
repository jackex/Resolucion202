import { errorPoblacionGeneral } from "./ErrorPoblacionGeneral";

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

export class DatoPoblacionGeneral{

    validarPoblacionGeneral(data: any, edad: any, consecutivo: any, numeroDocumento: any, arrayPoblacionGeneral: Array<any>){
        const FP = this.validarFechaPeso(data, consecutivo, numeroDocumento);
        if(this.validarResultado(FP)){arrayPoblacionGeneral.push(FP);}
        const PKGS = this.validarPesoKGS(data, consecutivo, numeroDocumento);
        if(this.validarResultado(PKGS)){arrayPoblacionGeneral.push(PKGS);}
        const FT = this.validarFechaTalla(data, consecutivo, numeroDocumento);
        if(this.validarResultado(FT)){arrayPoblacionGeneral.push(FT);}
        const TCMS = this.validarTallaCMS(data, consecutivo, numeroDocumento);
        if(this.validarResultado(TCMS)){arrayPoblacionGeneral.push(TCMS);}
        const RTHC = this.validarResultadoTamizajeHepatitisC(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RTHC)){arrayPoblacionGeneral.push(RTHC);}
        const RASHEPC = this.validarResultadoAntigenoSuperficieHepatitisB(data, consecutivo, numeroDocumento);
        if(this.validarResultado(RASHEPC)){arrayPoblacionGeneral.push(RASHEPC);}
        const FTTSIF = this.validarFechaTomaTamizajeSifilis(data, consecutivo, numeroDocumento);
        if(this.validarResultado(FTTSIF)){arrayPoblacionGeneral.push(FTTSIF);}
        const RTSIFIL = this.validarResultadoTamizajeSifilis(data, consecutivo, numeroDocumento);
        if(this.validarResultado(RTSIFIL)){arrayPoblacionGeneral.push(RTSIFIL);}
        const FVIH = this.validarFechaPruebaVIH(data, consecutivo, numeroDocumento);
        if(this.validarResultado(FVIH)){arrayPoblacionGeneral.push(FVIH);}
        const RVIH = this.validarResultadoVIH(data, consecutivo, numeroDocumento);
        if(this.validarResultado(RVIH)){arrayPoblacionGeneral.push(RVIH);}
        const FHEPATC = this.validarFechaTamizajeHepatitisC(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FHEPATC)){arrayPoblacionGeneral.push(FHEPATC);}
    }

    validarFechaPeso(data: any, consecutivo: any, numeroDocumento: any): any{
        if(!comodines.sinDato.test(data[29]) && parseInt(data[30]) === 999){
            return {mensaje:errorPoblacionGeneral.fechaPeso.errorRelacion + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento,posicion:[consecutivo, 29]};
        }
        if(comodines.sinDato.test(data[29]) && !comodines.sinDato.test(data[31])){
            return {mensaje:errorPoblacionGeneral.fechaPeso.errorRelacion2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento,posicion:[consecutivo, 29]};
        }
    }

    validarPesoKGS(data: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[29]);
        if(añoFecha > valorMinimo && parseInt(data[30]) === 999){
            return {mensaje:errorPoblacionGeneral.pesoKGS.errorRelacion + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento,posicion:[consecutivo, 30]};
        }
    }

    validarFechaTalla(data: any, consecutivo: any, numeroDocumento: any): any{
        if(!comodines.sinDato.test(data[31]) && parseInt(data[32]) === 999){
            return {mensaje:errorPoblacionGeneral.fechaTalla.errorRelacion + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo,31]};
        }
        if(!comodines.sinDato.test(data[29]) && comodines.sinDato.test(data[31])){
            return {mensaje:errorPoblacionGeneral.fechaTalla.errorRelacion2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo,31]};
        }
    }

    validarTallaCMS(data: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[31]);
        if(añoFecha > valorMinimo && parseInt(data[32]) === 999){
            return {mensaje:errorPoblacionGeneral.tallaCMS.errorRelacion + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 32]};
        }
    }

    validarResultadoTamizajeHepatitisC(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[110]);
        if(edad >= edadPermitida.edadMinima){
            if(parseInt(data[42]) === 0){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeHepatitisC.errorEdad + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 42]};
            }
            if(comodines.cincoComodines.test(data[110]) && parseInt(data[42]) !== 21){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeHepatitisC.errorRelacion2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 42]};
            }
            if(comodines.sinDato.test(data[110]) && parseInt(data[42]) !== 21){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeHepatitisC.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 42]};
            }
            if(añoFecha > valorMinimo && parseInt(data[42]) === 21){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeHepatitisC.errorRelacion + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 42]};
            }
        }else{
            if(parseInt(data[42]) !== 0){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeHepatitisC.errorEdad2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo,42]};
            }
        }
    }

    //APLICA PARA TODAS LAS EDADES
    validarFechaConsultaValoracionIntegral(data: any, consecutivo: any, numeroDocumento: any): any{}

    //APLICA PARA TODAS LAS EDADES
    validarFechaAntigenoSuperficieHepatitisB(data: any, consecutivo: any, numeroDocumento: any): any{}

    validarResultadoAntigenoSuperficieHepatitisB(data: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[78]);

        if(comodines.sinDato.test(data[78]) && parseInt(data[79]) !== 21){
            return {mensaje:errorPoblacionGeneral.resultadoAntigenoSuperficioHepatitisB.errorRelacion3 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo,79]};
        }
        if(comodines.noAplica.test(data[78]) && parseInt(data[79]) !== 0){
            return {mensaje:errorPoblacionGeneral.resultadoAntigenoSuperficioHepatitisB.errorRelacion4 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo,79]};
        }
        if(comodines.cincoComodines.test(data[78]) && parseInt(data[79]) !== 21){
            return {mensaje:errorPoblacionGeneral.resultadoAntigenoSuperficioHepatitisB.errorRelacion2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo,79]};
        }
        if(añoFecha > valorMinimo && parseInt(data[79]) === 21 ||
            añoFecha > valorMinimo && parseInt(data[79]) === 0){
                return {mensaje:errorPoblacionGeneral.resultadoAntigenoSuperficioHepatitisB.errorRelacion + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo,79]};
        }

    }

    validarFechaTomaTamizajeSifilis(data: any, consecutivo: any, numeroDocumento: any): any{
        if(sexoRegExp.test(data[10])){
            if(parseInt(data[14]) === 1 && comodines.noAplica.test(data[80])){
                return {mensaje:errorPoblacionGeneral.fechaTomaTamizajeSifilis.errorRelacion + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 80]};
            }
        }        
    }

    validarResultadoTamizajeSifilis(data: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[80]);
        if(sexoRegExp.test(data[10])){
            if(parseInt(data[14]) === 1 && añoFecha > valorMinimo && parseInt(data[81]) === 21 ||
            parseInt(data[14]) === 1 && añoFecha > valorMinimo && parseInt(data[81]) === 0){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeSifilis.errorRelacion + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 81]};
            }
            if(añoFecha > valorMinimo && parseInt(data[81]) === 21){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeSifilis.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 81]};
            }
            if(añoFecha > valorMinimo && parseInt(data[81]) === 0){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeSifilis.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 81]};
            }
            if(comodines.cincoComodines.test(data[80]) && parseInt(data[81]) !== 21){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeSifilis.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 81]};
            }
            if(comodines.noAplica.test(data[80]) && parseInt(data[81]) !== 0){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeSifilis.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 81]};
            }
            if(comodines.sinDato.test(data[80]) && parseInt(data[81]) !== 21){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeSifilis.errorRelacion4 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 81]};
            }
        }else{
            if(añoFecha > valorMinimo && parseInt(data[81]) === 21){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeSifilis.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 81]};
            }
            if(añoFecha > valorMinimo && parseInt(data[81]) === 0){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeSifilis.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 81]};
            }
            if(comodines.cincoComodines.test(data[80]) && parseInt(data[81]) !== 21){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeSifilis.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 81]};
            }
            if(comodines.noAplica.test(data[80]) && parseInt(data[81]) !== 0){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeSifilis.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 81]};
            }
            if(comodines.sinDato.test(data[80]) && parseInt(data[81]) !== 21){
                return {mensaje:errorPoblacionGeneral.resultadoTamizajeSifilis.errorRelacion4 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 81]};
            }
        }
    }

    validarFechaPruebaVIH(data: any, consecutivo: any, numeroDocumento: any): any{
        if(sexoRegExp.test(data[10])){
            if(parseInt(data[14]) === 1 && comodines.noAplica.test(data[82])){
                return {mensaje:errorPoblacionGeneral.fechaPruebaVIH.errorRelacion + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 82]};
            }
        }
    }

    validarResultadoVIH(data: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[82]);
        if(sexoRegExp.test(data[10])){
            if(parseInt(data[14]) === 1 && añoFecha > valorMinimo && parseInt(data[83]) === 21 ||
            parseInt(data[14]) === 1 && añoFecha > valorMinimo && parseInt(data[83]) === 0){
                return {mensaje:errorPoblacionGeneral.resultadoPruebaVIH.errorRelacion + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 83]};
            }
            if(añoFecha > valorMinimo && parseInt(data[83]) === 21){
                return {mensaje:errorPoblacionGeneral.resultadoPruebaVIH.errorRelacion2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 83]};
            }
            if(añoFecha > valorMinimo && parseInt(data[83]) === 0){
                return {mensaje:errorPoblacionGeneral.resultadoPruebaVIH.errorRelacion2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 83]};
            }
            if(comodines.cincoComodines.test(data[82]) && parseInt(data[83]) !== 21){
                return {mensaje:errorPoblacionGeneral.resultadoPruebaVIH.errorRelacion3 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 83]};
            }
            if(comodines.noAplica.test(data[82]) && parseInt(data[83]) !== 0){
                return {mensaje:errorPoblacionGeneral.resultadoPruebaVIH.errorRelacion4 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 83]};
            }
            if(comodines.sinDato.test(data[82]) && parseInt(data[83]) !== 21){
                return {mensaje:errorPoblacionGeneral.resultadoPruebaVIH.errorRelacion5 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 83]};
            }
        }else{
            if(añoFecha > valorMinimo && parseInt(data[83]) === 21){
                return {mensaje:errorPoblacionGeneral.resultadoPruebaVIH.errorRelacion2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 83]};
            }
            if(añoFecha > valorMinimo && parseInt(data[83]) === 0){
                return {mensaje:errorPoblacionGeneral.resultadoPruebaVIH.errorRelacion2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 83]};
            }
            if(comodines.cincoComodines.test(data[82]) && parseInt(data[83]) !== 21){
                return {mensaje:errorPoblacionGeneral.resultadoPruebaVIH.errorRelacion3 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 83]};
            }
            if(comodines.noAplica.test(data[82]) && parseInt(data[83]) !== 0){
                return {mensaje:errorPoblacionGeneral.resultadoPruebaVIH.errorRelacion4 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 83]};
            }
            if(comodines.sinDato.test(data[82]) && parseInt(data[83]) !== 21){
                return {mensaje:errorPoblacionGeneral.resultadoPruebaVIH.errorRelacion5 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 83]};
            }
        }
    }

    validarFechaTamizajeHepatitisC(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        //const añoFecha = this.obtenerFecha(data[110]);
        if(edad  >= edadPermitida.edadMinima){
            if(comodines.noAplica.test(data[110])){
                return {mensaje:errorPoblacionGeneral.fechaTamizajeHepatitisC.errorEdad2 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 110]};
            }
        }else{
            if(!comodines.noAplica.test(data[110])){
                return {mensaje:errorPoblacionGeneral.fechaTamizajeHepatitisC.errorEdad + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 110]};
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