import { DatoAgudezaVisual } from "./AgudezaVisual/DatoAgudezaVisual";
import { DatoAnticoncepion} from './Anticoncepcion/DatoAnticoncepcion';
import { DatoCancerCervix } from "./CancerCervix/DatoCancerCervix";
import { DatoCancerColon } from './CancerColon/DatoCancerColon';
import { DatoCancerProstata } from './CancerProstata/DatoCancerProstata';
import { DatoCancerMama } from './CancerMama/DatoCancerMama';
import { DatoCOP } from './COP/DatoCOP';
import { DatoGestacion } from './Gestacion/DatoGestacion';
import { DatoPrimeraInfancia } from './PrimeraInfancia/DatoPrimeraInfancia';
import { DatoRecienNacido } from './RecienNacido/DatoRecienNacido';
import { DatoRiesgoCardiovascular } from './RiesgoCardiovascular/DatoRiesgoCardiovascular';
import { DatoTest0a12Años } from './Test0a12Años/DatoTest0a12Años';
import { DatoTest0a7Años } from './Test0a7Años/DatoTest0a7años';
import { DatoTestVejez } from './TestVejez/DatoTestVejez';
import { DatoTuberculosis } from './Tuberculosis/DatoTuberculosis';
import { DatoPoblacionGeneral } from './PoblacionGeneral/DatoPoblacionGeneral';
import { ErroresCalidadDato } from './Errores/ErroresCalidadDato';
import { CalcularEdad } from './CalcularEdad';


export class ValidarCalidadDato{


    constructor(){}

    SUMATORIAERRORES: any;
    TOTALERRORES = 0;
    ERRORESDATO: Array<any> = [];
    TOTALERRORESDATO = 0;

