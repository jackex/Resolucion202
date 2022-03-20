import {TestVejez} from './TestVejez';

export class EstructuraTestVejez extends TestVejez{

    RESULTADOMINIMENTALSTATE: any;

    agregarDatosExcel(element: any){
        this.RESULTADOMINIMENTALSTATE = new String(element['16_ResultadoPruebaMiniMentalState']);
    }

    agregarDatos(data: Array<any>){
        this.RESULTADOMINIMENTALSTATE = data[16];
    }

    validarTestVejez(consecutivo: any, numeroIdentificacion: any, EstructuraTestVejez: Array<any>){
        let RPS = this.validarResultadoPruebaMiniMentalState(this.RESULTADOMINIMENTALSTATE, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RPS)){EstructuraTestVejez.push(RPS)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}