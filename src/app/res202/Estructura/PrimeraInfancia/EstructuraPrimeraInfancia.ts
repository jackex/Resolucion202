import {PrimerInfancia} from './PrimeraInfancia';

export class EstructuraPrimeraInfancia extends PrimerInfancia{

    SUMINISTROFORTIFICACIONCASERAPI: any;
    SUMINISTROVITAMINAAPRIMERAINFANCIA: any;
    SUMINISTROHIERROPRIMERAINFANCIA: any;

    agregarDatosExcel(element: any){
        this.SUMINISTROFORTIFICACIONCASERAPI = new String(element['70_SuministroFortificacionCaseraPrimeraInfancia']);
        this.SUMINISTROVITAMINAAPRIMERAINFANCIA = new String(element['71_SuministroVitaminaAPrimeraInfancia']);
        this.SUMINISTROHIERROPRIMERAINFANCIA = new String(element['77_SuministroHierroPrimeraInfancia']);
    }

    agregarDatos(data: Array<any>){
        this.SUMINISTROFORTIFICACIONCASERAPI = data[70];
        this.SUMINISTROVITAMINAAPRIMERAINFANCIA = data[71];
        this.SUMINISTROHIERROPRIMERAINFANCIA = data[77];
    }

    validarPrimerInfancia(consecutivo: any, numeroIdentificacion: any, estructuraPrimeraInfancia: Array<any>){
        let SFCPI = this.validarSuministroFortificaciónCaseraPrimeraInfancia(this.SUMINISTROFORTIFICACIONCASERAPI, consecutivo, numeroIdentificacion);
        if(this.validarResultado(SFCPI)){estructuraPrimeraInfancia.push(SFCPI)}
        let SVPI = this.validarSuministroVitaminaAPrimeraInfancia(this.SUMINISTROVITAMINAAPRIMERAINFANCIA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(SVPI)){estructuraPrimeraInfancia.push(SVPI)}
        let SHPI = this.validarSuministroHierroPrimeraInfancia(this.SUMINISTROHIERROPRIMERAINFANCIA, consecutivo, numeroIdentificacion);
        if(this.validarResultado(SHPI)){estructuraPrimeraInfancia.push(SHPI)}
    }

    validarResultado(value: any): boolean{
        if(value !== undefined){
            return true;
        }
        return false;
    }


}