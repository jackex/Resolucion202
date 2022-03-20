import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

const edadPermitida = {
    edadMaxima: 7,
    edadMaximaMeses: 11,
    edadMaximaDias: 29
};

export class CorregirTest0a7Anios{

    corregirDatoTest0a7Anios(data: any, errores: any, fechaSuperiorReporte: any): any{
        return this.corregirTest0a7Anios(data, errores, fechaSuperiorReporte);
    }

    corregirTest0a7Anios(data: any, errores: any, fechaSuperiorReporte: any): any{
        data = data.split(/\r\n|\n/);
    
        for (let index = 0; index < errores.length; index++) {
            if(errores[index].datoTest0a7Anios.errores[0].length > 0){
                for(let i = 0; i < errores[index].datoTest0a7Anios.errores[0].length; i++){
                    let fila = parseInt(errores[index].datoTest0a7Anios.errores[0][i].posicion[0]);
                    console.log(errores[index].datoTest0a7Anios.errores[0][i]);
                    let temp = data[fila].split('|');
                    CalcularEdad.prototype.calcularEdad(temp[9], fechaSuperiorReporte);
                    CalcularEdad.prototype.calcularDiasyMeses(temp[9], fechaSuperiorReporte);
                    const edadUsuario = CalcularEdad.prototype.EDAD;
                    const mesesEdadusuario = CalcularEdad.prototype.NUMERODEMESES;
                    const diasEdadUsuario = CalcularEdad.prototype.NUMERODEDIAS;
                    const datosEdad = [edadUsuario, mesesEdadusuario,diasEdadUsuario];
                    this.corregirResultadoEscalaAbrevMotriGruesa(temp, datosEdad);
                    this.corregirResultadoEscalaAbrevMotriFinoAdapt(temp, datosEdad);
                    this.corregirResultadoEscalaAbrevMotriPersonalSoc(temp, datosEdad);
                    this.corregirResultadoEscalaAbrevMotriAudicLeng(temp, datosEdad);
                    data[fila] = temp.join('|');
                }
           }
       }
        return data;
    }

    corregirResultadoEscalaAbrevMotriGruesa(data: any, edad: any){
        if(edad[0] === edadPermitida.edadMaxima &&
            edad[1] <= edadPermitida.edadMaximaMeses && edad[2] <= edadPermitida.edadMaximaDias){
                if(parseInt(data[43]) === 0){data[43] = 21;}
        }else{
            if(edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[43]) === 0){data[43] = 21;}
            }else{
                if(parseInt(data[43]) !== 0){data[43] = 0;}
            }
        }
     }

     corregirResultadoEscalaAbrevMotriFinoAdapt(data: any, edad: any){
        if(edad[0] === edadPermitida.edadMaxima &&
            edad[1] <= edadPermitida.edadMaximaMeses && edad[2] <= edadPermitida.edadMaximaDias){
                if(parseInt(data[44]) === 0){data[44] = 21;}
        }else{
            if(edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[44]) === 0){data[44] = 21;}
            }else{
                if(parseInt(data[44]) !== 0){data[44] = 0;}
            }
        }
     }

     corregirResultadoEscalaAbrevMotriPersonalSoc(data: any, edad: any){
        if(edad[0] === edadPermitida.edadMaxima &&
            edad[1] <= edadPermitida.edadMaximaMeses && edad[2] <= edadPermitida.edadMaximaDias){
                if(parseInt(data[45]) === 0){data[45] = 21;}
        }else{
            if(edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[45]) === 0){data[45] = 21;}
            }else{
                if(parseInt(data[45]) !== 0){data[45] = 0;}
            }
        }
     }

     corregirResultadoEscalaAbrevMotriAudicLeng(data: any, edad: any){
        if(edad[0] === edadPermitida.edadMaxima &&
            edad[1] <= edadPermitida.edadMaximaMeses && edad[2] <= edadPermitida.edadMaximaDias){
                if(parseInt(data[46]) === 0){data[46] = 21;}
        }else{
            if(edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[46]) === 0){data[46] = 21;}
            }else{
                if(parseInt(data[46]) !== 0){data[46] = 0;}
            }
        }
     }


}