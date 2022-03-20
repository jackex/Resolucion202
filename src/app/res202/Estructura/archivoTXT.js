const estructuraPaciente = require('./EstructuraUsuario/EstructuraUsuario');
const estructuraGestacion = require('./Gestacion/EstructuraGestacion');
const estructuraAgudezaVisual = require('./AgudezaVisual/EstructuraAgudezaVisual');
const estructuraAnticoncepcion = require('./Anticoncepcion/EstructuraAnticoncepcion');
const estructuraCancerCervix = require('./CancerCervix/EstructuraCancerCervix');
const estructuraCancerColon = require('./CancerColon/EstructuraCancerColon');
const estructuraCancerProstata  = require('./CancerProstata/EstructuraCancerProstata');
const estructuraCancerMama = require('./CancerMama/EstructuraCancerMama');
const estructuraCop = require('./COP/EstructuraCOP');
const estructuraVariablesComodin = require('./VariablesComodin/EstructuraVariablesComodin');
const estructuraPrimeraInfancia = require('./PrimeraInfancia/EstructuraPrimeraInfancia');
const estructuraRecienNacido = require('./RecienNacidos/EstructuraRecienNacido');
const estructuraRiesgoCardiovascular = require('./RiesgoCardiovascular/EstructuraRiesgoCardiovascular');
const estructuraTest0a7Anios = require('./Test0a7Anios/EstructuraTestoa7Anios');
const estructuraTest0a12Anios = require('./Test0a12Anios/EstructuraTest0a12Anios');
const estructuraTestVejez = require('./TestVejez/EstructuraTestVejez');
const estructuraPoblacionGeneral = require('./PoblacionGeneral/EstructuraPoblacionGeneral');
const estructuraTuberculosis = require('./Tuberculosis/EstructuraTuberculosis');
const erroresEstructura = require('./ConsolidadoErrores/ErroresEstructura');

class ArchivoTXT{

  ERRORESTOTALESESTRUCTURA = {estructuraUsuario: 0, estructuraGestacion: 0, estructuraAgudezaVisual: 0, estructuraAnticoncepcion: 0,
    estructuraCancerCervix: 0, estructuraCancerColon: 0, estructuraCancerProstata: 0, estructuraCancerMama: 0, estructuraCOP: 0,
    estructuraComodin: 0, estructuraPrimeraInfancia: 0, estructuraRecienNacido: 0, estructuraRiesgoCardiovascular: 0,
    estructura0a7Anios: 0, estructura0a12Anios: 0, estructuraVejez: 0, estructuraPoblacionGeneral: 0, estructuraTuberculosis: 0};

    TOTALERRORES = 0;
    SUMATORIAERRORESESTRUCTURA = {estructuraUsuario: 0, estructuraGestacion: 0, estructuraAgudezaVisual: 0, estructuraAnticoncepcion: 0,
      estructuraCancerCervix: 0, estructuraCancerColon: 0, estructuraCancerProstata: 0, estructuraCancerMama: 0, estructuraCOP: 0,
      estructuraComodin: 0, estructuraPrimeraInfancia: 0, estructuraRecienNacido: 0, estructuraRiesgoCardiovascular: 0,
      estructura0a7Anios: 0, estructura0a12Anios: 0, estructuraVejez: 0, estructuraPoblacionGeneral: 0, estructuraTuberculosis: 0};
    
    FECHAMAXIMAREPORTE= '';

    limpiar(ERRORESESTRUCTURA){
      ERRORESESTRUCTURA.estructuraUsuario = [];
      ERRORESESTRUCTURA.estructuraGestacion = [];
      ERRORESESTRUCTURA.estructuraAgudezaVisual = [];
      ERRORESESTRUCTURA.estructuraAnticoncepcion = [];
      ERRORESESTRUCTURA.estructuraCancerCervix = [];
      ERRORESESTRUCTURA.estructuraCancerColon = [];
      ERRORESESTRUCTURA.estructuraCancerProstata = [];
      ERRORESESTRUCTURA.estructuraCancerMama = [];
      ERRORESESTRUCTURA.estructuraCOP = [];
      ERRORESESTRUCTURA.estructuraComodin = [];
      ERRORESESTRUCTURA.estructuraPrimeraInfancia = [];
      ERRORESESTRUCTURA.estructuraRecienNacido = [];
      ERRORESESTRUCTURA.estructuraRiesgoCardiovascular = [];
      ERRORESESTRUCTURA.estructura0a7Anios = [];
      ERRORESESTRUCTURA.estructura0a12Anios = [];
      ERRORESESTRUCTURA.estructuraVejez = [];
      ERRORESESTRUCTURA.estructuraPoblacionGeneral = [];
      ERRORESESTRUCTURA.estructuraTuberculosis = [];
    }