    validarDatos(dataTXT: any){
      
        dataTXT = dataTXT.split(/\r\n|\n/);
        const ERRORESCALIDADDATO = new ErroresCalidadDato;

        let registroControl = dataTXT[0];
        registroControl = registroControl.split('|');
        const fechaSuperiorReporte = registroControl[3];

        for(let i = 1; i < dataTXT.length; i++){
            
            let data = dataTXT[i];
            data = data.split('|');
            const consecutivo = data[1];
            const numeroDocumento = data[4];
            CalcularEdad.prototype.calcularEdad(data[9], fechaSuperiorReporte);
            CalcularEdad.prototype.calcularDiasyMeses(data[9], fechaSuperiorReporte);
            const edadUsuario = CalcularEdad.prototype.EDAD;
            const mesesEdadusuario = CalcularEdad.prototype.NUMERODEMESES;
            const diasEdadUsuario = CalcularEdad.prototype.NUMERODEDIAS;
            const datosEdad = [edadUsuario, mesesEdadusuario,diasEdadUsuario];

            DatoAgudezaVisual.prototype.validarDatosAgudezaViual(data, edadUsuario, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDatoAgudezaVisual);
            DatoAnticoncepion.prototype.validarDatosAnticoncepion(data, edadUsuario, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDatoAnticoncepcion);
            DatoCancerCervix.prototype.validarDatosCancerCervix(data, edadUsuario, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDatoCancerCervix);
            DatoCancerColon.prototype.validarCancerColon(data, edadUsuario, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDatoCancerColon);
            DatoCancerProstata.prototype.validarCancerProstata(data, edadUsuario, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDatoCancerProstata);
            DatoCancerMama.prototype.validarCancerMama(data, edadUsuario, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDatoCancerMama);
            DatoCOP.prototype.validarCOP(data, datosEdad, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDatoCOP);
            DatoGestacion.prototype.validarGestacion(data, datosEdad, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDatoGestacion);
            DatoPrimeraInfancia.prototype.validarPrimeraInfancia(data, datosEdad, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDatoPrimeraInfancia);
            DatoRecienNacido.prototype.validarRecienNacido(data, datosEdad, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDatoRecienNacido);
            DatoRiesgoCardiovascular.prototype.validarRiesgoCardiovascular(data, datosEdad, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDatoRiesgoCardiovascular);
            DatoTest0a12Años.prototype.validarTest0a12Años(data, edadUsuario, consecutivo, numeroDocumento,ERRORESCALIDADDATO.erroresCalidadDato0a12Anios);
            DatoTest0a7Años.prototype.validarTest0a7Años(data, datosEdad, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDato0a7Anios);
            DatoTestVejez.prototype.validarTestVejez(data, edadUsuario, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDatoVejez);
            DatoTuberculosis.prototype.validarTuberculosis(data, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDatoTuberculosis);
            DatoPoblacionGeneral.prototype.validarPoblacionGeneral(data, edadUsuario, consecutivo, numeroDocumento, ERRORESCALIDADDATO.erroresCalidadDatoPoblacionGeneral);

            if(ERRORESCALIDADDATO.erroresCalidadDatoAgudezaVisual.length > 0 || ERRORESCALIDADDATO.erroresCalidadDatoAnticoncepcion.length > 0 
              || ERRORESCALIDADDATO.erroresCalidadDatoCancerCervix.length > 0 || ERRORESCALIDADDATO.erroresCalidadDatoCancerColon.length > 0
              || ERRORESCALIDADDATO.erroresCalidadDatoCancerProstata.length > 0 || ERRORESCALIDADDATO.erroresCalidadDatoCancerMama.length > 0
              || ERRORESCALIDADDATO.erroresCalidadDatoCOP.length > 0 || ERRORESCALIDADDATO.erroresCalidadDatoGestacion.length > 0
              || ERRORESCALIDADDATO.erroresCalidadDatoPrimeraInfancia.length > 0 || ERRORESCALIDADDATO.erroresCalidadDatoRecienNacido.length > 0
              || ERRORESCALIDADDATO.erroresCalidadDatoRiesgoCardiovascular.length > 0 || ERRORESCALIDADDATO.erroresCalidadDato0a12Anios.length > 0
              || ERRORESCALIDADDATO.erroresCalidadDato0a7Anios.length > 0 || ERRORESCALIDADDATO.erroresCalidadDatoVejez.length > 0
              || ERRORESCALIDADDATO.erroresCalidadDatoTuberculosis.length > 0 ||ERRORESCALIDADDATO.erroresCalidadDatoPoblacionGeneral.length > 0){

                  ERRORESCALIDADDATO.errores.push({numeroDocumento: numeroDocumento,
                    datoAgudezaVisual: {
                      numeroErrores: ERRORESCALIDADDATO.erroresCalidadDatoAgudezaVisual.length,
                      errores: [ERRORESCALIDADDATO.erroresCalidadDatoAgudezaVisual]
                    },
                    datoAnticoncepcion: {
                        numeroErrores: ERRORESCALIDADDATO.erroresCalidadDatoAnticoncepcion.length,
                        errores: [ERRORESCALIDADDATO.erroresCalidadDatoAnticoncepcion]
                      },
                    datoCancerCervix: {
                        numeroErrores: ERRORESCALIDADDATO.erroresCalidadDatoCancerCervix.length,
                        errores: [ERRORESCALIDADDATO.erroresCalidadDatoCancerCervix]
                      },
                    datoCancerColon: {
                        numeroErrores: ERRORESCALIDADDATO.erroresCalidadDatoCancerColon.length,
                        errores: [ERRORESCALIDADDATO.erroresCalidadDatoCancerColon]
                      },
                    datoCancerProstata: {
                        numeroErrores: ERRORESCALIDADDATO.erroresCalidadDatoCancerProstata.length,
                        errores: [ERRORESCALIDADDATO.erroresCalidadDatoCancerProstata]
                      },
                    datoCancerMama: {
                      numeroErrores: ERRORESCALIDADDATO.erroresCalidadDatoCancerMama.length,
                      errores: [ERRORESCALIDADDATO.erroresCalidadDatoCancerMama]
                    },
                    datoCOP: {
                      numeroErrores: ERRORESCALIDADDATO.erroresCalidadDatoCOP.length,
                      errores: [ERRORESCALIDADDATO.erroresCalidadDatoCOP]
                    },
                    datoGestacion: {
                      numeroErrores: ERRORESCALIDADDATO.erroresCalidadDatoGestacion.length,
                      errores: [ERRORESCALIDADDATO.erroresCalidadDatoGestacion]
                    },
                    datoPrimeraInfancia: {
                      numeroErrores: ERRORESCALIDADDATO.erroresCalidadDatoPrimeraInfancia.length,
                      errores: [ERRORESCALIDADDATO.erroresCalidadDatoPrimeraInfancia]
                    },
                    datoRecienNacido: {
                      numeroErrores: ERRORESCALIDADDATO.erroresCalidadDatoRecienNacido.length,
                      errores: [ERRORESCALIDADDATO.erroresCalidadDatoRecienNacido]
                    },
                    datoRiesgoCardiovascular: {
                      numeroErrores: ERRORESCALIDADDATO.erroresCalidadDatoRiesgoCardiovascular.length,
                      errores: [ERRORESCALIDADDATO.erroresCalidadDatoRiesgoCardiovascular]
                    },
                    datoTest0a12Anios: {
                      numeroErrores: ERRORESCALIDADDATO.erroresCalidadDato0a12Anios.length,
                      errores: [ERRORESCALIDADDATO.erroresCalidadDato0a12Anios]
                    },
                    datoTest0a7Anios: {
                      numeroErrores: ERRORESCALIDADDATO.erroresCalidadDato0a7Anios.length,
                      errores: [ERRORESCALIDADDATO.erroresCalidadDato0a7Anios]
                    },
                    datoTestVejez: {
                      numeroErrores: ERRORESCALIDADDATO.erroresCalidadDatoVejez.length,
                      errores: [ERRORESCALIDADDATO.erroresCalidadDatoVejez]
                    },
                    datoTuberculosis: {
                      numeroErrores: ERRORESCALIDADDATO.erroresCalidadDatoTuberculosis.length,
                      errores: [ERRORESCALIDADDATO.erroresCalidadDatoTuberculosis]
                    },
                    datoPoblacionGeneral: {
                      numeroErrores: ERRORESCALIDADDATO.erroresCalidadDatoPoblacionGeneral.length,
                      errores: [ERRORESCALIDADDATO.erroresCalidadDatoPoblacionGeneral]
                    }           
                  });  
              }

              ERRORESCALIDADDATO.erroresCalidadDatoAgudezaVisual = [];
              ERRORESCALIDADDATO.erroresCalidadDatoAnticoncepcion = [];
              ERRORESCALIDADDATO.erroresCalidadDatoCancerCervix = [];
              ERRORESCALIDADDATO.erroresCalidadDatoCancerColon = [];
              ERRORESCALIDADDATO.erroresCalidadDatoCancerProstata = [];
              ERRORESCALIDADDATO.erroresCalidadDatoCancerMama = [];
              ERRORESCALIDADDATO.erroresCalidadDatoCOP = [];
              ERRORESCALIDADDATO.erroresCalidadDatoGestacion = [];
              ERRORESCALIDADDATO.erroresCalidadDatoPrimeraInfancia = [];
              ERRORESCALIDADDATO.erroresCalidadDatoRecienNacido = [];
              ERRORESCALIDADDATO.erroresCalidadDatoRiesgoCardiovascular = [];
              ERRORESCALIDADDATO.erroresCalidadDato0a12Anios = [];
              ERRORESCALIDADDATO.erroresCalidadDato0a7Anios = [];
              ERRORESCALIDADDATO.erroresCalidadDatoVejez = [];
              ERRORESCALIDADDATO.erroresCalidadDatoTuberculosis = [];
              ERRORESCALIDADDATO.erroresCalidadDatoPoblacionGeneral = [];
        }

        this.contarErrores(ERRORESCALIDADDATO.errores);
        this.ERRORESDATO = ERRORESCALIDADDATO.errores;
        console.log("TOTAL ERRORES DATOS " + this.TOTALERRORESDATO);
        //ERRORESCALIDADDATO.errores = [];

    }

