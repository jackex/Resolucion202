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

class ArchivoExcel{

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
        errores[i].estructuraAgudezavisual.numeroErrores + 
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

    validateExcel(dataExcel){
      const totalRegistros = 10;
      //const fechaInferiorReporte = "2021-08-01";
        const fechaSuperiorReporte = "2021-09-30";
        let arrayConsecutivo = new Array();
      
        const ERRORESESTRUCTURA = new erroresEstructura.ErroresEstructura;
       
        dataExcel.forEach(element =>{
            const excelRegistro = new String(element['1_ConsecutivoDeRegistro']);
            arrayConsecutivo.push(excelRegistro);
        });       

        estructuraPaciente.EstructuraUsuario.prototype.contarConsecutivos(arrayConsecutivo, totalRegistros, 
          ERRORESESTRUCTURA.erroresConsecutivo.consecutivo);
        
       
        dataExcel.forEach(element => {
            const fechaNacimiento = element['9_FechaNacimiento'];
            const numeroDocumento = element['4_NumeroIdentificacion'];
            const consecutivoRegistro = element['1_ConsecutivoDeRegistro'];
           

            estructuraPaciente.EstructuraUsuario.prototype.agregarDatosExcel(element, numeroDocumento, fechaNacimiento);
            estructuraPaciente.EstructuraUsuario.prototype.validarDatosPaciente( ERRORESESTRUCTURA.estructuraUsuario);

            estructuraGestacion.EstructuraGestacion.prototype.agregarDatosExcel(element);
            estructuraGestacion.EstructuraGestacion.prototype.validarGestantes(consecutivoRegistro, numeroDocumento,
               fechaNacimiento, fechaSuperiorReporte, ERRORESESTRUCTURA.estructuraGestacion);

            estructuraAgudezaVisual.EstructuraAgudezaVisual.prototype.agregarDatosExcel(element);
            estructuraAgudezaVisual.EstructuraAgudezaVisual.prototype.validarAgudezaVisual(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro,
               numeroDocumento, ERRORESESTRUCTURA.estructuraAgudezaVisual);

            estructuraAnticoncepcion.EstructuraAnticoncepcion.prototype.agregarDatosExcel(element);
            estructuraAnticoncepcion.EstructuraAnticoncepcion.prototype.validarAnticoncepcion(consecutivoRegistro, numeroDocumento, fechaSuperiorReporte, fechaNacimiento,
              ERRORESESTRUCTURA.estructuraAnticoncepcion);

            estructuraCancerCervix.EstructuraCancerCervix.prototype.agregarDatosExcel(element);
            estructuraCancerCervix.EstructuraCancerCervix.prototype.validarCancerCervix(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro,
               numeroDocumento, ERRORESESTRUCTURA.estructuraCancerCervix);

            estructuraCancerColon.EstructuraCancerColon.prototype.agregarDatosExcel(element);
            estructuraCancerColon.EstructuraCancerColon.prototype.validarCancerColon(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro, 
              numeroDocumento, ERRORESESTRUCTURA.estructuraCancerColon);

            estructuraCancerProstata.EstructuraCancerProstata.prototype.agregarDatosExcel(element);
            estructuraCancerProstata.EstructuraCancerProstata.prototype.validarCancerProstata(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro, 
              numeroDocumento, ERRORESESTRUCTURA.estructuraCancerProstata);

            estructuraCancerMama.EstructuraCancerMama.prototype.agregarDatosExcel(element);
            estructuraCancerMama.EstructuraCancerMama.prototype.validarCancerMama(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro, 
              numeroDocumento, ERRORESESTRUCTURA.estructuraCancerMama);            

            estructuraCop.EstructuraCOP.prototype.agregarDatosExcel(element);
            estructuraCop.EstructuraCOP.prototype.ValidarCOP(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro,
               numeroDocumento, ERRORESESTRUCTURA.estructuraCOP);

            estructuraVariablesComodin.EstructuraVariablesComodin.prototype.agregarDatosExcel(element);
            estructuraVariablesComodin.EstructuraVariablesComodin.prototype.validarVariablesComodin(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro, 
              numeroDocumento, ERRORESESTRUCTURA.estructuraComodin);

            estructuraPrimeraInfancia.EstructuraPrimeraInfancia.prototype.agregarDatosExcel(element);
            estructuraPrimeraInfancia.EstructuraPrimeraInfancia.prototype.validarPrimerInfancia(consecutivoRegistro, numeroDocumento, ERRORESESTRUCTURA.estructuraPrimeraInfancia);
            
            estructuraRecienNacido.EstructuraRecienNacido.prototype.agregarDatosExcel(element);
            estructuraRecienNacido.EstructuraRecienNacido.prototype.validarRecienNacido(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro,
               numeroDocumento, ERRORESESTRUCTURA.estructuraRecienNacido);
            
            estructuraRiesgoCardiovascular.EstructuraRiesgoCardiovascular.prototype.agregarDatosExcel(element);
            estructuraRiesgoCardiovascular.EstructuraRiesgoCardiovascular.prototype.validarEstructuraRiesgoCardiovascular(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro, 
              numeroDocumento, ERRORESESTRUCTURA.estructuraRiesgoCardiovascular);
            
            estructuraTest0a7Anios.EstructuraTest0a7Anios.prototype.agregarDatosExcel(element);
            estructuraTest0a7Anios.EstructuraTest0a7Anios.prototype.validarTest0a7Anios(consecutivoRegistro, numeroDocumento, ERRORESESTRUCTURA.estructura0a7Anios);
            
            estructuraTest0a12Anios.EstructuraTest0a12Anios.prototype.agregarDatosExcel(element);
            estructuraTest0a12Anios.EstructuraTest0a12Anios.prototype.validarTest0a12Anios(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro, 
              numeroDocumento, ERRORESESTRUCTURA.estructura0a12Anios);
            
            estructuraTestVejez.EstructuraTestVejez.prototype.agregarDatosExcel(element);
            estructuraTestVejez.EstructuraTestVejez.prototype.validarTestVejez(consecutivoRegistro, numeroDocumento, ERRORESESTRUCTURA.estructuraVejez);
            
            estructuraPoblacionGeneral.EstructuraPoblacionGeneral.prototype.agregarDatosExcel(element);
            estructuraPoblacionGeneral.EstructuraPoblacionGeneral.prototype.validarPoblacionGeneral(fechaSuperiorReporte, fechaNacimiento, consecutivoRegistro,
               numeroDocumento, ERRORESESTRUCTURA.estructuraPoblacionGeneral);
          
            estructuraTuberculosis.EstructuraTuberculosis.prototype.agregarDatosExcel(element);
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
                    estructuraAgudezavisual: {
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
              
              this.limpiar(ERRORESESTRUCTURA);

          });

          console.log(ERRORESESTRUCTURA.errores);
          console.log("TOTAL ERRORES: " + this.numeroTotalErrores(ERRORESESTRUCTURA.errores));
    }

}

module.exports.datos = new ArchivoExcel();