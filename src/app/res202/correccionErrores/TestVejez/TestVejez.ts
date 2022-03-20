import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

const edadPermitida = {
    edadMinima: 60
};

export class CorregirTestVejez{

    corregirDatoTestVejez(data: any, errores: any, fechaSuperiorReporte: any): any{
        return this.corregirTestVejez(data, errores, fechaSuperiorReporte);
    }

    corregirTestVejez(data: any, errores: any, fechaSuperiorReporte: any):any{
        data = data.split(/\r\n|\n/);
    
        for (let index = 0; index < errores.length; index++) {
            if(errores[index].datoTestVejez.errores[0].length > 0){
                for(let i = 0; i < errores[index].datoTestVejez.errores[0].length; i++){
                    let fila = parseInt(errores[index].datoTestVejez.errores[0][i].posicion[0]);
                    let temp = data[fila].split('|');
                    CalcularEdad.prototype.calcularEdad(temp[9], fechaSuperiorReporte);
                    const edad = CalcularEdad.prototype.EDAD;
                    this.corregirResultadoPruebaMiniMentalState(temp, edad);
                    data[fila] = temp.join('|');
                }
           }
       }
        return data;
    }

    corregirResultadoPruebaMiniMentalState(data: any, edad: any){
        if(edad >= edadPermitida.edadMinima){
            if(parseInt(data[16]) === 0){data[16] = 21;}
        }else{
            if(parseInt(data[16]) !== 0){data[16] = 0;}
        }
    }

}