import { errorDatoAgudezaVisual } from './ErroresAgudezaVisual';

const comodines = {
    noAplica: /^(1845\-01\-01$)/,
    sinDato: /^(1800\-01\-01$)/,
    otrosComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
}

const valorMinimo = 1900;
const edadMinima = 3;

export class DatoAgudezaVisual{
  
    
validarDatosAgudezaViual(data: Array<any>, edad: any, consecutivo: any, numeroDocumento: any, arrayAgudezaVisual: Array<any>){
    const OD = this.validarDatoAgudezaVisualOjoIzquierdo(data, edad, consecutivo, numeroDocumento);
    if(this.validarResultado(OD)){arrayAgudezaVisual.push(OD);}
    const OI = this.validarDatoAgudezaVisualOjoDerecho(data, edad, consecutivo, numeroDocumento);
    if(this.validarResultado(OI)){arrayAgudezaVisual.push(OI);}
    const FAV = this.validarFechaAgudezaVisual(data, edad, consecutivo, numeroDocumento);
    if(this.validarResultado(FAV)){arrayAgudezaVisual.push(FAV)}
}

obtenerFecha(data: any): any{
    let fecha = data[62];
    fecha = fecha.split('-');
    return fecha[0];
}

validarDatoAgudezaVisualOjoIzquierdo(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
    let fecha = this.obtenerFecha(data);
    if(edad < edadMinima){
        if(parseInt(data[27]) > 0 && comodines.sinDato.test(data[62]) || comodines.otrosComodines.test(data[62]) ||
            parseInt(fecha) >= valorMinimo){
            return {mensaje: errorDatoAgudezaVisual.AgudezaVisualLejanaOjoIzquierdo.noAplicaEdad + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 27]};
        }
    }else{
        if(parseInt(data[27]) === 0 && comodines.sinDato.test(data[62]) || parseInt(data[27]) === 0 && comodines.noAplica.test(data[62]) ||
        parseInt(data[27]) === 0 && parseInt(fecha) >= valorMinimo){
            return {mensaje: errorDatoAgudezaVisual.AgudezaVisualLejanaOjoIzquierdo.sinDatosComodin + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 27]};
        }
        if(parseInt(data[27]) === 21 && comodines.noAplica.test(data[62])){
            return {mensaje: errorDatoAgudezaVisual.AgudezaVisualLejanaOjoIzquierdo.noAplicaEdad + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 27]};
        }
    }  
}

validarDatoAgudezaVisualOjoDerecho(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
    let fecha = this.obtenerFecha(data);
    if(edad < edadMinima){
        if(parseInt(data[28]) > 0 && comodines.sinDato.test(data[62]) || comodines.otrosComodines.test(data[62]) ||
            parseInt(fecha) >= valorMinimo){
            return {mensaje: errorDatoAgudezaVisual.AgudezaVisualLejanaOjoDerecho.noAplicaEdad + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 28]};
        }
    }else{
        if(parseInt(data[28]) === 0 && comodines.sinDato.test(data[62]) || parseInt(data[28]) === 0 && comodines.noAplica.test(data[62]) ||
        parseInt(data[28]) === 0 && parseInt(fecha) >= valorMinimo){
            return {mensaje: errorDatoAgudezaVisual.AgudezaVisualLejanaOjoDerecho.sinDatosComodin + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 28]};
        }
        if(parseInt(data[28]) === 21 && comodines.noAplica.test(data[62])){
            return {mensaje: errorDatoAgudezaVisual.AgudezaVisualLejanaOjoDerecho.noAplicaEdad + " - consecutivo: "+ consecutivo +
            " Documento: " + numeroDocumento, posicion:[consecutivo, 28]};
        }
    }  
}

validarFechaAgudezaVisual(data: any, edad: any, consecutivo: any, numeroDocumento: any): any{
    let fecha = this.obtenerFecha(data);
    if(edad < edadMinima){
        if(parseInt(fecha) < valorMinimo){
            if(!comodines.noAplica.test(data[62]) || comodines.otrosComodines.test(data[62]) || comodines.sinDato.test(data[62])){
                return {mensaje: errorDatoAgudezaVisual.errorFechaAgudezaVisual.invalidData + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 62]};
            }
        }else{
            if(parseInt(fecha) >= valorMinimo){
                return {mensaje: errorDatoAgudezaVisual.errorFechaAgudezaVisual.invalidData + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 62]};
            }
        }        
    }else{
        if(parseInt(fecha) < valorMinimo){
            if(comodines.noAplica.test(data[62])){
                return {mensaje: errorDatoAgudezaVisual.errorFechaAgudezaVisual.noAplicaComodin + " - consecutivo: "+ consecutivo +
                " Documento: " + numeroDocumento, posicion:[consecutivo, 62]};
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