import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

const valorMinimo = 1900;

const edadPermitida = {
    edadMinimaMeses: 6,
    edadPrimeraInfancia: {años: 4, meses: 11, dias: 29},
    edadInfancia: 5,

}

const numeroTotalDientes ={
    primeraInfancia: 20,
    infancia: 32
}

const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};

export class CorregirCOP{

corregirDatosCOP(data: any, errores: any, fechaSuperiorReporte: any): any{
    return this.corregirCOP(data, errores, fechaSuperiorReporte);
}


corregirCOP(data: any, errores: any, fechaSuperiorReporte: any): any{
    const columnaCOPersona = 102;
    const columnaFechaAtencionSaludBucal = 76;
     data = data.split(/\r\n|\n/);

     for (let index = 0; index < errores.length; index++) {
         if(errores[index].datoCOP.errores[0].length > 0){
             for(let i = 0; i < errores[index].datoCOP.errores[0].length; i++){
                 let fila = parseInt(errores[index].datoCOP.errores[0][i].posicion[0]);
                 //let columna = parseInt(errores[index].datoCOP.errores[0][i].posicion[1]);
                     let temp = data[fila].split('|');
                         this.corregirFechaAtencionSaludBucalProfesionalOdontologia(temp, fechaSuperiorReporte);
                        this.corregirCOPPersona(temp, fechaSuperiorReporte);
                        data[fila] = temp.join('|');       
             }
        }
    }
     return data;            
}

corregirFechaAtencionSaludBucalProfesionalOdontologia(data: any, fechaSuperiorReporte: any): any{
    const añoFecha = this.obtenerFecha(data[76]);
    CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
    CalcularEdad.prototype.calcularDiasyMeses(data[9], fechaSuperiorReporte);
    let edadUsuario = CalcularEdad.prototype.EDAD;
    const mesesEdadusuario = CalcularEdad.prototype.NUMERODEMESES;
    const edad = [edadUsuario, mesesEdadusuario];
    if(edad[0] === 0 && edad[1] < edadPermitida.edadMinimaMeses){
        if(!comodines.noAplica.test(data[76])){
            data[76] = '1845-01-01';
        }
    }else{
        if(comodines.noAplica.test(data[76])){
            data[76] = '1800-01-01';
        }
        if(añoFecha > valorMinimo && parseInt(data[102]) === 21 ||
        añoFecha > valorMinimo && parseInt(data[102]) === 0){
            data[76] = '1800-01-01';
        }
    }
}

corregirCOPPersona(data: any, fechaSuperiorReporte: any){
    CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
    CalcularEdad.prototype.calcularDiasyMeses(data[9], fechaSuperiorReporte);
    let edadUsuario = CalcularEdad.prototype.EDAD;
    const mesesEdadusuario = CalcularEdad.prototype.NUMERODEMESES;
    const diasEdadUsuario = CalcularEdad.prototype.NUMERODEDIAS;
    const edad = [edadUsuario, mesesEdadusuario,diasEdadUsuario];
    //const longitud = data[102];
    const añoFecha = this.obtenerFecha(data[76]);
    if(edad[0] < 1 && edad[1] < edadPermitida.edadMinimaMeses){
        if(parseInt(data[102]) > 0){data[102] = 0;}
    }else{            
        if(comodines.cincoComodines.test(data[76]) && parseInt(data[102]) !== 21){
            data[102] = 21;
        }
        if(comodines.sinDato.test(data[76]) && parseInt(data[102]) !== 21){
            data[102] = 21;
        }
        if(comodines.noAplica.test(data[76]) && parseInt(data[102]) > 0){
            data[102] = 0;
        }
        if(añoFecha > valorMinimo && parseInt(data[102]) === 0 ||
            añoFecha > valorMinimo && parseInt(data[102]) === 21){
                data[102] = 21;
        }
        /*if(añoFecha > valorMinimo && longitud === 12){
            const temp = this.validarTotalDientes(data, edad, consecutivo, numeroDocumento);
            if(this.validarResultado(temp)){ return temp;}
        }*/
        
        
    }
}

validarTotalDientes(data: any, edad: any): any{
    let dientes = data[102];
    dientes = dientes.toString();
    const sanos = parseInt(dientes.substring(0,2));
    const cariesNoCavitacional = parseInt(dientes.substring(2, 4));
    const cariesCavitacional =  parseInt(dientes.substring(4, 6));
    const obturadosPorCaries =  parseInt(dientes.substring(6, 8));
    const perdidosPorCaries = parseInt(dientes.substring(8, 10));
    const totalDientes = parseInt(dientes.substring(10, 12));

    const sumatoria = sanos + cariesNoCavitacional + cariesCavitacional + obturadosPorCaries;
    
    if(sumatoria !== totalDientes){
        /*return  errorCOP.COPPersona.errorTotal + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento;*/
    }else{
        if(edad[0] < 1 && edad[1] < edadPermitida.edadMinimaMeses){            
            if(sumatoria > 0){
                data[102] = 0;
            }
        }else{
            /*if(edad[1] >= edadPermitida.edadMinimaMeses &&  edad[0] <= edadPermitida.edadPrimeraInfancia.años
                && edad[1] <= edadPermitida.edadPrimeraInfancia.meses && edad[2] <= edadPermitida.edadPrimeraInfancia.dias){
                   const sumatoria = sanos + cariesNoCavitacional + cariesCavitacional + obturadosPorCaries;
   
                   /*if(sumatoria > numeroTotalDientes.primeraInfancia){
                           return  errorCOP.COPPersona.errorPrimeraInfancia + " - consecutivo: "+ consecutivo +
                           " Documento: " + numeroDocumento;                    
                   }
           }   
           if(edad[0] > edadPermitida.edadPrimeraInfancia.años && edad[1] > edadPermitida.edadPrimeraInfancia.meses
                && edad[2] > edadPermitida.edadPrimeraInfancia.dias){
                   const sumatoria = sanos + cariesNoCavitacional + cariesCavitacional + obturadosPorCaries;
   
                   /*if(sumatoria > numeroTotalDientes.infancia){
                           return  errorCOP.COPPersona.errorInfancia + " - consecutivo: "+ consecutivo +
                           " Documento: " + numeroDocumento;                    
                   }
           }*/
        }
    }       
}

obtenerFecha(data: any): any{
    let fecha = data;
    fecha = fecha.split('-');
    return fecha[0];
}


}
