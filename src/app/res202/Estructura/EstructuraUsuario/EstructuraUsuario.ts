import {Paciente} from './Usuario';

export class EstructuraUsuario extends Paciente{

    CONSECUTIVO: any;
    TIPOREGISTRO: any;
    CODIGOHABILITACIONIPSPRIMARIA: any;
    TIPOIDENTIFICACIONUSUARIO: any;
    NUMEROIDENTIFICACION: any;
    PRIMERNOMBRE: any;
    SEGUNDONOMBRE: any;
    PRIMERAPELLIDO: any;
    SEGUNDOAPELLIDO: any;
    FECHANACIMIENTO: any;
    SEXO: any;
    CODIGOPERTENENCIAETNICA: any;
    CODIGOOCUPACION: any;
    CODIGONIVELEDUCATIVO: any;
    CODIGOPAIS: any;



    constructor(){
        super();
    }

    agregarDatosExcel(element: any, numeroDocumento: any, fechaNacimiento: any){
        this.TIPOREGISTRO = new String(element['TipoDeRegistro']);
        this.CONSECUTIVO = new String(element['1_ConsecutivoDeRegistro']);
        this.CODIGOHABILITACIONIPSPRIMARIA = new String(element['2_CodigoHabilitacionIPS']);
        this.TIPOIDENTIFICACIONUSUARIO = new String(element['3_TipoIdentificacionUsuario']);
        this.NUMEROIDENTIFICACION = numeroDocumento;
        this.PRIMERNOMBRE = new String(element['7_PrimerNombreUsuario']);
        this.SEGUNDONOMBRE = new String(element['8_SegundoNombreUsuario']);
        this.PRIMERAPELLIDO = new String(element['5_PrimerApellidoUsuario']);
        this.SEGUNDOAPELLIDO = new String(element['6_SegundoApellidoUsuario']);
        this.FECHANACIMIENTO = fechaNacimiento;
        this.SEXO = new String(element['10_SEXO']);
        this.CODIGOPERTENENCIAETNICA = new String(element['11_CodigoPertenenciaEtnica']);
        this.CODIGOOCUPACION = new String(element['12_CodigoOcupación']);
        this.CODIGONIVELEDUCATIVO = new String(element['13_CodigoNivelEducativo']);
        this.CODIGOPAIS = new String(element['34_CodigoPais']);
    }

    agregarDatos(data: Array<any>, consecutivoRegistro: any, numeroDocumento: any, fechaNacimiento: any){
              this.TIPOREGISTRO =data[0]; 
              this.CONSECUTIVO = consecutivoRegistro;
              this.CODIGOHABILITACIONIPSPRIMARIA = data[2];
              this.TIPOIDENTIFICACIONUSUARIO = data[3];
              this.NUMEROIDENTIFICACION = numeroDocumento;
              this.PRIMERNOMBRE = data[7];
              this.SEGUNDONOMBRE = data[8];
              this.PRIMERAPELLIDO = data[5];
              this.SEGUNDOAPELLIDO = data[6];
              this.FECHANACIMIENTO = fechaNacimiento;
              this.SEXO = data[10];
              this.CODIGOPERTENENCIAETNICA = data[11];
              this.CODIGOOCUPACION = data[12];
              this.CODIGONIVELEDUCATIVO = data[13];
              this.CODIGOPAIS = data[34];
    }

    validarDatosPaciente(estructuraUsuario: Array<any>){
        let TR = this.validarTipoRegistro(this.TIPOREGISTRO, this.CONSECUTIVO, this.NUMEROIDENTIFICACION);
        if(this.validarResultado(TR)){estructuraUsuario.push(TR);}
        let CH = this.validarCodigoHabilitacion(this.CODIGOHABILITACIONIPSPRIMARIA, this.CONSECUTIVO, this.NUMEROIDENTIFICACION);
        if(this.validarResultado(CH)){estructuraUsuario.push(CH);}
        let TI = this.validarTipoIDentificacion(this.TIPOIDENTIFICACIONUSUARIO, this.CONSECUTIVO, this.NUMEROIDENTIFICACION);
        if(this.validarResultado(TI)){estructuraUsuario.push(TI);}
        let ND = this.validarNumeroDocumento(this.NUMEROIDENTIFICACION, this.CONSECUTIVO, this.NUMEROIDENTIFICACION);
        if(this.validarResultado(ND)){estructuraUsuario.push(ND);}
        let PN = this.validarPrimerNombre(this.PRIMERNOMBRE, this.CONSECUTIVO, this.NUMEROIDENTIFICACION);
        if(this.validarResultado(PN)){estructuraUsuario.push(PN);}
        let SN = this.validarSegundoNombre(this.SEGUNDONOMBRE, this.CONSECUTIVO, this.NUMEROIDENTIFICACION);
        if(this.validarResultado(SN)){estructuraUsuario.push(SN);}
        let PA = this.validarPrimerApellido(this.PRIMERAPELLIDO, this.CONSECUTIVO, this.NUMEROIDENTIFICACION);
        if(this.validarResultado(PA)){estructuraUsuario.push(PA);}
        let SA = this.ValidarSegundoApellido(this.SEGUNDOAPELLIDO, this.CONSECUTIVO, this.NUMEROIDENTIFICACION);
        if(this.validarResultado(SA)){estructuraUsuario.push(SA);}
        let FN = this.ValidarFechaNacimiento(this.FECHANACIMIENTO, this.CONSECUTIVO, this.NUMEROIDENTIFICACION);
        if(this.validarResultado(FN)){estructuraUsuario.push(FN);}
        let VS = this.validarSexo(this.SEXO, this.CONSECUTIVO, this.NUMEROIDENTIFICACION);
        if(this.validarResultado(VS)){estructuraUsuario.push(VS);}
        let PE = this.validarCodigoPertenenciaEtnica(this.CODIGOPERTENENCIAETNICA, this.CONSECUTIVO, this.NUMEROIDENTIFICACION);
        if(this.validarResultado(PE)){estructuraUsuario.push(PE);}
        let CO = this.validarCodigoOcupacion(this.CODIGOOCUPACION, this.CONSECUTIVO, this.NUMEROIDENTIFICACION);
        if(this.validarResultado(CO)){estructuraUsuario.push(CO);}
        let NE = this.validarCodigoNivelEducativo(this.CODIGONIVELEDUCATIVO, this.CONSECUTIVO, this.NUMEROIDENTIFICACION);
        if(this.validarResultado(NE)){estructuraUsuario.push(NE);}
        let CP = this.validarCodigoPais(this.CODIGOPAIS, this.CONSECUTIVO, this.NUMEROIDENTIFICACION);
        if(this.validarResultado(CP)){estructuraUsuario.push(CP);}
    };

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}