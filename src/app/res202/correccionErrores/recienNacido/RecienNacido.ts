import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

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

export class CorregirRecienNacido{

    corregirDatoRecienNacido(data: any, errores: any, fechaSuperiorReporte: any): any{
        return this.corregirRecienNacido(data, errores, fechaSuperiorReporte);
    }

    corregirRecienNacido(data: any, errores: any, fechaSuperiorReporte: any): any{
        data = data.split(/\r\n|\n/);
    
        for (let index = 0; index < errores.length; index++) {
            if(errores[index].datoRecienNacido.errores[0].length > 0){
                for(let i = 0; i < errores[index].datoRecienNacido.errores[0].length; i++){
                    let fila = parseInt(errores[index].datoRecienNacido.errores[0][i].posicion[0]);
                    let temp = data[fila].split('|');
                    CalcularEdad.prototype.calcularEdad(temp[9], fechaSuperiorReporte);
                    CalcularEdad.prototype.calcularDiasyMeses(temp[9], fechaSuperiorReporte);
                    const edadUsuario = CalcularEdad.prototype.EDAD;
                    const mesesEdadusuario = CalcularEdad.prototype.NUMERODEMESES;
                    const diasEdadUsuario = CalcularEdad.prototype.NUMERODEDIAS;
                    const datosEdad = [edadUsuario, mesesEdadusuario,diasEdadUsuario];
                    this.corregirResultadoTamizajeAuditivoNeonatal(temp, datosEdad);
                    this.corregirResultadoTamizajeVisualNeonatal(temp, datosEdad);
                    this.corregirResultadoTamizacionOximetriaPrePostDuctal(temp, datosEdad);
                    this.corregirFechaTamizacionOximetriaPrePostDuctal(temp, datosEdad);
                    this.corregirFechaTamizacionAuditivoNeonatal(temp, datosEdad);
                    this.corregirFechaTamizajeVisualNeonatal(temp, datosEdad);
                    this.corregirFechaTSHNeonatal(temp, datosEdad);
                    this.corregirResultadoTSH(temp, datosEdad);
                    data[fila] = temp.join('|');
                }
           }
       }
        return data;
    }

