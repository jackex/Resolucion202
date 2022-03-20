import {Cop} from './Cop';

export class EstructuraCOP extends Cop{

    FECHAATENCIONSALUDBUCAL: any;
    COPPORPERSONA: any;

    agregarDatosExcel(element: any){
        this.FECHAATENCIONSALUDBUCAL = new String(element['76_FechatAencionSaludBucalProfesionalOdontologia']);
        this.COPPORPERSONA = new String(element['102_COPPorPersona']);
    }

    agregarDatos(data: Array<any>){
        this.FECHAATENCIONSALUDBUCAL = data[76];
        this.COPPORPERSONA = data[102];
    }

    ValidarCOP(fechaMaximoReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any, estructuraCOP: Array<any>){
        let FSB = this.validarFechaAtenSaludBucalPorProfesOdontologia(this.FECHAATENCIONSALUDBUCAL, fechaMaximoReporte, fechaNacimiento,
            consecutivo, numeroIdentificacion);
        if(this.validarResultado(FSB)){estructuraCOP.push(FSB)}
        let COP = this.validarCOPPorPersona(this.COPPORPERSONA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(COP)){estructuraCOP.push(COP)}
    }   

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}