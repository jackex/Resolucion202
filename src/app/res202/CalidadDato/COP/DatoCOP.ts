import { errorCOP } from "./ErrorCOP";

const valorMinimo = 1900;

const edadPermitida = {
    edadMinimaMeses: 6,
    edadPrimeraInfancia: {años: 4, meses: 11, dias: 29},
    edadInfancia: 5,

}

const numeroTotalDientes ={
    primeraInfancia: 22,
    infancia: 32
}

const comodines = {
    sinDato: /^(1800\-01\-01$)/,
    noAplica: /^(1845\-01\-01$)/,
    cincoComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
};

export class DatoCOP{

    validarCOP(data: any, edad: any, consecutivo: any, numeroDocumento: any, arrayCOP: Array<any>){
        const FCOP = this.validarFechaAtencionSaludBucalProfesionalOdontologia(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(FCOP)){arrayCOP.push(FCOP);}
        const COP = this.validarCOPPersona(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(COP)){arrayCOP.push(COP);}
    }

    validarFechaAtencionSaludBucalProfesionalOdontologia(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] === 0 && edad[1] < edadPermitida.edadMinimaMeses){
            if(!comodines.noAplica.test(data[76])){
                return  {mensaje:errorCOP.fechaSaludBucalProfesionalOdontologia.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento,posicion:[consecutivo, 76]};
            }
        }else{
            if(comodines.noAplica.test(data[76])){
                return  {mensaje:errorCOP.fechaSaludBucalProfesionalOdontologia.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 76]};
            }
        }
    }

    validarCOPPersona(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let longitud = data[102].toString();
        longitud = longitud.length;
        const añoFecha = this.obtenerFecha(data[76]);
        if(edad[0] === 0 && edad[1] < edadPermitida.edadMinimaMeses){ 
            if(parseInt(data[102]) > 0){
                return  {mensaje:errorCOP.COPPersona.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento,posicion:[consecutivo,102]};
            }
        }else{        
            if(comodines.cincoComodines.test(data[76]) && parseInt(data[102]) !== 21){
                return  {mensaje:errorCOP.COPPersona.errorRelacion + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento,posicion:[consecutivo,102]};
            }
            if(comodines.sinDato.test(data[76]) && parseInt(data[102]) !== 21){
                return  {mensaje:errorCOP.COPPersona.errorRelacion3 + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento,posicion:[consecutivo,102]};
            }
            /*if(comodines.noAplica.test(data[76]) && parseInt(data[102]) > 0){
                return  {mensaje:errorCOP.COPPersona.errorRelacion2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento,posicion:[consecutivo,102]};
            }*/
            if(añoFecha > valorMinimo && parseInt(data[102]) === 0 && longitud === 1 ||
                añoFecha > valorMinimo && parseInt(data[102]) === 21){
                    return  {mensaje:errorCOP.COPPersona.errorRelacion4 + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento,posicion:[consecutivo,102]};
            }
            if(añoFecha > valorMinimo && longitud === 12){
                const temp = this.validarTotalDientes(data, edad, consecutivo, numeroDocumento);
                if(this.validarResultado(temp)){ return temp;}
            }
            
            
        }
    }

    validarTotalDientes(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        let dientes = data[102];
        dientes = dientes.toString();
        const sanos = parseInt(dientes.substring(0,2));
        const cariesNoCavitacional = parseInt(dientes.substring(2, 4));
        const cariesCavitacional =  parseInt(dientes.substring(4, 6));
        const obturadosPorCaries =  parseInt(dientes.substring(6, 8));
       // const perdidosPorCaries = parseInt(dientes.substring(8, 10));
        const totalDientes = parseInt(dientes.substring(10, 12));

        const sumatoria = sanos + cariesNoCavitacional + cariesCavitacional + obturadosPorCaries;
        
        if(sumatoria !== totalDientes){
            return  {mensaje:errorCOP.COPPersona.errorTotal + " - consecutivo: "+ consecutivo +
                    " Documento: " + numeroDocumento, posicion:[consecutivo,102]};
        }else{
            if(edad[0] < 1 && edad[1] < edadPermitida.edadMinimaMeses){            
                if(sumatoria > 0){
                    return  {mensaje:errorCOP.COPPersona.errorInfancia + " - consecutivo: "+ consecutivo +
                               " Documento: " + numeroDocumento,posicion:[consecutivo,102]};
                }
            }else{
                if(edad[1] >= edadPermitida.edadMinimaMeses &&  edad[0] <= edadPermitida.edadPrimeraInfancia.años
                    /*&& edad[1] <= edadPermitida.edadPrimeraInfancia.meses && edad[2] <= edadPermitida.edadPrimeraInfancia.dias*/){
                       const sumatoria = sanos + cariesNoCavitacional + cariesCavitacional + obturadosPorCaries;
       
                       if(sumatoria > numeroTotalDientes.primeraInfancia){
                               return  {mensaje:errorCOP.COPPersona.errorPrimeraInfancia + " - consecutivo: "+ consecutivo +
                               " Documento: " + numeroDocumento,posicion:[consecutivo,102]};                    
                       }
               }   
               if(edad[0] > edadPermitida.edadPrimeraInfancia.años/* && edad[1] > edadPermitida.edadPrimeraInfancia.meses
                    && edad[2] > edadPermitida.edadPrimeraInfancia.dias*/){
                       const sumatoria = sanos + cariesNoCavitacional + cariesCavitacional + obturadosPorCaries;
       
                       if(sumatoria > numeroTotalDientes.infancia){
                               return  {mensaje:errorCOP.COPPersona.errorInfancia + " - consecutivo: "+ consecutivo +
                               " Documento: " + numeroDocumento,posicion:[consecutivo,102]};                    
                       }
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