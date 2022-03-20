import {Test0a7Anios} from './Test0a7anios';

export class EstructuraTest0a7Anios extends Test0a7Anios{

    RESULTESCALAABREVDESMOTRICIDADGRUESA: any;
    RESULTESCALAABREVDESMOTRICIDADFINOADAPTATIVA: any;
    RESULTESCALAABREVDESMOTRICIDADPERSONALSOCIAL: any;
    RESULTESCALAABREVDESMOTRICIDADAUDICIONLENGUAJE: any;

    agregarDatosExcel(element: any){
        this.RESULTESCALAABREVDESMOTRICIDADGRUESA = new String(element['43_ResultEscalaAbrevDesarrAreaMotricidadGruesa']);
        this.RESULTESCALAABREVDESMOTRICIDADFINOADAPTATIVA = new String(element['44_ResulEscalaAbrevDesaMotricidadFinoAdaptativa']);
        this.RESULTESCALAABREVDESMOTRICIDADPERSONALSOCIAL = new String(element['45_ResulEscalaAbrevDesarrolloAreaPersonalSocial']);
        this.RESULTESCALAABREVDESMOTRICIDADAUDICIONLENGUAJE = new String(element['46_ResulEscalaAbrevDesarrolloAreaMotricidadAudicLenguaje']);
    }

    agregarDatos(data: Array<any>){
        this.RESULTESCALAABREVDESMOTRICIDADGRUESA = data[43];
        this.RESULTESCALAABREVDESMOTRICIDADFINOADAPTATIVA = data[44];
        this.RESULTESCALAABREVDESMOTRICIDADPERSONALSOCIAL = data[45];
        this.RESULTESCALAABREVDESMOTRICIDADAUDICIONLENGUAJE = data[46];
    }

    validarTest0a7Anios(consecutivo: any, numeroIdentificacion: any, EstructuraTest0a7Anios: Array<any>){
        let EAMG = this.validarResulEscalaAbrevDesaMotricGruesa(this.RESULTESCALAABREVDESMOTRICIDADGRUESA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(EAMG)){EstructuraTest0a7Anios.push(EAMG)}
        let EAMF = this.validarResulEscalaAbrevDesaMotriFinoadaptativa(this.RESULTESCALAABREVDESMOTRICIDADFINOADAPTATIVA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(EAMF)){EstructuraTest0a7Anios.push(EAMF)}
        let EADP = this.validarResulEscalaAbrevDesaAreaPersonal(this.RESULTESCALAABREVDESMOTRICIDADPERSONALSOCIAL, consecutivo, numeroIdentificacion);
        if(this.validarResultado(EADP)){EstructuraTest0a7Anios.push(EADP)}
        let REAF = this.validarResulEscalaAbrevDesaMotricAudicionLenguaje(this.RESULTESCALAABREVDESMOTRICIDADAUDICIONLENGUAJE, consecutivo, numeroIdentificacion);
        if(this.validarResultado(REAF)){EstructuraTest0a7Anios.push(REAF)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }





}