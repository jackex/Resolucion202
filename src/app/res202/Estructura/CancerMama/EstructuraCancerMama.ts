import {CancerMama} from './CancerMama';

export class EstructuraCancerMama extends CancerMama{

    FECHATOMAMAMOGRAFIA: any;
    RESULTADOMAMOGRAFIA: any;
    FECHATOMABIOPSIAMAMA: any;
    FECHARESULTADOBIOPSIAMAMA: any;
    RESULTADOBIOPSIAMAMA: any;

    agregarDatosExcel(element: any){
        this.FECHATOMAMAMOGRAFIA = new String(element['96_FechaDeTomaDeMamografia']);
        this.RESULTADOMAMOGRAFIA = new String(element['97_ResultadoDeMamografia']);
        this.FECHATOMABIOPSIAMAMA = new String(element['99_FechaTomaBiopsiaMama']);
        this.FECHARESULTADOBIOPSIAMAMA = new String(element['100_FechaResultadoBiopsiaMama']);
        this.RESULTADOBIOPSIAMAMA = new String(element['101_ResultadoDeBiopsiaDeMama']);
    }

    agregarDatos(data: Array<any>){
        this.FECHATOMAMAMOGRAFIA = data[96];
        this.RESULTADOMAMOGRAFIA = data[97];
        this.FECHATOMABIOPSIAMAMA = data[99];
        this.FECHARESULTADOBIOPSIAMAMA = data[100];
        this.RESULTADOBIOPSIAMAMA = data[101];
    }

    validarCancerMama(fechaMaximaReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any, estructuraCancerMama: Array<any>){
        let FTM = this.validarFechaTomaMamografia(this.FECHATOMAMAMOGRAFIA, fechaMaximaReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FTM)){estructuraCancerMama.push(FTM)}
        let RM = this.validarResultadoMamografia(this.RESULTADOMAMOGRAFIA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RM)){estructuraCancerMama.push(RM)}
        let FTBM = this.validarFechaTomaBiopsiaMama(this.FECHATOMABIOPSIAMAMA, fechaMaximaReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FTBM)){estructuraCancerMama.push(FTBM)}
        let FRB = this.validarFechaResultadoBiopsiaMama(this.FECHARESULTADOBIOPSIAMAMA, fechaMaximaReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FRB)){estructuraCancerMama.push(FRB)}
        let RB = this.validarResultadoBiopsiaMama(this.RESULTADOBIOPSIAMAMA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RB)){estructuraCancerMama.push(RB)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }


    

}