    numeroTotalErrores(errores){
      let total = 0;
      for(var i = 0; i < errores.length; i++){
        total += errores[i].estructuraUsuario.numeroErrores +
        errores[i].estructura0a12Anios.numeroErrores + 
        errores[i].estructura0a7Anios.numeroErrores + 
        errores[i].estructuraAgudezaVisual.numeroErrores + 
        errores[i].estructuraAnticoncepcion.numeroErrores + 
        errores[i].estructuraCOP.numeroErrores + 
        errores[i].estructuraTuberculosis.numeroErrores + 
        errores[i].estructuraCancerColon.numeroErrores + 
        errores[i].estructuraCancerCervix.numeroErrores + 
        errores[i].estructuraCancerMama.numeroErrores + 
        errores[i].estructuraCancerProstata.numeroErrores + 
        errores[i].estructuraComodin.numeroErrores + 
        errores[i].estructuraGestacion.numeroErrores + 
        errores[i].estructuraPoblacionGeneral.numeroErrores + 
        errores[i].estructuraPrimeraInfancia.numeroErrores + 
        errores[i].estructuraRecienNacido.numeroErrores + 
        errores[i].estructuraRiesgoCardiovascular.numeroErrores +
        errores[i].estructuraVejez.numeroErrores;
      }
      return total;
    }

