import {Gestacion} from './Gestacion';

export class EstructuraGestacion extends Gestacion{

    GESTANTE: any;
    ACIDOFOLICOPRECONCEPCIONAL: any;
    FECHAPROBABLEPARTO: any;
    CLASIFICACIONRIESGOGESTACIONAL: any;
    FECHAATENCIONPARTOCESAREA: any;
    FECHASALIDAATENCIONPARTOCESAREA: any;
    FECHAPRIMERACONSULTAPRENATAL: any;
    FECHAULTIMOCONTROLPRETANALOSEGUIMIENTO: any;
    SUMINISTROACIDOFOLICO: any;
    SUMINISTROSULFATOFERROSO: any;
    SUMINISTROCARBONATOCALCIO: any;
    FECHAATENCIONSALUDYAPOYOLACTANCIAMATERNA: any;

    agregarDatosExcel(element: any){
        this.GESTANTE = new String(element['14_Gestacion']);
        this.ACIDOFOLICOPRECONCEPCIONAL = new String(element['23_AcidoFolicoPreconcepcional']);
        this.FECHAPROBABLEPARTO = new String(element['33_FechaProbableDeParto']);
        this.CLASIFICACIONRIESGOGESTACIONAL = new String(element['35_ClasificaciónDelRiesgoGestacional']);
        this.FECHAATENCIONPARTOCESAREA = new String(element['49_FechaAtencionPartoOCesarea']);
        this.FECHASALIDAATENCIONPARTOCESAREA = new String(element['50_FechaSalidaDeLaAtencionDelPartoOCesárea']);
        this.FECHAATENCIONSALUDYAPOYOLACTANCIAMATERNA = new String(element['51_FechaAtencionPromocionApoyoLactanciaMaterna']);
        this.FECHAPRIMERACONSULTAPRENATAL = new String(element['56_FechaDePrimeraConsultaPrenatal']);
        this.FECHAULTIMOCONTROLPRETANALOSEGUIMIENTO = new String(element['58_FechaDeUltimoControlPrenatalDeSeguimiento']);
        this.SUMINISTROACIDOFOLICO = new String(element['59_SuministroAcidoFolicoControlPrenatalEnPeriodoReportado']);
        this.SUMINISTROSULFATOFERROSO = new String(element['60_SuministroSulfatoFerrosoEnControlPrenatalPeriodoReportado']);
        this.SUMINISTROCARBONATOCALCIO = new String(element['61_SuministroCarbonatoCalcioControlPrenatalPeriodoReportado']);
    }

    agregarDatos(data: Array<any>){
            this.GESTANTE = data[14];
            this.ACIDOFOLICOPRECONCEPCIONAL = data[23];
            this.FECHAPROBABLEPARTO = data[33];
            this.CLASIFICACIONRIESGOGESTACIONAL = data[35];
            this.FECHAATENCIONPARTOCESAREA = data[49];
            this.FECHASALIDAATENCIONPARTOCESAREA = data[50];
            this.FECHAATENCIONSALUDYAPOYOLACTANCIAMATERNA = data[51];
            this.FECHAPRIMERACONSULTAPRENATAL = data[56];
            this.FECHAULTIMOCONTROLPRETANALOSEGUIMIENTO = data[58];
            this.SUMINISTROACIDOFOLICO = data[59];
            this.SUMINISTROSULFATOFERROSO = data[60];
            this.SUMINISTROCARBONATOCALCIO = data[61];
    }

    validarGestantes(consecutivo: any, numeroIdentificacion: any, fechaNacimiento: any, fechaSuperiorReporte: any, estructuraGestacion: Array<any>){
        let VG = this.validarGestacion(this.GESTANTE, consecutivo, numeroIdentificacion);
        if(this.validarResultado(VG)){estructuraGestacion.push(VG)}
        let AFP = this.validarAcidoFolicoPreconcepional(this.ACIDOFOLICOPRECONCEPCIONAL, consecutivo, numeroIdentificacion);
        if(this.validarResultado(AFP)){estructuraGestacion.push(AFP)}
        let FP = this.validarFechaProbableDeParto(this.FECHAPROBABLEPARTO, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FP)){estructuraGestacion.push(FP)}
        let RG = this.validarClasificacionRiesgoGestacional(this.CLASIFICACIONRIESGOGESTACIONAL, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RG)){estructuraGestacion.push(RG)}
        let FAP = this.validarFechaDeAtencionPartoOCesarea(this.FECHAATENCIONPARTOCESAREA, fechaNacimiento, fechaSuperiorReporte, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FAP)){estructuraGestacion.push(FAP)}
        let FSP = this.validarFechaSalidaAtencionPartoOCesarea(this.FECHASALIDAATENCIONPARTOCESAREA, fechaNacimiento, fechaSuperiorReporte, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FSP)){estructuraGestacion.push(FSP)}
        let FPC = this.validarFechaPrimeraConsultaPrenatal(this.FECHAPRIMERACONSULTAPRENATAL, fechaNacimiento, fechaSuperiorReporte, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FPC)){estructuraGestacion.push(FPC)}
        let FUCP = this.validarFechaUltimoControlPrenatalDeSeguimiento(this.FECHAULTIMOCONTROLPRETANALOSEGUIMIENTO, fechaNacimiento, fechaSuperiorReporte, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FUCP)){estructuraGestacion.push(FUCP)}
        let AFCP = this.validarAcidoFolicoEnControlPrenatalPeriodoReportado(this.SUMINISTROACIDOFOLICO, consecutivo, numeroIdentificacion);
        if(this.validarResultado(AFCP)){estructuraGestacion.push(AFCP)}
        let SFCP = this.validarSulfatoFerrosoEnControlPrenatalPeriodoReportado(this.SUMINISTROSULFATOFERROSO, consecutivo, numeroIdentificacion);
        if(this.validarResultado(SFCP)){estructuraGestacion.push(SFCP)}
        let CCCP =this.validarCarbonatoCalcioEnControlPrenatalPeriodoReportado(this.SUMINISTROCARBONATOCALCIO, consecutivo, numeroIdentificacion);
        if(this.validarResultado(CCCP)){estructuraGestacion.push(CCCP)}
        let FASP = this.validarFechaAtenciónSaludPromociónApoyoLactanciaMaterna(this.FECHAATENCIONSALUDYAPOYOLACTANCIAMATERNA, fechaNacimiento, fechaSuperiorReporte,
            consecutivo, numeroIdentificacion);
        if(this.validarResultado(FASP)){estructuraGestacion.push(FASP)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}