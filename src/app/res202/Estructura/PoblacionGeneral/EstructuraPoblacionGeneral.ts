import {PoblacionGeneral} from './PoblacionGeneral';

export class EstructuraPoblacionGeneral extends PoblacionGeneral{

    FECHADELPESO: any
    PESOKGS: any;
    FECHATALLA: any;
    TALLACMS: any;
    RESULTADOTAMIZAJEHEPATITISC: any;
    FECHACONSULTAVALORACIONINTEGRAL: any;
    FECHAANTIGENOSUPERFICIEHEPATITISB: any;
    RESULTADOANTIGENOSUPERFICIEHEPATITISB: any;
    FECHATOMAPRUEBATAMIZAJESIFILIS: any;
    RESULTADOPRUEBATAMIZAJESIFILIS: any;
    FECHATOMAPRUEBAVIH: any;
    RESULTADOPRUEBAVIH: any;
    FECHATOMATAMIZAJEHEPATITSC: any;

    agregarDatosExcel(element: any){
        this.FECHADELPESO = new String(element['29_FechaDelPeso']);
        this.PESOKGS = new String(element['30_PesoEnKilogramos']);
        this.FECHATALLA = new String(element['31_FechaDeLaTalla']);
        this.TALLACMS = new String(element['32_TallaEnCentímetros']);
        this.RESULTADOTAMIZAJEHEPATITISC = new String(element['42_ResultadoTamizajeHepatitisC']);
        this.FECHACONSULTAVALORACIONINTEGRAL = new String(element['52_FechaConsultaValoraciónIntegral']);
        this.FECHAANTIGENOSUPERFICIEHEPATITISB = new String(element['78_FechaAntígenoDeSuperficieHepatitisB']);
        this.RESULTADOANTIGENOSUPERFICIEHEPATITISB = new String(element['79_ResultadoAntígenoSuperficieHepatitisB']);
        this.FECHATOMAPRUEBATAMIZAJESIFILIS = new String(element['80_FechaSerologiaParaSifilis']);
        this.RESULTADOPRUEBATAMIZAJESIFILIS = new String(element['81_ResultadoPruebaTamizajeSifilis']);
        this.FECHATOMAPRUEBAVIH = new String(element['82_FechaTomaPruebaVIH']);
        this.RESULTADOPRUEBAVIH = new String(element['83_ResultadoDePruebaParaVIH']);
        this.FECHATOMATAMIZAJEHEPATITSC = new String(element['110_FechaDeTomaDeTamizajeHepatitisC']);
    }

    agregarDatos(data: Array<any>){
        this.FECHADELPESO = data[29];
        this.PESOKGS = data[30];
        this.FECHATALLA = data[31];
        this.TALLACMS = data[32];
        this.RESULTADOTAMIZAJEHEPATITISC = data[42];
        this.FECHACONSULTAVALORACIONINTEGRAL = data[52];
        this.FECHAANTIGENOSUPERFICIEHEPATITISB = data[78];
        this.RESULTADOANTIGENOSUPERFICIEHEPATITISB = data[79];
        this.FECHATOMAPRUEBATAMIZAJESIFILIS = data[80];
        this.RESULTADOPRUEBATAMIZAJESIFILIS = data[81];
        this.FECHATOMAPRUEBAVIH = data[82];
        this.RESULTADOPRUEBAVIH = data[83];
        this.FECHATOMATAMIZAJEHEPATITSC = data[110];
    }

    validarPoblacionGeneral(fechaMaximaDeReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any, estructuraPoblacionGeneral: Array<any>){
        let FP = this.validarFechaDelPeso(this.FECHADELPESO,fechaMaximaDeReporte,fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FP)){estructuraPoblacionGeneral.push(FP)}
        let PK = this.validarPesoEnKG(this.PESOKGS, consecutivo, numeroIdentificacion);
        if(this.validarResultado(PK)){estructuraPoblacionGeneral.push(PK)}
        let FT = this.validarFechaDeLaTalla(this.FECHATALLA, fechaMaximaDeReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FT)){estructuraPoblacionGeneral.push(FT)}
        let TCMS = this.validarTallaEnCMS(this.TALLACMS, consecutivo, numeroIdentificacion);
        if(this.validarResultado(TCMS)){estructuraPoblacionGeneral.push(TCMS)}
        let RTH = this.validarResultadoTamizajeHepatitisC(this.RESULTADOTAMIZAJEHEPATITISC, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RTH)){estructuraPoblacionGeneral.push(RTH)}
        let FCVI = this.validarFechaConsultaValoracionIntegral(this.FECHACONSULTAVALORACIONINTEGRAL, fechaMaximaDeReporte, fechaNacimiento, 
            consecutivo, numeroIdentificacion);
        if(this.validarResultado(FCVI)){estructuraPoblacionGeneral.push(FCVI)}
        let FSH = this.validarFechaAntigenoSuperficieHepatitisB(this.FECHAANTIGENOSUPERFICIEHEPATITISB, fechaMaximaDeReporte, fechaNacimiento, 
            consecutivo, numeroIdentificacion);
        if(this.validarResultado(FSH)){estructuraPoblacionGeneral.push(FSH)}
        let ASHB = this.validarResultadoAntigenoSuperficieHepatitisB(this.RESULTADOANTIGENOSUPERFICIEHEPATITISB, consecutivo, numeroIdentificacion);
        if(this.validarResultado(ASHB)){estructuraPoblacionGeneral.push(ASHB)}
        let PTS = this.validarFechaTomaPruebaTamizajeSifilis(this.FECHATOMAPRUEBATAMIZAJESIFILIS, fechaMaximaDeReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(PTS)){estructuraPoblacionGeneral.push(PTS)}
        let RPTS = this.validarResultadoPruebaTamizajeSífilis(this.RESULTADOPRUEBATAMIZAJESIFILIS, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RPTS)){estructuraPoblacionGeneral.push(RPTS)}
        let FVIH = this.validarFechaTomaPruebaVIH(this.FECHATOMAPRUEBAVIH, fechaMaximaDeReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FVIH)){estructuraPoblacionGeneral.push(FVIH)}
        let RVIH = this.validarResultadoPruebaVIH(this.RESULTADOPRUEBAVIH, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RVIH)){estructuraPoblacionGeneral.push(RVIH)}
        let TTHC = this.validarFechaTomaTamizajeHepatitisC(this.FECHATOMATAMIZAJEHEPATITSC, fechaMaximaDeReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(TTHC)){estructuraPoblacionGeneral.push(TTHC)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}