    contarErrores(errores: any){
      this.TOTALERRORESDATO = 0;
      let TOTALERRORES = {agudezaVisual: 0, anticoncepcion: 0, cancerCervix: 0, cancerColon: 0, cancerProstata: 0, cancerMama: 0,
        COP: 0, gestacion: 0, primeraInfancia: 0, recienNacido: 0, riesgoCardiovascular: 0, test0a12Anios: 0,
        test0a7Anios: 0, testVejez: 0, tuberculosis: 0, poblacionGeneral: 0};

      for(let i = 0; i < errores.length;i++){
        if(errores[i].datoAgudezaVisual.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoAgudezaVisual.numeroErrores;
          TOTALERRORES.agudezaVisual += errores[i].datoAgudezaVisual.numeroErrores;
        }
        if(errores[i].datoAnticoncepcion.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoAnticoncepcion.numeroErrores;
          TOTALERRORES.anticoncepcion += errores[i].datoAnticoncepcion.numeroErrores;
        }
        if(errores[i].datoCancerCervix.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoCancerCervix.numeroErrores;
          TOTALERRORES.cancerCervix += errores[i].datoCancerCervix.numeroErrores;
        }
        if(errores[i].datoCancerColon.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoCancerColon.numeroErrores;
          TOTALERRORES.cancerColon += errores[i].datoCancerColon.numeroErrores;
        }
        if(errores[i].datoCancerProstata.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoCancerProstata.numeroErrores;
          TOTALERRORES.cancerProstata  += errores[i].datoCancerProstata.numeroErrores;
        }
        if(errores[i].datoCancerMama.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoCancerMama.numeroErrores;
          TOTALERRORES.cancerMama += errores[i].datoCancerMama.numeroErrores;
        }
        if(errores[i].datoCOP.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoCOP.numeroErrores;
          TOTALERRORES.COP += errores[i].datoCOP.numeroErrores;
        }
        if(errores[i].datoGestacion.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoGestacion.numeroErrores;
          TOTALERRORES.gestacion += errores[i].datoGestacion.numeroErrores;
        }
        if(errores[i].datoPrimeraInfancia.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoPrimeraInfancia.numeroErrores;
          TOTALERRORES.primeraInfancia += errores[i].datoPrimeraInfancia.numeroErrores;
        }
        if(errores[i].datoRecienNacido.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoRecienNacido.numeroErrores;
          TOTALERRORES.recienNacido += errores[i].datoRecienNacido.numeroErrores;
        }
        if(errores[i].datoRiesgoCardiovascular.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoRiesgoCardiovascular.numeroErrores;
          TOTALERRORES.riesgoCardiovascular += errores[i].datoRiesgoCardiovascular.numeroErrores;
        }
        if(errores[i].datoTest0a12Anios.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoTest0a12Anios.numeroErrores;
          TOTALERRORES.test0a12Anios += errores[i].datoTest0a12Anios.numeroErrores;
        }
        if(errores[i].datoTest0a7Anios.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoTest0a7Anios.numeroErrores;
          TOTALERRORES.test0a7Anios +=errores[i].datoTest0a7Anios.numeroErrores;
        }
        if(errores[i].datoTestVejez.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoTestVejez.numeroErrores;
          TOTALERRORES.testVejez += errores[i].datoTestVejez.numeroErrores;
        }
        if(errores[i].datoTuberculosis.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoTuberculosis.numeroErrores;
          TOTALERRORES.tuberculosis += errores[i].datoTuberculosis.numeroErrores;
        }
        if(errores[i].datoPoblacionGeneral.numeroErrores > 0){
          this.TOTALERRORESDATO += errores[i].datoPoblacionGeneral.numeroErrores;
          TOTALERRORES.poblacionGeneral += errores[i].datoPoblacionGeneral.numeroErrores;
        }
      }
      this.SUMATORIAERRORES = TOTALERRORES;
    }


}