    corregirResultadoTamizajeAuditivoNeonatal(data: any, edad: any){
        let añoFecha = this.obtenerFecha(data[69]);
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses &&
            edad[2] <= edadPermitida.edadMaximadias){
                  if(parseInt(data[37]) === 4 && añoFecha < valorMinimo || parseInt(data[37]) === 5 && añoFecha < valorMinimo){
                        data[37] = 21;   
                  }
                  if(parseInt(data[37]) === 0){data[37] = 21;}
                  if(comodines.cincoComodines.test(data[69]) && parseInt(data[37]) !== 21){
                    data[37] = 21;
                  }
                  if(comodines.sinDato.test(data[69]) && parseInt(data[37]) !== 21){
                    data[37] = 21;
                  }
                  if(añoFecha > valorMinimo && parseInt(data[37]) === 21){
                    data[37] = 21;
                  }
        }else{
            if(parseInt(data[37]) !== 0){
                data[37] = 0;
            }
        }
    }

    corregirResultadoTamizajeVisualNeonatal(data: any, edad: any){
        let añoFecha = this.obtenerFecha(data[75]);
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses 
            && edad[2] <= edadPermitida.edadMaximadias){
            if(parseInt(data[38]) === 4 && añoFecha < valorMinimo || parseInt(data[38]) === 5 && añoFecha < valorMinimo){
                data[38] = 21;  
             }
            if(parseInt(data[38]) === 0){
                data[38] = 21;
              }
              if(comodines.cincoComodines.test(data[75]) && parseInt(data[38]) !== 21){
                data[38] = 21;
              }
              if(comodines.sinDato.test(data[75]) && parseInt(data[38]) !== 21){
                data[38] = 21;
              }
              /*if(añoFecha > valorMinimo && parseInt(data[38]) === 21){
                data[38] = 21;
              }*/
        }else{
            if(parseInt(data[38]) !== 0){
                data[38] = 0;
            }
        }
    }

    corregirResultadoTamizacionOximetriaPrePostDuctal(data: any, edad: any){
        let añoFecha = this.obtenerFecha(data[65]);
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses 
            && edad[2] <= edadPermitida.edadMaximadias){
            if(parseInt(data[48]) === 4 && añoFecha < valorMinimo || parseInt(data[48]) === 5 && añoFecha < valorMinimo){
                data[48] = 21;   
             }
            if(parseInt(data[48]) === 0){
                data[48] = 21;
              }
              if(parseInt(data[48]) !== 21 && comodines.cincoComodines.test(data[65])){
                data[48] = 21;
              }
              if(parseInt(data[48]) !== 21 && comodines.sinDato.test(data[65])){
                data[48] = 21;
              }
              if(parseInt(data[48]) === 21 && añoFecha > valorMinimo){
                data[48] = 21;
              }
        }else{
            if(parseInt(data[48]) !== 0){
                data[48] = 0;
            }
        }
    }

    corregirFechaTamizacionOximetriaPrePostDuctal(data: any, edad: any){
        let añoFecha = this.obtenerFecha(data[65]);
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses 
             && edad[2] <= edadPermitida.edadMaximadias){
            if(comodines.noAplica.test(data[65])){data[65] = '1800-01-01';}
            if(añoFecha > valorMinimo && parseInt(data[48]) === 21){data[65] = '1800-01-01';}
        }else{
            if(!comodines.noAplica.test(data[65])){data[65] = '1845-01-01'; }
        }
    }

    corregirFechaTamizacionAuditivoNeonatal(data: any, edad: any){
        let añoFecha = this.obtenerFecha(data[69]);
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses 
             && edad[2] <= edadPermitida.edadMaximadias){
            if(comodines.noAplica.test(data[69])){data[69] = '1800-01-01';}
            if(añoFecha > valorMinimo && parseInt(data[37]) === 21){data[69] = '1800-01-01';}
        }else{
            if(!comodines.noAplica.test(data[69])){data[69] = '1800-01-01';}
        }
    }

    corregirFechaTamizajeVisualNeonatal(data: any, edad: any){
        let añoFecha = this.obtenerFecha(data[75]);
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses  
            && edad[2] <= edadPermitida.edadMaximadias){
            if(comodines.noAplica.test(data[75])){data[75] = '1800-01-01';}
            if(añoFecha > valorMinimo && parseInt(data[38]) === 21){data[75] = '1800-01-01';}
        }else{
            if(!comodines.noAplica.test(data[75])){data[75] = '1845-01-01'; }
        }
    }

    corregirFechaTSHNeonatal(data: any, edad: any){
        let añoFecha = this.obtenerFecha(data[84]);
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses  
            && edad[2] <= edadPermitida.edadMaximadias){
            if(comodines.noAplica.test(data[84])){data[84] = '1800-01-01';}
            if(añoFecha > valorMinimo && parseInt(data[85]) === 21){data[84] = '1800-01-01';}
        }else{
            if(!comodines.noAplica.test(data[84])){data[84] = '1845-01-01';}
        }
    }

    corregirResultadoTSH(data: any, edad: any){
        const añoFecha = this.obtenerFecha(data[84]);
        if(edad[0] === edadPermitida.edadMaximaAños && edad[1] < edadPermitida.edadMaximaMeses 
            && edad[2] <= edadPermitida.edadMaximadias){
            if(parseInt(data[85]) === 0){data[85] = 21;}
            if(parseInt(data[85]) === 4 && añoFecha < valorMinimo || parseInt(data[85]) === 5 && añoFecha < valorMinimo){
                data[85] = 21;
            }
            if(comodines.cincoComodines.test(data[84]) && parseInt(data[85]) !== 21){
                data[85] = 21;
            }
            if(comodines.sinDato.test(data[84]) && parseInt(data[85]) !== 21){
                data[85] = 21;
            }
            /*if(añoFecha > valorMinimo && parseInt(data[85]) === 21){
                data[85] = 21;
            }*/
        }else{
            if(parseInt(data[85]) !== 0){data[85] = 0; }
        }
    }

    obtenerFecha(data: any): any{
        let fecha = data;
        fecha = fecha.split('-');
        return fecha[0];
    }

}