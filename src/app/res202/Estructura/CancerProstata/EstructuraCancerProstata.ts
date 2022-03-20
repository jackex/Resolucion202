import {CancerProstata} from './CancerProstata';

export class EstructuraCancerProstata extends CancerProstata{

    RESULTADOTACTORECTAL: any;
    FECHATACTORECTAL: any;
    FECHATOMAPSA: any;
    RESULTADOPSA: any;

    agregarDatosExcel(element: any){
        this.RESULTADOTACTORECTAL = new String(element['22_ResultadoDelTactoRectal']);
        this.FECHATACTORECTAL = new String(element['64_FechaDelTactoRectal']);
        this.FECHATOMAPSA = new String(element['73_FechaDeTomaPSACancerProstata']);
        this.RESULTADOPSA = new String(element['109_ResultadoDePSACancerDeProstata']);
    }

    agregarDatos(data: Array<any>){
        this.RESULTADOTACTORECTAL = data[22];
        this.FECHATACTORECTAL = data[64];
        this.FECHATOMAPSA = data[73];
        this.RESULTADOPSA = data[109];
    }

    validarCancerProstata(fechaSuperiorReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any, estructuraCanceProstata: Array<any>){
        let RTR = this.validarResultadoTactoRectal(this.RESULTADOTACTORECTAL, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RTR)){estructuraCanceProstata.push(RTR)}
        let FTR = this.validarFechaTactoRectal(this.FECHATACTORECTAL, fechaSuperiorReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FTR)){estructuraCanceProstata.push(FTR)}
        let FTPSA = this.validarFechaTomaPSA(this.FECHATOMAPSA, fechaSuperiorReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FTPSA)){estructuraCanceProstata.push(FTPSA)}
        let VRPSA = this.validarResultadoPSA(this.RESULTADOPSA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(VRPSA)){estructuraCanceProstata.push(VRPSA)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}