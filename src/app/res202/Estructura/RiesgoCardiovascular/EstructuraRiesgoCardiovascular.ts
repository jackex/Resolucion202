import {RiesgoCardiovascular} from './RiesgoCardiovascular';


export class EstructuraRiesgoCardiovascular extends RiesgoCardiovascular{

    CONSUMODETABACO: any;
    RESULTADOGLICEMIABASAL: any;
    FECHATOMALDL: any;
    RESULTADOLDL: any;
    RESULTADOHDL: any;
    RESULTADOTRIGLICERIDOS: any;
    FECHATOMAHEMOGLOBINA: any;
    RESULTADOHEMOGLOBINA: any;
    FECHATOMAGLICEMIABASAL: any;
    FECHATOMACREATININA: any;
    RESULTADOCREATININA: any;
    FECHATOMAHDL: any;
    CLASIFICACIONRIESGOCARDIOVASCULAR: any;
    CLASIFICACIONRIESGOMETABOLICO: any;
    FECHATOMATRIGLICERIDOS: any;

    agregarDatosExcel(element: any){
        this.CONSUMODETABACO = new String(element['19_ConsumoDeTabaco']);
        this.RESULTADOGLICEMIABASAL = new String(element['57_ResultadoGlicemiaBasal']);
        this.FECHATOMALDL = new String(element['72_FechaDeTomaLDL']);
        this.RESULTADOLDL = new String(element['92_ResultadoDeLDL']);
        this.RESULTADOHDL = new String(element['95_ResultadoDeHDL']);
        this.RESULTADOTRIGLICERIDOS = new String(element['98_ResultadoDeTrigliceridos']);
        this.FECHATOMAHEMOGLOBINA = new String(element['103_FechaDeTomaDeHemoglobina']);
        this.RESULTADOHEMOGLOBINA = new String(element['104_ResultadoDeHemoglobina']);
        this.FECHATOMAGLICEMIABASAL = new String(element['105_FechaTomaGlicemiaBasal']);
        this.FECHATOMACREATININA = new String(element['106_FechaDeTomaCreatinina']);
        this.RESULTADOCREATININA = new String(element['107_ResultadoDeCreatinina']);
        this.FECHATOMAHDL = new String(element['111_FechaTomaDeHDL']);
        this.CLASIFICACIONRIESGOCARDIOVASCULAR = new String(element['114_ClasificacionRiesgoCardiovascular']);
        this.CLASIFICACIONRIESGOMETABOLICO = new String(element['117_ClasificacionDelRiesgoMetabólico']);
        this.FECHATOMATRIGLICERIDOS = new String(element['118_FechaDeTomaTriglieridos']);
    }

    agregarDatos(data: Array<any>){
        this.CONSUMODETABACO = data[19];
        this.RESULTADOGLICEMIABASAL = data[57];
        this.FECHATOMALDL = data[72];
        this.RESULTADOLDL = data[92];
        this.RESULTADOHDL = data[95];//
        this.RESULTADOTRIGLICERIDOS = data[98];
        this.FECHATOMAHEMOGLOBINA = data[103];
        this.RESULTADOHEMOGLOBINA = data[104];
        this.FECHATOMAGLICEMIABASAL = data[105];
        this.FECHATOMACREATININA = data[106];
        this.RESULTADOCREATININA = data[107];
        this.FECHATOMAHDL = data[111];
        this.CLASIFICACIONRIESGOCARDIOVASCULAR =data[114];
        this.CLASIFICACIONRIESGOMETABOLICO = data[117];
        this.FECHATOMATRIGLICERIDOS = data[118];
    }

    validarEstructuraRiesgoCardiovascular(fechaMaximaDeReporte: any, fechaNacimiento: any,consecutivo: any, numeroIdentificacion: any,
        EstructuraRiesgoCardiovascular: Array<any>){
        let CT = this.validarConsumoTabaco(this.CONSUMODETABACO, consecutivo, numeroIdentificacion);
        if(this.validarResultado(CT)){EstructuraRiesgoCardiovascular.push(CT)}
        let RGB = this.validarResultadoGlicemaBasal(this.RESULTADOGLICEMIABASAL, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RGB)){EstructuraRiesgoCardiovascular.push(RGB)}
        let FTLDL = this.validarFechaTomaLDL(this.FECHATOMALDL, fechaMaximaDeReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FTLDL)){EstructuraRiesgoCardiovascular.push(FTLDL)}
        let RLDL = this.validarResultadoLDL(this.RESULTADOLDL, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RLDL)){EstructuraRiesgoCardiovascular.push(RLDL)}
        let RHDL = this.validarResultadoHDL(this.RESULTADOHDL, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RHDL)){EstructuraRiesgoCardiovascular.push(RHDL)}
        let RT = this.validarResultadoTrigliceridos(this.RESULTADOTRIGLICERIDOS, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RT)){EstructuraRiesgoCardiovascular.push(RT)}
        let FTH = this.validarFechaTomaHemoglobina(this.FECHATOMAHEMOGLOBINA, fechaMaximaDeReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FTH)){EstructuraRiesgoCardiovascular.push(FTH)}
        let RH = this.validarResultadoHemoglobina(this.RESULTADOHEMOGLOBINA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RH)){EstructuraRiesgoCardiovascular.push(RH)}
        let FTGB = this.validarFechaTomaGlicemiaBasal(this.FECHATOMAGLICEMIABASAL, fechaMaximaDeReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FTGB)){EstructuraRiesgoCardiovascular.push(FTGB)}
        let FTC = this.validarFechaTomaCreatinina(this.FECHATOMACREATININA, fechaMaximaDeReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FTC)){EstructuraRiesgoCardiovascular.push(FTC)}
        let RC = this.validarResultadoCreatinina(this.RESULTADOCREATININA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RC)){EstructuraRiesgoCardiovascular.push(RC)}
        let FTHDL = this.validarFechaTomaHDL(this.FECHATOMAHDL, fechaMaximaDeReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FTHDL)){EstructuraRiesgoCardiovascular.push(FTHDL)}
        let RCA = this.validarRiesgoCardiovascular(this.CLASIFICACIONRIESGOCARDIOVASCULAR, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RCA)){EstructuraRiesgoCardiovascular.push(RCA)}
        let RM = this.validarRiesgoMetabolico(this.CLASIFICACIONRIESGOMETABOLICO, consecutivo, numeroIdentificacion);
        if(this.validarResultado(RM)){EstructuraRiesgoCardiovascular.push(RM)}
        let FTT = this.validarFechaTomaTrigliceridos(this.FECHATOMATRIGLICERIDOS, fechaMaximaDeReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FTT)){EstructuraRiesgoCardiovascular.push(FTT)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}