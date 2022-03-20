import {VariablesComodin} from './VariablesComodin';

export class EstructuraVariablesComodin extends VariablesComodin{

    SIFILISGESTACIONALCONGENITA: any;
    HIPOTIROIDISMOCONGENITO: any;
    LEPRA: any;
    OBESIDADDESNUTRICIONPROTEICOCALORICA: any;
    ENFERMEDADMENTAL: any;
    CANCERCERVIX: any;
    DPTMENORES5AÑOS: any;
    NEUMOCOCO: any;
    CONSULTAPSICOLOGIA: any;
    PRESERVATIVOSENTREGADOSPACIENTESITS: any;
    FECHAHEMOGLOBINAGLICOSILADA: any;
    TRATAMIENTOSIFILISGESTACIONAL: any;
    TRATAMIENTOSIFILISCONGENITA: any;

    agregarDatosExcel(element: any){
        this.SIFILISGESTACIONALCONGENITA = new String(element['15_SifilisGestacionalOCongénita']);
        this.HIPOTIROIDISMOCONGENITO = new String(element['17_HipotiroidismoCongenito']);
        this.LEPRA = new String(element['20_Lepra']);
        this.OBESIDADDESNUTRICIONPROTEICOCALORICA = new String(element['21_ObesidadDesnutricionProteicoCalorica']);
        this.ENFERMEDADMENTAL = new String(element['25_EnfermedadMental']);
        this.CANCERCERVIX = new String(element['26_CáncerDeCervix']);
        this.DPTMENORES5AÑOS = new String(element['39_DPTMenoresDe5Años']);
        this.NEUMOCOCO = new String(element['41_Neumococo']);
        this.CONSULTAPSICOLOGIA = new String(element['68_ConsultaDePsicologia']);
        this.PRESERVATIVOSENTREGADOSPACIENTESITS = new String(element['74_PreservativosEntregadosPacientesITS']);
        this.FECHAHEMOGLOBINAGLICOSILADA = new String(element['108_FechaHemoglobinaGlicosilada']);
        this.TRATAMIENTOSIFILISGESTACIONAL = new String(element['115_TratamientoParaSifilisGestacional']);
        this.TRATAMIENTOSIFILISCONGENITA = new String(element['116_TratamientoParaSifilisCongenita']);
    }

    agregarDatos(data: Array<any>){
        this.SIFILISGESTACIONALCONGENITA = data[15];
        this.HIPOTIROIDISMOCONGENITO = data[17];
        this.LEPRA = data[20];
        this.OBESIDADDESNUTRICIONPROTEICOCALORICA = data[21];
        this.ENFERMEDADMENTAL = data[25];
        this.CANCERCERVIX = data[26];
        this.DPTMENORES5AÑOS = data[39];
        this.NEUMOCOCO = data[41];
        this.CONSULTAPSICOLOGIA = data[68];
        this.PRESERVATIVOSENTREGADOSPACIENTESITS = data[74];
        this.FECHAHEMOGLOBINAGLICOSILADA = data[108];
        this.TRATAMIENTOSIFILISGESTACIONAL = data[115];
        this.TRATAMIENTOSIFILISCONGENITA = data[116];
    }

    validarVariablesComodin(fechaMaximaDeReporte: any, fechaNacimiento: any, consecutivo: any, numeroIdentificacion: any, estructuraComodin: Array<any>){
        let SGC = this.validarSifilisGestacionalOCongenita(this.SIFILISGESTACIONALCONGENITA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(SGC)){estructuraComodin.push(SGC)}
        let HC = this.validarHipotiroidismoCongénito(this.HIPOTIROIDISMOCONGENITO, consecutivo, numeroIdentificacion);
        if(this.validarResultado(HC)){estructuraComodin.push(HC)}
        let VL = this.validarLepra(this.LEPRA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(VL)){estructuraComodin.push(VL)}
        let OD = this.validarObesidadDesnutricionPC(this.OBESIDADDESNUTRICIONPROTEICOCALORICA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(OD)){estructuraComodin.push(OD)}
        let EM = this.validarEnfermedadMental(this.ENFERMEDADMENTAL, consecutivo, numeroIdentificacion);
        if(this.validarResultado(EM)){estructuraComodin.push(EM)}
        let CC = this.validarCancerCervix(this.CANCERCERVIX, consecutivo, numeroIdentificacion);
        if(this.validarResultado(CC)){estructuraComodin.push(CC)}
        let DPT = this.validarDPTMenore5Anios(this.DPTMENORES5AÑOS, consecutivo, numeroIdentificacion);
        if(this.validarResultado(DPT)){estructuraComodin.push(DPT)}
        let VN = this.validarNeumococo(this.NEUMOCOCO, consecutivo, numeroIdentificacion);
        if(this.validarResultado(VN)){estructuraComodin.push(VN)}
        let CP = this.validarConsultaPsicologia(this.CONSULTAPSICOLOGIA, fechaMaximaDeReporte, fechaNacimiento,consecutivo, numeroIdentificacion);
        if(this.validarResultado(CP)){estructuraComodin.push(CP)}
        let PITS = this.validarPreservativosEntregadosPITS(this.PRESERVATIVOSENTREGADOSPACIENTESITS, consecutivo, numeroIdentificacion);
        if(this.validarResultado(PITS)){estructuraComodin.push(PITS)}
        let FHG = this.validarFechaHemoglobinaGlicosilada(this.FECHAHEMOGLOBINAGLICOSILADA, fechaMaximaDeReporte, fechaNacimiento, consecutivo, numeroIdentificacion);
        if(this.validarResultado(FHG)){estructuraComodin.push(FHG)}
        let TSG = this.validarTratamientoSifilisGestacional(this.TRATAMIENTOSIFILISGESTACIONAL, consecutivo, numeroIdentificacion);
        if(this.validarResultado(TSG)){estructuraComodin.push(TSG)}
        let TSC = this.validarTratamientoSifilisCongenita(this.TRATAMIENTOSIFILISCONGENITA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(TSC)){estructuraComodin.push(TSC)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}