import {Test0a12Anios} from './Test0a12Anios';

export class EstructuraTest0a12Anios extends Test0a12Anios{

    RESULTADOTAMIZAJEVALE: any;
    FECHATAMIZAJEVALE: any;

    agregarDatosExcel(element: any){
        this.RESULTADOTAMIZAJEVALE = new String(element['40_ResultadoDeTamizajeVALE']);
        this.FECHATAMIZAJEVALE = new String(element['63_FechaDeTamizajeVALE']);
    }

    agregarDatos(data: Array<any>){
        this.RESULTADOTAMIZAJEVALE = data[40];
        this.FECHATAMIZAJEVALE = data[63];
    }

    validarTest0a12Anios(fechaMaximoReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any, estructura0a12Anios: Array<any>){
        let RVALE = this.validarResultadoTamizajeVALE(this.RESULTADOTAMIZAJEVALE, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RVALE)){estructura0a12Anios.push(RVALE)}
        let FVALE = this.validarFechaTamizajeVALE(this.FECHATAMIZAJEVALE, fechaMaximoReporte, fechaNacimiento,consecutivo, numeroIdentificacion);
        if(this.validarResultado(FVALE)){estructura0a12Anios.push(FVALE)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}