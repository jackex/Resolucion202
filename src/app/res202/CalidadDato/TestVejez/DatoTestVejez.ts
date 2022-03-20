import { errorTestVejez } from "./ErrorTestVejez";


const edadPermitida = {
    edadMinima: 60
};


export class DatoTestVejez{

    validarTestVejez(data: any, edad: any, consecutivo: any, numeroDocumento: any, arrayTestVejez: Array<any>): any{
        const RPRUMENTAL = this.validarResultadoPruebaMiniMentalState(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RPRUMENTAL)){arrayTestVejez.push(RPRUMENTAL);} 
    }

    validarResultadoPruebaMiniMentalState(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad >= edadPermitida.edadMinima){
            if(parseInt(data[16]) === 0){
                return {mensaje:errorTestVejez.resultadoPruebaMiniMentalState.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 16]};
            }
        }else{
            if(parseInt(data[16]) !== 0){
                return {mensaje:errorTestVejez.resultadoPruebaMiniMentalState.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 16]};
            }
        }
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}