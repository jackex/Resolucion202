import * as XLSX from 'xlsx';


export class DescargarErrores{

    arrayAgudezaVisual = [];
    arrayAnticoncepcion = [];
    arrayCancerCervix = [];
    arrayCancerColon = [];
    arrayCancerProstata  =[];
    arrayCancerMama = [];
    arrayCOP = [];
    arrayGestacion =[];
    arrayPrimeraInfancia = [];
    arrayRecienNacido = [];
    arrayRiesgoCardiovascular = [];
    arrayTest0a12Anios = [];
    arrayTest0a7Anios = [];
    arrayTestVejez = [];
    arrayTuberculosis = [];
    arrayPoblacionGeneral  = [];

   descargarErrores(data: any){
        const newBook = XLSX.utils.book_new();
        for(var i = 0; i < data.length; i++){
            if(data[i].datoAgudezaVisual.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoAgudezaVisual, this.arrayAgudezaVisual);
            }
            if(data[i].datoAnticoncepcion.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoAnticoncepcion, this.arrayAnticoncepcion);
            }
            if(data[i].datoCancerCervix.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoCancerCervix, this.arrayCancerCervix);
            }
            if(data[i].datoCancerColon.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoCancerColon, this.arrayCancerColon);
            }
            if(data[i].datoCancerProstata.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoCancerProstata, this.arrayCancerProstata);
            }
            if(data[i].datoCancerMama.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoCancerMama, this.arrayCancerMama);
            }
            if(data[i].datoCOP.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoCOP, this.arrayCOP);
            }
            if(data[i].datoGestacion.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoGestacion, this.arrayGestacion);
            }
            if(data[i].datoPrimeraInfancia.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoPrimeraInfancia, this.arrayPrimeraInfancia);
            }
            if(data[i].datoRecienNacido.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoRecienNacido, this.arrayRecienNacido);
            }
            if(data[i].datoRiesgoCardiovascular.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoRiesgoCardiovascular, this.arrayRiesgoCardiovascular);
            }
            if(data[i].datoTest0a12Anios.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoTest0a12Anios, this.arrayTest0a12Anios);
            }
            if(data[i].datoTest0a7Anios.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoTest0a7Anios, this.arrayTest0a7Anios);
            }
            if(data[i].datoTestVejez.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoTestVejez, this.arrayTestVejez);
            }
            if(data[i].datoTuberculosis.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoTuberculosis, this.arrayTuberculosis);
            }
            if(data[i].datoPoblacionGeneral.errores[0].length > 0){
                this.consolidarErrores(data[i], data[i].datoPoblacionGeneral, this.arrayPoblacionGeneral);
            }
        }
        if(this.arrayAgudezaVisual.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayAgudezaVisual, "AGUDEZA VISUAL");
        }
        if(this.arrayAnticoncepcion.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayAnticoncepcion, "ANTICONCEPCION"); 
        }
        if(this.arrayCancerCervix.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayCancerCervix, "CANCER DE CERVIX"); 
         }
         if(this.arrayCancerColon.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayCancerColon, "CANCER DE COLON"); 
         }
         if(this.arrayCancerProstata.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayCancerProstata, "CANCER DE PROSTATA"); 
         }
         if(this.arrayCancerMama.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayCancerMama, "CANCER DE MAMA"); 
         }
         if(this.arrayCOP.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayCOP, "COP"); 
         }
         if(this.arrayGestacion.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayGestacion,"GESTACION"); 
         }
         if(this.arrayPrimeraInfancia.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayPrimeraInfancia, "PRIMERA INFANCIA"); 
         }
         if(this.arrayRecienNacido.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayRecienNacido, "RECIEN NACIDO"); 
         }
         if(this.arrayRiesgoCardiovascular.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayRiesgoCardiovascular, "RIESGO CARDIOVASCULAR"); 
         }
         if(this.arrayTest0a12Anios.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayTest0a12Anios, "TEST 0 A 12 AÑOS"); 
         }
         if(this.arrayTest0a7Anios.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayTest0a7Anios, "TEST 0 A 7 AÑOS"); 
         }
         if(this.arrayTestVejez.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayTestVejez, "TEST DE VEJEZ");
         }
         if(this.arrayTuberculosis.length > 0){
            this.agregarNuevaHoja(newBook, this.arrayTuberculosis, "TUBERCULOSIS");
         }
         if(this.arrayPoblacionGeneral.length > 0){
             this.agregarNuevaHoja(newBook, this.arrayPoblacionGeneral, "POBLACION GENERAL");
         }
        
        XLSX.writeFile(newBook,"Errores202.xlsx");
        this.limpiarDatos();
    }

    limpiarDatos(){
    this.arrayAgudezaVisual = [];
    this.arrayAnticoncepcion = [];
    this.arrayCancerCervix = [];
    this.arrayCancerColon = [];
    this.arrayCancerProstata  =[];
    this.arrayCancerMama = [];
    this.arrayCOP = [];
    this.arrayGestacion =[];
    this.arrayPrimeraInfancia = [];
    this.arrayRecienNacido = [];
    this.arrayRiesgoCardiovascular = [];
    this.arrayTest0a12Anios = [];
    this.arrayTest0a7Anios = [];
    this.arrayTestVejez = [];
    this.arrayTuberculosis = [];
    this.arrayPoblacionGeneral  = [];
    }

    agregarNuevaHoja(newBook: any, data: any, nombreHoja: string){
        let newSheet = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(newBook, newSheet, nombreHoja);
    }

    consolidarErrores(data: any, grupoErrores: any,  array: any){
        if(grupoErrores.errores[0].length > 0){
            for(var j= 0; j < grupoErrores.errores[0].length; j++){
                array.push(
                    {"Número Documento": data.numeroDocumento,
                    "Consecutivo": grupoErrores.errores[0][j].posicion[0],
                    "Columna": grupoErrores.errores[0][j].posicion[1],
                    "Descripción de Errores": grupoErrores.errores[0][j].mensaje}
                );                        
            }
        }
    }

    descargarErroresAgudezaVisual(data:any, numeroErrores: any){
        if(numeroErrores.agudezaVisual > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoAgudezaVisual.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoAgudezaVisual.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoAgudezaVisual.errores[0][j].posicion[0],
                            "Columna": data[i].datoAgudezaVisual.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoAgudezaVisual.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "AGUDEZA VISUAL");
            XLSX.writeFile(newBook,"erroresAgudezVisual.xlsx");
        }
        
    }

    descargarErroresAnticoncepcion(data:any, numeroErrores: any){
        if(numeroErrores.anticoncepcion > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoAnticoncepcion.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoAnticoncepcion.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoAnticoncepcion.errores[0][j].posicion[0],
                            "Columna": data[i].datoAnticoncepcion.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoAnticoncepcion.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "ANTICONCEPCION");
            XLSX.writeFile(newBook,"erroresAnticoncepcion.xlsx");
        }
        
    }

    descargarErroresCancerCervix(data:any, numeroErrores: any){
        if(numeroErrores.cancerCervix > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoCancerCervix.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoCancerCervix.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoCancerCervix.errores[0][j].posicion[0],
                            "Columna": data[i].datoCancerCervix.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoCancerCervix.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "CANCER CERVIX");
            XLSX.writeFile(newBook,"erroresCancerCervix.xlsx");
        }
    }

    descargarErroresCancerColon(data:any, numeroErrores: any){
        if(numeroErrores.cancerColon > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoCancerColon.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoCancerColon.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoCancerColon.errores[0][j].posicion[0],
                            "Columna": data[i].datoCancerColon.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoCancerColon.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "CANCER COLON");
            XLSX.writeFile(newBook,"erroresCancerColon.xlsx");
        }
    }

    descargarErroresCancerProstata(data:any, numeroErrores: any){
        if(numeroErrores.cancerProstata > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoCancerProstata.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoCancerProstata.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoCancerProstata.errores[0][j].posicion[0],
                            "Columna": data[i].datoCancerProstata.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoCancerProstata.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "CANCER PROSTATA");
            XLSX.writeFile(newBook,"erroresCancerProstata.xlsx");
        }
    }

    descargarErroresCancerMama(data:any, numeroErrores: any){
        if(numeroErrores.cancerMama > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoCancerMama.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoCancerMama.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoCancerMama.errores[0][j].posicion[0],
                            "Columna": data[i].datoCancerMama.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoCancerMama.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "CANCER MAMA");
            XLSX.writeFile(newBook,"erroresCancerMama.xlsx");
        }
    }

    descargarErroresCOP(data:any, numeroErrores: any){
        if(numeroErrores.COP > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoCOP.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoCOP.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoCOP.errores[0][j].posicion[0],
                            "Columna": data[i].datoCOP.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoCOP.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "COP");
            XLSX.writeFile(newBook,"erroresCOP.xlsx");
        }
    }

    descargarErroresGestacion(data:any, numeroErrores: any){
        if(numeroErrores.gestacion > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoGestacion.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoGestacion.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoGestacion.errores[0][j].posicion[0],
                            "Columna": data[i].datoGestacion.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoGestacion.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "GESTACION");
            XLSX.writeFile(newBook,"erroresGestacion.xlsx");
        }
    }

    descargarErroresPrimeraInfancia(data:any, numeroErrores: any){
        if(numeroErrores.primeraInfancia > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoPrimeraInfancia.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoPrimeraInfancia.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoPrimeraInfancia.errores[0][j].posicion[0],
                            "Columna": data[i].datoPrimeraInfancia.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoPrimeraInfancia.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "PRIMERA INFANCIA");
            XLSX.writeFile(newBook,"erroresPrimeraInfancia.xlsx");
        }
    }

    descargarErroresRecienNacido(data:any, numeroErrores: any){
        if(numeroErrores.recienNacido > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoRecienNacido.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoRecienNacido.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoRecienNacido.errores[0][j].posicion[0],
                            "Columna": data[i].datoRecienNacido.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoRecienNacido.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "RECIEN NACIDO");
            XLSX.writeFile(newBook,"erroresRecienNacido.xlsx");
        }
    }

    descargarErroresRiesgoCardiovascular(data:any, numeroErrores: any){
        if(numeroErrores.riesgoCardiovascular > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoRiesgoCardiovascular.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoRiesgoCardiovascular.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoRiesgoCardiovascular.errores[0][j].posicion[0],
                            "Columna": data[i].datoRiesgoCardiovascular.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoRiesgoCardiovascular.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "RIESGO CARDIOVASCULAR");
            XLSX.writeFile(newBook,"erroresRiesgoCardiovascular.xlsx");
        }
    }

    descargarErroresTest0a12Anios(data:any, numeroErrores: any){
        if(numeroErrores.test0a12Anios > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoTest0a12Anios.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoTest0a12Anios.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoTest0a12Anios.errores[0][j].posicion[0],
                            "Columna": data[i].datoTest0a12Anios.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoTest0a12Anios.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "TEST 0 A 12 AÑOS");
            XLSX.writeFile(newBook,"erroresTest0a12Anios.xlsx");
        }
    }

    descargarErroresTest0a7Anios(data:any, numeroErrores: any){
        if(numeroErrores.test0a7Anios > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoTest0a7Anios.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoTest0a7Anios.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoTest0a7Anios.errores[0][j].posicion[0],
                            "Columna": data[i].datoTest0a7Anios.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoTest0a7Anios.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "TEST 0 A 7 AÑOS");
            XLSX.writeFile(newBook,"erroresTest0a7Anios.xlsx");
        }
    }

    descargarErroresTestVejez(data:any, numeroErrores: any){
        if(numeroErrores.testVejez > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoTestVejez.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoTestVejez.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoTestVejez.errores[0][j].posicion[0],
                            "Columna": data[i].datoTestVejez.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoTestVejez.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "TEST VEJEZ");
            XLSX.writeFile(newBook,"erroresTestVejez.xlsx");
        }
    }

    descargarErroresTuberculosis(data:any, numeroErrores: any){
        if(numeroErrores.tuberculosis > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoTuberculosis.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoTuberculosis.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoTuberculosis.errores[0][j].posicion[0],
                            "Columna": data[i].datoTuberculosis.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoTuberculosis.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "TUBERCULOSIS");
            XLSX.writeFile(newBook,"erroresTuberculosis.xlsx");
        }
    }

    descargarErroresPoblacionGeneral(data:any, numeroErrores: any){
        if(numeroErrores.poblacionGeneral > 0){
            let array = [];
            for(var i = 0; i < data.length; i ++){
                if(data[i].datoPoblacionGeneral.errores[0].length > 0){
                    for(var j= 0; j < data[i].datoPoblacionGeneral.errores[0].length; j++){
                        array.push(
                            {"Número Documento": data[i].numeroDocumento,
                            "Consecutivo": data[i].datoPoblacionGeneral.errores[0][j].posicion[0],
                            "Columna": data[i].datoPoblacionGeneral.errores[0][j].posicion[1],
                            "Descripción de Errores": data[i].datoPoblacionGeneral.errores[0][j].mensaje}
                            );                        
                    }
                }
            }
            const newBook = XLSX.utils.book_new();
            const newSheet = XLSX.utils.json_to_sheet(array);
            XLSX.utils.book_append_sheet(newBook, newSheet, "POBLACION GENERAL");
            XLSX.writeFile(newBook,"erroresPoblacionGeneral.xlsx");
        }
    }
}