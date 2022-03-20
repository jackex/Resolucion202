import {RecienNacido} from './RecienNacido';

export class EstructuraRecienNacido extends RecienNacido{

    RESULTADOTAMIZAJEAUDITIVONEONATAL: any;
    RESULTADOTAMIZAJEVISUALNEONATAL :any;
    RESULTADOTAMIZACIONOXIMETRIAPREYPOSTDUCTAL: any;
    FECHATAMIZACIONOXIMETRIAPREYPOSTDUCTAL: any;
    FEHATAMIZAJEAUDITIVONEONATAL: any;
    FECHATAMIZAJEVISUALNEONATAL: any;
    FECHATSHNEONATAL: any
    RESULTADOTSHNEONATAL: any;

    agregarDatosExcel(element: any){
        this.RESULTADOTAMIZAJEAUDITIVONEONATAL = new String(element['37_ResultadoTamizajeAuditivoNeonatal']);
        this.RESULTADOTAMIZAJEVISUALNEONATAL = new String(element['38_ResultadoTamizajeVisualNeonatal']);
        this.RESULTADOTAMIZACIONOXIMETRIAPREYPOSTDUCTAL = new String(element['48_ResultadoTamizaciónOximetriaPreYPostDuctal']);
        this.FECHATAMIZACIONOXIMETRIAPREYPOSTDUCTAL = new String(element['65_FechaTamizacionOximetriaPrePostDuctal']);
        this.FEHATAMIZAJEAUDITIVONEONATAL = new String(element['69_FechaTamizajeAuditivoNeonatal']);
        this.FECHATAMIZAJEVISUALNEONATAL = new String(element['75_FechaTamizajeVisualNeonatal']);
        this.FECHATSHNEONATAL = new String(element['84_FechaTSHNeonatal']);
        this.RESULTADOTSHNEONATAL = new String(element['85_ResultadoTSHNeonatal']);
    }

    agregarDatos(data: Array<any>){
        this.RESULTADOTAMIZAJEAUDITIVONEONATAL = data[37];
        this.RESULTADOTAMIZAJEVISUALNEONATAL = data[38];
        this.RESULTADOTAMIZACIONOXIMETRIAPREYPOSTDUCTAL = data[48];
        this.FECHATAMIZACIONOXIMETRIAPREYPOSTDUCTAL = data[65];
        this.FEHATAMIZAJEAUDITIVONEONATAL = data[69];
        this.FECHATAMIZAJEVISUALNEONATAL = data[75];
        this.FECHATSHNEONATAL = data[84];
        this.RESULTADOTSHNEONATAL = data[85];
    }

    validarRecienNacido(fechaMaximaDeReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any, estructuraRecienNacido: Array<any>){
        let RTAN  = this.validarResultadoTamizajeAuditivoNeonatal(this.RESULTADOTAMIZAJEAUDITIVONEONATAL, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RTAN)){estructuraRecienNacido.push(RTAN)}
        let RTVN = this.validarResultadoTamizajeVisualNeonatal(this.RESULTADOTAMIZAJEVISUALNEONATAL, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RTVN)){estructuraRecienNacido.push(RTVN)}
        let RTOPYP = this.validarResultadoTamizacionOximetriaPreYPostDuctal(this.RESULTADOTAMIZACIONOXIMETRIAPREYPOSTDUCTAL, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RTOPYP)){estructuraRecienNacido.push(RTOPYP)}
        let FTPYP = this.validarFechaTamizaciónOximetríaPreYPpostDuctal(this.FECHATAMIZACIONOXIMETRIAPREYPOSTDUCTAL, fechaMaximaDeReporte, fechaNacimiento,
            consecutivo, numeroIdentificacion);
        if(this.validarResultado(FTPYP)){estructuraRecienNacido.push(FTPYP)}
        let FTAN = this.validarFechaTamizajeAuditivoNeonatal(this.FEHATAMIZAJEAUDITIVONEONATAL, fechaMaximaDeReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FTAN)){estructuraRecienNacido.push(FTAN)}
        let FTVN = this.validarFechaTamizajeVisualNeonatal(this.FECHATAMIZAJEVISUALNEONATAL, fechaMaximaDeReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FTVN)){estructuraRecienNacido.push(FTVN)}
        let FTSH = this.validarFechaTSHNeonatal(this.FECHATSHNEONATAL, fechaMaximaDeReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FTSH)){estructuraRecienNacido.push(FTSH)}
        let RTSH = this.validarResultadoTSHNeonatal(this.RESULTADOTSHNEONATAL, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RTSH)){estructuraRecienNacido.push(RTSH)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}