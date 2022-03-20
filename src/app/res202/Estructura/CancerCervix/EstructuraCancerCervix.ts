import {CancerCervix} from './CancerCervix';

export class EstructuraCancerCervix extends CancerCervix{

    TRATAMIENTOENCISIONREALIZIONTECINSPECCIONVISUAL: any;
    TAMIZAJECANCERCUELLOUTERINO: any;
    FECHATAMIZAJECANCERCUELLOUTERINO: any;
    RESULTADOTAMIZAJECANCERCUELLOUTERINO: any;
    CALIDADMUESTRACITOLOGIACERVICOUTERINA: any;
    CODIGOHABILITTAMIZAJECANCERCUELLOUTERINO: any;
    FECHACOLPOSCOPIA: any;
    FECHABIOPSIACERVICOUTERINA: any;
    RESULTADOBIOPSIACERVICOUTERINA: any;

    agregarDatosExcel(element : any){
        this.TRATAMIENTOENCISIONREALIZIONTECINSPECCIONVISUAL = new String(element['47_TratamientoEscisionPostRealizacionTecnicaInspeccionVisual']);
        this.TAMIZAJECANCERCUELLOUTERINO = new String(element['86_TamizajeCancerDelCuelloUterino']);
        this.FECHATAMIZAJECANCERCUELLOUTERINO = new String(element['87_FechaTamizajeCancerCuelloUterino']);
        this.RESULTADOTAMIZAJECANCERCUELLOUTERINO = new String(element['88_ResultadoTamizajeCancerDeCuelloUterino']);
        this.CALIDADMUESTRACITOLOGIACERVICOUTERINA = new String(element['89_CalidadEnMuestraDeCitologiaCervicouterina']);
        this.CODIGOHABILITTAMIZAJECANCERCUELLOUTERINO = new String(element['90_CodigoHabilitacionTamizajeCancerDeCuelloUterino']);
        this.FECHACOLPOSCOPIA = new String(element['91_FechaDeColposcopia']);
        this.FECHABIOPSIACERVICOUTERINA = new String(element['93_FechaDeBiopsiaCervicouterina']);
        this.RESULTADOBIOPSIACERVICOUTERINA = new String(element['94_ResultadoDeBiopsiaCervicouterina']);
    }

    agregarDatos(data: Array<any>){
        this.TRATAMIENTOENCISIONREALIZIONTECINSPECCIONVISUAL = data[47];
        this.TAMIZAJECANCERCUELLOUTERINO = data[86];
        this.FECHATAMIZAJECANCERCUELLOUTERINO = data[87];
        this.RESULTADOTAMIZAJECANCERCUELLOUTERINO = data[88];
        this.CALIDADMUESTRACITOLOGIACERVICOUTERINA = data[89];
        this.CODIGOHABILITTAMIZAJECANCERCUELLOUTERINO = data[90];
        this.FECHACOLPOSCOPIA = data[91];
        this.FECHABIOPSIACERVICOUTERINA = data[93];
        this.RESULTADOBIOPSIACERVICOUTERINA = data[94];
    }

    validarCancerCervix(fechaMaximaReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any, estructuraCancerCervix: Array<any>){
        let TTV = this.ValidartratamAblatPostTecnInsVisual(this.TRATAMIENTOENCISIONREALIZIONTECINSPECCIONVISUAL, consecutivo, numeroIdentificacion);
        if(this.validarResultado(TTV)){estructuraCancerCervix.push(TTV)}
        let CCU = this.validarTamizajeCancerCuelloUterino(this.TAMIZAJECANCERCUELLOUTERINO, consecutivo, numeroIdentificacion);
        if(this.validarResultado(CCU)){estructuraCancerCervix.push(CCU)}
        let TCCU = this.validarFechaTamizajeCancerCuelloUterino(this.FECHATAMIZAJECANCERCUELLOUTERINO, fechaMaximaReporte,fechaNacimiento,consecutivo, numeroIdentificacion);
        if(this.validarResultado(TCCU)){estructuraCancerCervix.push(TCCU)}
        let RTCU = this.ValidarResultadoTamizajeCancerCuelloUterino(this.RESULTADOTAMIZAJECANCERCUELLOUTERINO, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RTCU)){estructuraCancerCervix.push(RTCU)}
        let MCC = this.validarCalidadMuestraCitologíaCervicouterina(this.CALIDADMUESTRACITOLOGIACERVICOUTERINA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(MCC)){estructuraCancerCervix.push(MCC)}
        let CH = this.validarCodigoHabilitTamizajeCancerCuelloUterino(this.CODIGOHABILITTAMIZAJECANCERCUELLOUTERINO, consecutivo, numeroIdentificacion);
        if(this.validarResultado(CH)){estructuraCancerCervix.push(CH)}
        let FC = this.validarFechaColposcopia(this.FECHACOLPOSCOPIA, fechaMaximaReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FC)){estructuraCancerCervix.push(FC)}
        let FBC = this.validarFechaBiopsiaCervicouterina(this.FECHABIOPSIACERVICOUTERINA, fechaMaximaReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FBC)){estructuraCancerCervix.push(FBC)}
        let RBC = this.validarResultadoBiopsiaCervicouterina(this.RESULTADOBIOPSIACERVICOUTERINA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RBC)){estructuraCancerCervix.push(RBC)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }



}