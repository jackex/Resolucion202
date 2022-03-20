import { CalcularEdad } from '../../CalidadDato/CalcularEdad';

const valorMinimo = 1900;
const edadMinima = 3;

const comodines = {
    noAplica: /^(1845\-01\-01$)/,
    sinDato: /^(1800\-01\-01$)/,
    otrosComodines: /^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)/
}

export class CorregirAgudezaVisual{

    corregirDatosAgudezaVisual(data: any, errores: any, fechaSuperiorReporte: any): any{
        data = this.corregirAgudezaVisual(data, errores, fechaSuperiorReporte);
        return data;
    }

    obtenerFecha(data: any): any{
        let fecha = data[62];
        fecha = fecha.split('-');
        return fecha[0];
    }

    corregirAgudezaVisual(data: any, errores: any, fechaSuperiorReporte: any): any{
        data = data.split(/\r\n|\n/);

        for (let index = 0; index < errores.length; index++) {
            if(errores[index].datoAgudezaVisual.errores[0].length > 0){
                for(let i = 0; i < errores[index].datoAgudezaVisual.errores[0].length; i++){
                    let fila = parseInt(errores[index].datoAgudezaVisual.errores[0][i].posicion[0]);
                   // let columna = parseInt(errores[index].datoAgudezaVisual.errores[0][i].posicion[1]);
                        let temp = data[fila].split('|');
                            this.datoAgudezaVisualOjoIzquierdo(temp, fechaSuperiorReporte);
                            this.datoAgudezaVisualOjoDerecho(temp, fechaSuperiorReporte);
                            this.datoFechaValoracionAgudezavisual(temp, fechaSuperiorReporte);
                            data[fila] = temp.join('|');              
                }
            }            
        }
        return data;
    }

    datoAgudezaVisualOjoIzquierdo(data: any, fechaSuperiorReporte: any){
        let fecha = this.obtenerFecha(data);
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        if(edad < edadMinima){
            if(parseInt(data[27]) !== 0){data[27] = 0;}
        }else{
            if(parseInt(data[27]) === 0){data[27] = 21;}
            if(parseInt(data[27]) !== 21 && comodines.otrosComodines.test(data[62])){data[27] = 21;}
            if(parseInt(data[27]) !== 21 && comodines.sinDato.test(data[62])){data[27] = 21;}
            if(parseInt(data[27]) !== 21 && comodines.noAplica.test(data[62])){data[27] = 21;}
            if(parseInt(data[27]) !== 0 && parseInt(data[27]) !== 21 && parseInt(fecha) < valorMinimo){
                data[27] = 21;
            }
        }  
    }

    datoAgudezaVisualOjoDerecho(data: any, fechaSuperiorReporte: any){
        let fecha = this.obtenerFecha(data);
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        if(edad < edadMinima){
            if(parseInt(data[28]) !== 0){data[28] = 0;}
        }else{
            if(parseInt(data[28]) === 0){data[28] = 21;}
            if(parseInt(data[28]) !== 21 && comodines.otrosComodines.test(data[62])){data[28] = 21;}
            if(parseInt(data[28]) !== 21 && comodines.sinDato.test(data[62])){data[28] = 21;}
            if(parseInt(data[28]) !== 0 && parseInt(data[28]) !== 21 && parseInt(fecha) < valorMinimo){
                data[28] = 21;
            }
        }  
    }

    datoFechaValoracionAgudezavisual(data: any, fechaSuperiorReporte: any){
        let fecha = this.obtenerFecha(data);
        CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
        let edad = CalcularEdad.prototype.EDAD;
        if(edad < edadMinima){
            if(!comodines.noAplica.test(data[62])){data[62] = '1845-01-01';}
        }else{
            if(parseInt(fecha) < valorMinimo){
                if(comodines.noAplica.test(data[62])){data[62] = '1800-01-01';}
                if(parseInt(data[27]) === 21 && parseInt(data[28]) === 21 && !comodines.sinDato.test(data[62]) &&
                    parseInt(data[27]) === 21 && parseInt(data[28]) === 21 && !comodines.otrosComodines.test(data[62])){
                    data[62] = '1800-01-01';
                }
                if(parseInt(data[27]) !== 0 && parseInt(data[27]) !== 21 && parseInt(data[28]) !== 0 && parseInt(data[28]) !== 21 &&
                parseInt(fecha) < valorMinimo && !comodines.sinDato.test(data[62])){
                    data[62] = '1800-01-01';
                }
                
            }
        }
    }



}