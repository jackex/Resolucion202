import {Tuberculosis} from './Tuberculosis';

export class EstructuraTuberculosis extends Tuberculosis{

        SINTOMATICORESPIRATORIO: any;
        FECHATOMABACILOSCOPIADIAGNOSTICO: any;
        RESULTADOBCILOSCOPIADIAGNOSTICO: any;

        agregarDatosExcel(element: any){
            this.SINTOMATICORESPIRATORIO = new String(element['18_SintomaticoRespiratorio']);
            this.FECHATOMABACILOSCOPIADIAGNOSTICO = new String(element['112_FechaTomaBaciloscopiaDiagnóstico']);
            this.RESULTADOBCILOSCOPIADIAGNOSTICO = new String(element['113_ResultadoBaciloscopiaDiagnóstico']);
        }

        agregarDatos(data: Array<any>){
            this.SINTOMATICORESPIRATORIO = data[18];
            this.FECHATOMABACILOSCOPIADIAGNOSTICO = data[112];
            this.RESULTADOBCILOSCOPIADIAGNOSTICO = data[113];
        }

        validarTuberculosis(fechaMaximaDeReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any, estructuraTuberculosis: Array<any>){
            let SR = this.validarSintomaticoRespiratorio(this.SINTOMATICORESPIRATORIO, consecutivo, numeroIdentificacion);
            if(this.validarResultado(SR)){estructuraTuberculosis.push(SR)}
            let FTB = this.validarFechaTomaBaciloscopiaDiagnostico(this.FECHATOMABACILOSCOPIADIAGNOSTICO, fechaMaximaDeReporte, fechaNacimiento,
                consecutivo, numeroIdentificacion);
            if(this.validarResultado(FTB)){estructuraTuberculosis.push(FTB)}
            let RB = this.validarResultadoBaciloscopiaDiagnostico(this.RESULTADOBCILOSCOPIADIAGNOSTICO, consecutivo, numeroIdentificacion);
            if(this.validarResultado(RB)){estructuraTuberculosis.push(RB)}
        }

        validarResultado(value: any): boolean{
            if(value !== undefined){
                return true;
            }
            return false;
        }
}