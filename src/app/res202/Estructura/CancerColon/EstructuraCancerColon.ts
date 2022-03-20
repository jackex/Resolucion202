import {CancerColon} from './CancerColon';

export class EstructuraCancerColon extends CancerColon{

    RESULTADOPRUEBASANGREOCULTAMATERIAFECAL: any;
    RESULTADOCOLONOSCOPIATAMIZAJE: any;
    FECHAREALIZACIONCOLONOSCOPIATAMIZAJE: any;
    FECHAPRUEBASANGREOCULTAMATERIAFECAL: any;

    agregarDatosExcel(element: any){
        this.RESULTADOPRUEBASANGREOCULTAMATERIAFECAL = new String(element['24_ResultadoPruebaSangreOcultaMateriaFecal']);
        this.RESULTADOCOLONOSCOPIATAMIZAJE = new String(element['36_ResultadoColonoscopiaTamizaje']);
        this.FECHAREALIZACIONCOLONOSCOPIATAMIZAJE = new String(element['66_FechaDeRealizaciónColonoscopiaTamizaje']);
        this.FECHAPRUEBASANGREOCULTAMATERIAFECAL = new String(element['67_FechaPruebaSangreOcultaMateriaFecalTamizaje']);
    }

    agregarDatos(data: Array<any>){
        this.RESULTADOPRUEBASANGREOCULTAMATERIAFECAL = data[24];
        this.RESULTADOCOLONOSCOPIATAMIZAJE = data[36];
        this.FECHAREALIZACIONCOLONOSCOPIATAMIZAJE = data[66];
        this.FECHAPRUEBASANGREOCULTAMATERIAFECAL = data[67];
    }

    validarCancerColon(fechaMaximaDeReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any, EstructuraCancerColon: Array<any>){
       let PSO = this.validarResultadoPruebaSangreOcultaMateriaFecal(this.RESULTADOPRUEBASANGREOCULTAMATERIAFECAL, consecutivo, numeroIdentificacion);
       if(this.validarResultado(PSO)){EstructuraCancerColon.push(PSO)}
       let RCT = this.validarResultadoColonoscopiaTamizaje(this.RESULTADOCOLONOSCOPIATAMIZAJE, consecutivo, numeroIdentificacion);
       if(this.validarResultado(RCT)){EstructuraCancerColon.push(RCT)}
        let FRCT = this.validarFechaRealizaciónColonoscopiaTamizaje(this.FECHAREALIZACIONCOLONOSCOPIATAMIZAJE,fechaMaximaDeReporte, fechaNacimiento,
            consecutivo, numeroIdentificacion);
        if(this.validarResultado(FRCT)){EstructuraCancerColon.push(FRCT)}
        let FPSO = this.validarFechaPruebaSangreOcultaMateriaFecal(this.FECHAPRUEBASANGREOCULTAMATERIAFECAL, fechaMaximaDeReporte, fechaNacimiento, 
            consecutivo, numeroIdentificacion);
        if(this.validarResultado(FPSO)){EstructuraCancerColon.push(FPSO)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}