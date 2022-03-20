import {AgudezaVisual} from './AgudezaVisual';

export class EstructuraAgudezaVisual extends AgudezaVisual{

    AGUDEZAVISUALLEJANAOJODERECHO: any;
    AGUDEZAVISUALLEJANAOJOIZQUIERDO: any;
    FECHAVALORACIONAGUDEZAVISUAL: any;

    agregarDatosExcel(element: any){
        this.AGUDEZAVISUALLEJANAOJODERECHO = new String(element['28_AgudezaVisualLejanaOjoDerecho']);
        this.AGUDEZAVISUALLEJANAOJOIZQUIERDO = new String(element['27_AgudezaVisualLejanaOjoIzquierdo']);
        this.FECHAVALORACIONAGUDEZAVISUAL = new String(element['62_FechaDeValoraciónAgudezaVisual']);
    }

    agregarDatos(data: Array<any>){
        this.AGUDEZAVISUALLEJANAOJOIZQUIERDO = data[27];
        this.AGUDEZAVISUALLEJANAOJODERECHO = data[28];
        this.FECHAVALORACIONAGUDEZAVISUAL = data[62];
    }

    validarAgudezaVisual( fechaSuperiorReporte: any, fechaNacimiento :any, consecutivo: any, numeroIdentificacion: any, estructuraAgudezaVisual: Array<any>){
        let AVOD = this.validarAgudezaVisualLejanaOjoDerecho(this.AGUDEZAVISUALLEJANAOJODERECHO, consecutivo, numeroIdentificacion);
        if(this.validarResultado(AVOD)){estructuraAgudezaVisual.push(AVOD)}
        let AVOI = this.validarAgudezaVisualLejanaOjoIzquierdo(this.AGUDEZAVISUALLEJANAOJOIZQUIERDO, consecutivo, numeroIdentificacion);
        if(this.validarResultado(AVOI)){estructuraAgudezaVisual.push(AVOI)}
        let FAV = this.validarFechaValoracionAgudezaVisual(this.FECHAVALORACIONAGUDEZAVISUAL, fechaSuperiorReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FAV)){estructuraAgudezaVisual.push(FAV)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}