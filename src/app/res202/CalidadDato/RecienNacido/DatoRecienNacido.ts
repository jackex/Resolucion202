import { errorRecienNacido } from "./ErrorRecienNacido";

const valorMinimo = 1900;
const edadPermitida = {
    edadMaximaAños: 0,
    edadMaximaMeses: 1,
    edadMaximadias: 30
};
const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};

export class DatoRecienNacido{

    validarRecienNacido(data: any, edad: any, consecutivo: any, numeroDocumento: any, arrayRecienNacido: Array<any>){
        const RTAN = this.validarResultadoTamizajeAuditivoNeonatal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RTAN)){arrayRecienNacido.push(RTAN);}
        const RTVN = this.validarResultadoTamizajeVisualNeonatal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RTVN)){arrayRecienNacido.push(RTVN);}
        const RTOPP = this.validarResultadoTamizacionOximetriaPrePostDuctal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RTOPP)){arrayRecienNacido.push(RTOPP);}
        const FTOPP = this.validarFechaTamizacionOximetriaPrePostDuctal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FTOPP)){arrayRecienNacido.push(FTOPP);}
        const FTAN = this.validarFechaTamizacionAuditivoNeonatal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FTAN)){arrayRecienNacido.push(FTAN);}
        const FTVN = this.validarFechaTamizajeVisualNeonatal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FTVN)){arrayRecienNacido.push(FTVN);}
        const VFTSH = this.validaFechaTSHNeonatal(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(VFTSH)){arrayRecienNacido.push(VFTSH);}
        const RTSH = this.validarResultadoTSH(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RTSH)){arrayRecienNacido.push(RTSH);}
    }

    validarResultadoTamizajeAuditivoNeonatal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[69]);
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses &&
            edad[2] <= edadPermitida.edadMaximadias){
                  if(parseInt(data[37]) === 4 && añoFecha < valorMinimo || parseInt(data[37]) === 5 && añoFecha < valorMinimo){
                        return {mensaje:errorRecienNacido.resultadoTamizajeAuditivoNeonatal.errorRelacion + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 37]};
                  }
                  if(parseInt(data[37]) === 0){
                    console.log("año "+edad[0] +" mes "+edad[1]+" dia "+edad[2]+ " consecutivo "+ consecutivo);
                        return {mensaje:errorRecienNacido.resultadoTamizajeAuditivoNeonatal.errorEdad2 + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 37]};
                  }
                  if(comodines.cincoComodines.test(data[69]) && parseInt(data[37]) !== 21){
                        return {mensaje:errorRecienNacido.resultadoTamizajeAuditivoNeonatal.errorRelacion2 + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 37]};
                  }
                  if(comodines.sinDato.test(data[69]) && parseInt(data[37]) !== 21){
                        return {mensaje:errorRecienNacido.resultadoTamizajeAuditivoNeonatal.errorRelacion3 + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 37]};
                  }
                  if(añoFecha > valorMinimo && parseInt(data[37]) === 21){
                        return {mensaje:errorRecienNacido.resultadoTamizajeAuditivoNeonatal.errorRelacion4 + " - consecutivo: "+ consecutivo +
                        " Documento: " + numeroDocumento, posicion:[consecutivo, 37]};
                  }
        }else{
            if(parseInt(data[37]) !== 0){
                console.log("año "+edad[0] +" mes "+edad[1]+" dia "+edad[2]+ " consecutivo "+ consecutivo);
                return {mensaje: errorRecienNacido.resultadoTamizajeAuditivoNeonatal.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 37]};
            }
        }
    }

    validarResultadoTamizajeVisualNeonatal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[75]);
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses 
            && edad[2] <= edadPermitida.edadMaximadias){
            if(parseInt(data[38]) === 4 && añoFecha < valorMinimo || parseInt(data[38]) === 5 && añoFecha < valorMinimo){
                return {mensaje:errorRecienNacido.resultadoTamizajeAuditivoNeonatal.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 38]};
             }
            if(parseInt(data[38]) === 0){
                return {mensaje:errorRecienNacido.resultadoTamizajeVisualNeonatal.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 38]};
              }
              if(comodines.cincoComodines.test(data[75]) && parseInt(data[38]) !== 21){
                return {mensaje:errorRecienNacido.resultadoTamizajeVisualNeonatal.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 38]};
              }
              if(comodines.sinDato.test(data[75]) && parseInt(data[38]) !== 21){
                return {mensaje:errorRecienNacido.resultadoTamizajeVisualNeonatal.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 38]};
              }
              if(añoFecha > valorMinimo && parseInt(data[38]) === 21){
                return {mensaje:errorRecienNacido.resultadoTamizajeVisualNeonatal.errorRelacion4 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 38]};
              }
        }else{
            if(parseInt(data[38]) !== 0){
                return {mensaje:errorRecienNacido.resultadoTamizajeVisualNeonatal.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 38]};
            }
        }
    }

    validarResultadoTamizacionOximetriaPrePostDuctal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let añoFecha = this.obtenerFecha(data[65]);
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses  
            && edad[2] <= edadPermitida.edadMaximadias){
            if(parseInt(data[48]) === 4 && añoFecha < valorMinimo || parseInt(data[48]) === 5 && añoFecha < valorMinimo){
                return {mensaje:errorRecienNacido.resultadoTamizacionOximetriaPrePostDuctal.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 48]};
             }
            if(parseInt(data[48]) === 0){
                return {mensaje:errorRecienNacido.resultadoTamizacionOximetriaPrePostDuctal.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 48]};
              }
              if(parseInt(data[48]) !== 21 && comodines.cincoComodines.test(data[65])){
                return {mensaje:errorRecienNacido.resultadoTamizacionOximetriaPrePostDuctal.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 48]};
              }
              if(parseInt(data[48]) !== 21 && comodines.sinDato.test(data[65])){
                return {mensaje:errorRecienNacido.resultadoTamizacionOximetriaPrePostDuctal.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 48]};
              }
              if(parseInt(data[48]) === 21 && añoFecha > valorMinimo){
                return {mensaje:errorRecienNacido.resultadoTamizacionOximetriaPrePostDuctal.errorRelacion4 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 48]};
              }
        }else{
            if(parseInt(data[48]) !== 0){
                return {mensaje:errorRecienNacido.resultadoTamizacionOximetriaPrePostDuctal.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 48]};
            }
        }
    }

    validarFechaTamizacionOximetriaPrePostDuctal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses  
            && edad[2] <= edadPermitida.edadMaximadias){
            if(comodines.noAplica.test(data[65])){
                return {mensaje: errorRecienNacido.fechaTamizacionOximetriaPrePostDuctal.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 65]};
            }
        }else{
            if(!comodines.noAplica.test(data[65])){
                return {mensaje: errorRecienNacido.fechaTamizacionOximetriaPrePostDuctal.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 65]};
            }
        }
    }

    validarFechaTamizacionAuditivoNeonatal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses 
             && edad[2] <= edadPermitida.edadMaximadias){
            if(comodines.noAplica.test(data[69])){
                return {mensaje: errorRecienNacido.fechaTamizacionAuditivoNeonatal.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 69]};
            }
        }else{
            if(!comodines.noAplica.test(data[69])){
                return {mensaje: errorRecienNacido.fechaTamizacionAuditivoNeonatal.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 69]};
            }
        }
    }

    validarFechaTamizajeVisualNeonatal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses 
            && edad[2] <= edadPermitida.edadMaximadias){
            if(comodines.noAplica.test(data[75])){
                return {mensaje:errorRecienNacido.fechaTamizajeVisualNeonatal.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 75]};
            }
        }else{
            if(!comodines.noAplica.test(data[75])){
                return {mensaje:errorRecienNacido.fechaTamizajeVisualNeonatal.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 75]};
            }
        }
    }

    validaFechaTSHNeonatal(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses 
            && edad[2] <= edadPermitida.edadMaximadias){
            if(comodines.noAplica.test(data[84])){
                return {mensaje: errorRecienNacido.fechaTSHNeonatal.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 84]};
            }
        }else{
            if(!comodines.noAplica.test(data[84])){
                return {mensaje: errorRecienNacido.fechaTSHNeonatal.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 84]};
            }
        }
    }
    
    validarResultadoTSH(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        const añoFecha = this.obtenerFecha(data[84]);
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses 
            && edad[2] <= edadPermitida.edadMaximadias){
            if(parseInt(data[85]) === 0){
                return {mensaje: errorRecienNacido.resultadoTSH.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 85]};
            }
            if(parseInt(data[85]) === 4 && añoFecha < valorMinimo || parseInt(data[85]) === 5 && añoFecha < valorMinimo){
                return {mensaje: errorRecienNacido.resultadoTSH.errorRelacion + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 85]};
            }
            if(comodines.cincoComodines.test(data[84]) && parseInt(data[85]) !== 21){
                return {mensaje: errorRecienNacido.resultadoTSH.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 85]};
            }
            if(comodines.sinDato.test(data[84]) && parseInt(data[85]) !== 21){
                return {mensaje: errorRecienNacido.resultadoTSH.errorRelacion3 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 85]};
            }
            if(añoFecha > valorMinimo && parseInt(data[85]) === 21){
                return {mensaje: errorRecienNacido.resultadoTSH.errorRelacion4 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 85]};
            }
        }else{
            if(parseInt(data[85]) !== 0){
                return {mensaje: errorRecienNacido.resultadoTSH.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 85]};
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