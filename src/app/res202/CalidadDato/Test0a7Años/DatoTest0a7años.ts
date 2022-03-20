import { errorTest0a12Años } from "./ErrorTest0a7Años";

const edadPermitida = {
    edadMaxima: 7,
    edadMaximaMeses: 11,
    edadMaximaDias: 29
};

export class DatoTest0a7Años{
    
     validarTest0a7Años(data: any, edad: any, consecutivo: any, numeroDocumento: any, arrayTestoa7años: Array<any>){
        const RESCABMG = this.validarResultadoEscalaAbrevMotriGruesa(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RESCABMG)){arrayTestoa7años.push(RESCABMG);}
        const RESCFINAD = this.validarResultadoEscalaAbrevMotriFinoAdapt(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RESCFINAD)){arrayTestoa7años.push(RESCFINAD);}
        const RESCMOTPERS = this.validarResultadoEscalaAbrevMotriPersonalSoc(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RESCMOTPERS)){arrayTestoa7años.push(RESCMOTPERS);}
        const RESCMOTLENG = this.validarResultadoEscalaAbrevMotriAudicLeng(data, edad, consecutivo, numeroDocumento);
        if(this.validarResultado(RESCMOTLENG)){arrayTestoa7años.push(RESCMOTLENG);}
     }

     validarResultadoEscalaAbrevMotriGruesa(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] === edadPermitida.edadMaxima &&
            edad[1] <= edadPermitida.edadMaximaMeses && edad[2] <= edadPermitida.edadMaximaDias){
                if(parseInt(data[43]) === 0){
                    return {mensaje:errorTest0a12Años.resultadoEscalaAbrevMotriGruesa.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 43]};
                }
        }else{
            if(edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[43]) === 0){
                    return {mensaje:errorTest0a12Años.resultadoEscalaAbrevMotriGruesa.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 43]};
                }
            }else{
                if(parseInt(data[43]) !== 0){
                    return {mensaje:errorTest0a12Años.resultadoEscalaAbrevMotriGruesa.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 43]};
                }
            }
        }
     }

     validarResultadoEscalaAbrevMotriFinoAdapt(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] === edadPermitida.edadMaxima &&
            edad[1] <= edadPermitida.edadMaximaMeses && edad[2] <= edadPermitida.edadMaximaDias){
                if(parseInt(data[44]) === 0){
                    return {mensaje:errorTest0a12Años.resultadoEscalaAbrevMotriFinoAdapt.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 44]};
                }
        }else{
            if(edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[44]) === 0){
                    return {mensaje:errorTest0a12Años.resultadoEscalaAbrevMotriFinoAdapt.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 44]};
                }
            }else{
                if(parseInt(data[44]) !== 0){
                    return {mensaje:errorTest0a12Años.resultadoEscalaAbrevMotriFinoAdapt.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 44]};
                }
            }
        }
     }

     validarResultadoEscalaAbrevMotriPersonalSoc(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] === edadPermitida.edadMaxima &&
            edad[1] <= edadPermitida.edadMaximaMeses && edad[2] <= edadPermitida.edadMaximaDias){
                if(parseInt(data[45]) === 0){
                    return {mensaje:errorTest0a12Años.resultadoEscalaAbrevMotriPersonalSoc.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 45]};
                }
        }else{
            if(edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[45]) === 0){
                    return {mensaje:errorTest0a12Años.resultadoEscalaAbrevMotriPersonalSoc.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 45]};
                }
            }else{
                if(parseInt(data[45]) !== 0){
                    return {mensaje:errorTest0a12Años.resultadoEscalaAbrevMotriPersonalSoc.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 45]};
                }
            }
        }
     }

     validarResultadoEscalaAbrevMotriAudicLeng(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
        if(edad[0] === edadPermitida.edadMaxima &&
            edad[1] <= edadPermitida.edadMaximaMeses && edad[2] <= edadPermitida.edadMaximaDias){
                if(parseInt(data[46]) === 0){
                    return {mensaje:errorTest0a12Años.resultadoEscalaAbrevMotriAudicLeng.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 46]};
                }
        }else{
            if(edad[0] < edadPermitida.edadMaxima){
                if(parseInt(data[46]) === 0){
                    return {mensaje:errorTest0a12Años.resultadoEscalaAbrevMotriAudicLeng.errorEdad + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 46]};
                }
            }else{
                if(parseInt(data[46]) !== 0){
                    return {mensaje:errorTest0a12Años.resultadoEscalaAbrevMotriAudicLeng.errorEdad2 + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 46]};
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

}