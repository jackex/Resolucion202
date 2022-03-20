import {Anticoncepcion} from './Anticoncepcion';

export class EstructuraAnticoncepcion extends Anticoncepcion{

    FECHAATENCIONSALUDASESORIAANTICONCEPCION: any;
    SUMINISTROMETODOANTICONCEPTIVO: any;
    FECHASUMINISTROMETODOANTICONCEPTIVO: any;

    agregarDatosExcel(element: any){
        this.FECHAATENCIONSALUDASESORIAANTICONCEPCION = new String(element['53_FechaAtencionEnSaludParaAsesoriaAnticoncepcion']);
        this.SUMINISTROMETODOANTICONCEPTIVO = new String(element['54_SuministroDeMetodoAnticonceptivo']);
        this.FECHASUMINISTROMETODOANTICONCEPTIVO = new String(element['55_FechaSuministroDeMetodoAnticonceptivo']);
    }

    agregarDatos(data: Array<any>){
        this.FECHAATENCIONSALUDASESORIAANTICONCEPCION = data[53];
        this.SUMINISTROMETODOANTICONCEPTIVO = data[54];  
        this.FECHASUMINISTROMETODOANTICONCEPTIVO = data[55];
    }

    validarAnticoncepcion(consecutivo: any, numeroDocumento: any, fechaSuperiorReporte: any, fechaNacimiento: any,
         estructuraAnticoncepcion: Array<any>){
        let FAN = this.validarFechaAtencionAsesoriaAnticoncepcion(this.FECHAATENCIONSALUDASESORIAANTICONCEPCION, fechaSuperiorReporte, fechaNacimiento,
            consecutivo, numeroDocumento);
        if(this.validarResultado(FAN)){estructuraAnticoncepcion.push(FAN)}
        let SMA = this.validarSuministroMetodoAnticonceptivo(this.SUMINISTROMETODOANTICONCEPTIVO, consecutivo, numeroDocumento);
        if(this.validarResultado(SMA)){estructuraAnticoncepcion.push(SMA)}
        let FMA = this.validarFechaSuministroMetodoAnticonceptivo(this.FECHASUMINISTROMETODOANTICONCEPTIVO, fechaSuperiorReporte, fechaNacimiento,
            consecutivo, numeroDocumento);
        if(this.validarResultado(FMA)){estructuraAnticoncepcion.push(FMA)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }

}