    validarTXT(dataTXT){
          dataTXT = dataTXT.split(/\r\n|\n/);
          let registroDeControl = dataTXT[0];
          registroDeControl = registroDeControl.split('|');

          //const fechaInferiorReporte = registroDeControl[2];
          const fechaSuperiorReporte = registroDeControl[3];
          this.FECHAMAXIMAREPORTE = fechaSuperiorReporte;
          const totalRegistros = parseInt(registroDeControl[4]);
          let arrayConsecutivo = new Array();
          
          const ERRORESESTRUCTURA = new erroresEstructura.ErroresEstructura;
          
          for(let i = 1; i < dataTXT.length; i++){
            let data = dataTXT[i];
            data = data.split('|');
            const excelRegistro = data[1]; // CONSECUTIVO DE REGISTRO
            arrayConsecutivo.push({valor: excelRegistro, consecutivo: i});
          }
      
          estructuraPaciente.EstructuraUsuario.prototype.contarConsecutivos(arrayConsecutivo, totalRegistros, 
          ERRORESESTRUCTURA.erroresConsecutivo.consecutivo);

          if(ERRORESESTRUCTURA.erroresConsecutivo.consecutivo.length === 0){
            console.log("Consecutivo registro OK!!");

            for(let i = 1; i < dataTXT.length; i++){
              let data = dataTXT[i];
              data = data.split('|');

              const consecutivoRegistro = data[1]; 
              const fechaNacimiento = data[9]; 
              const numeroDocumento = data[4]; 


              estructuraPaciente.EstructuraUsuario.prototype.agregarDatos(data, consecutivoRegistro, numeroDocumento, fechaNacimiento);
              estructuraPaciente.EstructuraUsuario.prototype.validarDatosPaciente(ERRORESESTRUCTURA.estructuraUsuario);
              
              estructuraGestacion.EstructuraGestacion.prototype.agregarDatos(data);  
              estructuraGestacion.EstructuraGestacion.prototype.validarGestantes(consecutivoRegistro, numeroDocumento,
                 fechaNacimiento, fechaSuperiorReporte, ERRORESESTRUCTURA.estructuraGestacion);

              estructuraAgudezaVisual.EstructuraAgudezaVisual.prototype.agregarDatos(data);
              estructuraAgudezaVisual.EstructuraAgudezaVisual.prototype.validarAgudezaVisual(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro,
               numeroDocumento, ERRORESESTRUCTURA.estructuraAgudezaVisual);

              estructuraAnticoncepcion.EstructuraAnticoncepcion.prototype.agregarDatos(data);
              estructuraAnticoncepcion.EstructuraAnticoncepcion.prototype.validarAnticoncepcion(consecutivoRegistro, numeroDocumento, fechaSuperiorReporte, fechaNacimiento,
                ERRORESESTRUCTURA.estructuraAnticoncepcion);              
              
              estructuraCancerCervix.EstructuraCancerCervix.prototype.agregarDatos(data);
              estructuraCancerCervix.EstructuraCancerCervix.prototype.validarCancerCervix(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro,
               numeroDocumento, ERRORESESTRUCTURA.estructuraCancerCervix);

              estructuraCancerColon.EstructuraCancerColon.prototype.agregarDatos(data);
              estructuraCancerColon.EstructuraCancerColon.prototype.validarCancerColon(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro, 
                numeroDocumento, ERRORESESTRUCTURA.estructuraCancerColon);
  
              estructuraCancerProstata.EstructuraCancerProstata.prototype.agregarDatos(data);
              estructuraCancerProstata.EstructuraCancerProstata.prototype.validarCancerProstata(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro, 
                numeroDocumento, ERRORESESTRUCTURA.estructuraCancerProstata);
 
              estructuraCancerMama.EstructuraCancerMama.prototype.agregarDatos(data);
              estructuraCancerMama.EstructuraCancerMama.prototype.validarCancerMama(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro, 
                numeroDocumento, ERRORESESTRUCTURA.estructuraCancerMama);
              
              estructuraCop.EstructuraCOP.prototype.agregarDatos(data);
              estructuraCop.EstructuraCOP.prototype.ValidarCOP(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro,
                numeroDocumento, ERRORESESTRUCTURA.estructuraCOP);

              estructuraVariablesComodin.EstructuraVariablesComodin.prototype.agregarDatos(data);
              estructuraVariablesComodin.EstructuraVariablesComodin.prototype.validarVariablesComodin(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro, 
                numeroDocumento, ERRORESESTRUCTURA.estructuraComodin);

              estructuraPrimeraInfancia.EstructuraPrimeraInfancia.prototype.agregarDatos(data);
              estructuraPrimeraInfancia.EstructuraPrimeraInfancia.prototype.validarPrimerInfancia(consecutivoRegistro, numeroDocumento, ERRORESESTRUCTURA.estructuraPrimeraInfancia);
            
              estructuraRecienNacido.EstructuraRecienNacido.prototype.agregarDatos(data);
              estructuraRecienNacido.EstructuraRecienNacido.prototype.validarRecienNacido(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro,
                 numeroDocumento, ERRORESESTRUCTURA.estructuraRecienNacido);

              estructuraRiesgoCardiovascular.EstructuraRiesgoCardiovascular.prototype.agregarDatos(data);
              estructuraRiesgoCardiovascular.EstructuraRiesgoCardiovascular.prototype.validarEstructuraRiesgoCardiovascular(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro, 
                numeroDocumento, ERRORESESTRUCTURA.estructuraRiesgoCardiovascular);
            
              estructuraTest0a7Anios.EstructuraTest0a7Anios.prototype.agregarDatos(data);
              estructuraTest0a7Anios.EstructuraTest0a7Anios.prototype.validarTest0a7Anios(consecutivoRegistro, numeroDocumento, ERRORESESTRUCTURA.estructura0a7Anios);   

              estructuraTest0a12Anios.EstructuraTest0a12Anios.prototype.agregarDatos(data);
              estructuraTest0a12Anios.EstructuraTest0a12Anios.prototype.validarTest0a12Anios(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro, 
                numeroDocumento, ERRORESESTRUCTURA.estructura0a12Anios);

              estructuraTestVejez.EstructuraTestVejez.prototype.agregarDatos(data);
              estructuraTestVejez.EstructuraTestVejez.prototype.validarTestVejez(consecutivoRegistro, numeroDocumento, ERRORESESTRUCTURA.estructuraVejez);
              
              estructuraPoblacionGeneral.EstructuraPoblacionGeneral.prototype.agregarDatos(data);
              estructuraPoblacionGeneral.EstructuraPoblacionGeneral.prototype.validarPoblacionGeneral(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro,
                numeroDocumento, ERRORESESTRUCTURA.estructuraPoblacionGeneral);
            
              estructuraTuberculosis.EstructuraTuberculosis.prototype.agregarDatos(data);
              estructuraTuberculosis.EstructuraTuberculosis.prototype.validarTuberculosis(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro, 
              numeroDocumento, ERRORESESTRUCTURA.estructuraTuberculosis);

              if(ERRORESESTRUCTURA.estructuraUsuario.length > 0 || ERRORESESTRUCTURA.estructuraGestacion.length > 0 ||
                  ERRORESESTRUCTURA.estructuraAgudezaVisual.length > 0 || ERRORESESTRUCTURA.estructuraAnticoncepcion.length > 0 ||
                  ERRORESESTRUCTURA.estructuraCancerCervix.length > 0 || ERRORESESTRUCTURA.estructuraCancerColon.length > 0 ||
                  ERRORESESTRUCTURA.estructuraCancerProstata.length > 0 || ERRORESESTRUCTURA.estructuraCancerMama.length > 0 ||
                  ERRORESESTRUCTURA.estructuraCOP.length > 0 || ERRORESESTRUCTURA.estructuraComodin.length > 0 ||
                  ERRORESESTRUCTURA.estructuraPrimeraInfancia.length > 0 || ERRORESESTRUCTURA.estructuraRecienNacido.length > 0 ||
                  ERRORESESTRUCTURA.estructuraRiesgoCardiovascular.length > 0 || ERRORESESTRUCTURA.estructura0a7Anios.length > 0 ||
                  ERRORESESTRUCTURA.estructura0a12Anios.length > 0 || ERRORESESTRUCTURA.estructuraVejez.length > 0 ||
                  ERRORESESTRUCTURA.estructuraPoblacionGeneral.length > 0 || ERRORESESTRUCTURA.estructuraTuberculosis.length > 0){
                    ERRORESESTRUCTURA.errores.push({numeroDocumento: numeroDocumento,
                      estructuraUsuario: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraUsuario.length,
                        errores: [ERRORESESTRUCTURA.estructuraUsuario]
                      },
                      estructuraGestacion: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraGestacion.length,
                        errores: [ERRORESESTRUCTURA.estructuraGestacion]
                      },
                      estructuraAgudezaVisual: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraAgudezaVisual.length,
                        errores: [ERRORESESTRUCTURA.estructuraAgudezaVisual]
                      },
                      estructuraAnticoncepcion: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraAnticoncepcion.length,
                        errores: [ERRORESESTRUCTURA.estructuraAnticoncepcion]
                      },
                      estructuraCancerCervix: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraCancerCervix.length,
                        errores: [ERRORESESTRUCTURA.estructuraCancerCervix]
                      },
                      estructuraCancerColon: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraCancerColon.length,
                        errores: [ERRORESESTRUCTURA.estructuraCancerColon]
                      },
                      estructuraCancerProstata: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraCancerProstata.length,
                        errores: [ERRORESESTRUCTURA.estructuraCancerProstata]
                      },
                      estructuraCancerMama: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraCancerMama.length,
                        errores: [ERRORESESTRUCTURA.estructuraCancerMama]
                      },
                      estructuraCOP: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraCOP.length,
                        errores: [ERRORESESTRUCTURA.estructuraCOP]
                      },
                      estructuraComodin: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraComodin.length,
                        errores: [ERRORESESTRUCTURA.estructuraComodin]
                      },
                      estructuraPrimeraInfancia: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraPrimeraInfancia.length,
                        errores: [ERRORESESTRUCTURA.estructuraPrimeraInfancia]
                      },
                      estructuraRecienNacido: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraRecienNacido.length,
                        errores: [ERRORESESTRUCTURA.estructuraRecienNacido]
                      },
                      estructuraRiesgoCardiovascular: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraRiesgoCardiovascular.length,
                        errores: [ERRORESESTRUCTURA.estructuraRiesgoCardiovascular]
                      },
                      estructura0a7Anios: {
                        numeroErrores: ERRORESESTRUCTURA.estructura0a7Anios.length,
                        errores: [ERRORESESTRUCTURA.estructura0a7Anios]
                      },
                      estructura0a12Anios: {
                        numeroErrores: ERRORESESTRUCTURA.estructura0a12Anios.length,
                        errores: [ERRORESESTRUCTURA.estructura0a12Anios]
                      },
                      estructuraVejez: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraVejez.length,
                        errores: [ERRORESESTRUCTURA.estructuraVejez]
                      },
                      estructuraPoblacionGeneral: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraPoblacionGeneral.length,
                        errores: [ERRORESESTRUCTURA.estructuraPoblacionGeneral]
                      },
                      estructuraTuberculosis: {
                        numeroErrores: ERRORESESTRUCTURA.estructuraTuberculosis.length,
                        errores: [ERRORESESTRUCTURA.estructuraTuberculosis]
                      }
                    });  
                }                         
              
              this.contarErrores(ERRORESESTRUCTURA.errores);
              this.ERRORESTOTALESESTRUCTURA = ERRORESESTRUCTURA.errores;
              this.limpiar(ERRORESESTRUCTURA);

            }

            this.TOTALERRORES = this.numeroTotalErrores(ERRORESESTRUCTURA.errores);
            //console.log(this.ERRORESTOTALESESTRUCTURA);
            console.log("TOTAL ERRORES ESTRUCTURA: " + this.TOTALERRORES);
            //this.totalErroresEstructura = ERRORESESTRUCTURA.errores;
          }else{
            console.log("Error en Consecutivo registro");
          }
    }

    contarErrores(errores){
      let totalErroresEstructura = {estructuraUsuario: 0, estructuraGestacion: 0, estructuraAgudezaVisual: 0, estructuraAnticoncepcion: 0,
        estructuraCancerCervix: 0, estructuraCancerColon: 0, estructuraCancerProstata: 0, estructuraCancerMama: 0, estructuraCOP: 0,
        estructuraComodin: 0, estructuraPrimeraInfancia: 0, estructuraRecienNacido: 0, estructuraRiesgoCardiovascular: 0,
        estructura0a7Anios: 0, estructura0a12Anios: 0, estructuraVejez: 0, estructuraPoblacionGeneral: 0, estructuraTuberculosis: 0};

      for(let i = 0; i < errores.length;i++){
        if(errores[i].estructuraUsuario.numeroErrores > 0){
          totalErroresEstructura.estructuraUsuario += errores[i].estructuraUsuario.numeroErrores;
        }
        if(errores[i].estructuraGestacion.numeroErrores > 0){
          totalErroresEstructura.estructuraGestacion += errores[i].estructuraGestacion.numeroErrores;
        }
        if(errores[i].estructuraAgudezaVisual.numeroErrores > 0){
          totalErroresEstructura.estructuraAgudezaVisual += errores[i].estructuraAgudezaVisual.numeroErrores;
        }
        if(errores[i].estructuraAnticoncepcion.numeroErrores > 0){
          totalErroresEstructura.estructuraAnticoncepcion += errores[i].estructuraAnticoncepcion.numeroErrores;
        }
        if(errores[i].estructuraCancerCervix.numeroErrores > 0){
          totalErroresEstructura.estructuraCancerCervix += errores[i].estructuraCancerCervix.numeroErrores;
        }
        if(errores[i].estructuraCancerColon.numeroErrores > 0){
          totalErroresEstructura.estructuraCancerColon += errores[i].estructuraCancerColon.numeroErrores;
        }
        if(errores[i].estructuraCancerProstata.numeroErrores > 0){
          totalErroresEstructura.estructuraCancerProstata += errores[i].estructuraCancerProstata.numeroErrores;
        }
        if(errores[i].estructuraCancerMama.numeroErrores > 0){
          totalErroresEstructura.estructuraCancerMama += errores[i].estructuraCancerMama.numeroErrores;
        }
        if(errores[i].estructuraCOP.numeroErrores > 0){
          totalErroresEstructura.estructuraCOP += errores[i].estructuraCOP.numeroErrores;
        }
        if(errores[i].estructuraComodin.numeroErrores > 0){
          totalErroresEstructura.estructuraComodin += errores[i].estructuraComodin.numeroErrores;
        }
        if(errores[i].estructuraPrimeraInfancia.numeroErrores > 0){
          totalErroresEstructura.estructuraPrimeraInfancia += errores[i].estructuraPrimeraInfancia.numeroErrores;
        }
        if(errores[i].estructuraRecienNacido.numeroErrores > 0){
          totalErroresEstructura.estructuraRecienNacido += errores[i].estructuraRecienNacido.numeroErrores;
        }
        if(errores[i].estructuraRiesgoCardiovascular.numeroErrores > 0){
          totalErroresEstructura.estructuraRiesgoCardiovascular += errores[i].estructuraRiesgoCardiovascular.numeroErrores;
        }
        if(errores[i].estructura0a7Anios.numeroErrores > 0){
          totalErroresEstructura.estructura0a7Anios += errores[i].estructura0a7Anios.numeroErrores;
        }
        if(errores[i].estructura0a12Anios.numeroErrores > 0){
          totalErroresEstructura.estructura0a12Anios += errores[i].estructura0a12Anios.numeroErrores;
        }
        if(errores[i].estructuraVejez.numeroErrores > 0){
          totalErroresEstructura.estructuraVejez += errores[i].estructuraVejez.numeroErrores;
        }
        if(errores[i].estructuraPoblacionGeneral.numeroErrores > 0){
          totalErroresEstructura.estructuraPoblacionGeneral += errores[i].estructuraPoblacionGeneral.numeroErrores;
        }
        if(errores[i].estructuraTuberculosis.numeroErrores > 0){
          totalErroresEstructura.estructuraTuberculosis += errores[i].estructuraTuberculosis.numeroErrores;
        }
        
      }
      this.SUMATORIAERRORESESTRUCTURA = totalErroresEstructura;
    }

}

module.exports.datosTXT = new ArchivoTXT();