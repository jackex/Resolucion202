import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import {RegistroControl} from '../res202/Estructura/formatoTXT/ValidarRegistroControl';
import {RegistroDetalle} from '../res202/Estructura/formatoTXT/ValidarRegistroDetalle';
import {datos} from '../res202/Estructura/archivoExcel';
import {datosTXT} from '../res202/Estructura/archivoTXT';
import {ValidarCalidadDato} from '../res202/CalidadDato/ValidarCalidadDato';
import { CorregirAgudezaVisual } from '../res202/correccionErrores/AgudezaVisual/AgudezaVisual';
import { CorregirAnticoncepcion } from '../res202/correccionErrores/Anticoncepcion/Anticoncepcion';
import { CorregirCancerCervix } from '../res202/correccionErrores/CancerCervix/CancerCervix';
import { CorregirCancerColon } from '../res202/correccionErrores/CancerColon/CancerColon';
import { CorregirCancerProstata } from '../res202/correccionErrores/CancerProstata/CancerProstata';
import { CorregirCancerMama } from '../res202/correccionErrores/CancerMama/CancerMama';
import { CorregirCOP } from '../res202/correccionErrores/COP/COP';
import { CorregirGestacion } from '../res202/correccionErrores/Gestacion/Gestacion';
import { CorregirPrimeraInfancia } from '../res202/correccionErrores/PrimeraInfancia/PrimeraInfancia';
import { CorregirRecienNacido } from '../res202/correccionErrores/recienNacido/RecienNacido';
import { CorregirRiesgoCardiovascular } from '../res202/correccionErrores/RiesgoCardiovascular/RiesgoCardiovascular';
import { CorregirTest0a12Anios } from '../res202/correccionErrores/Test0a12Anios/Test0a12Anios';
import { CorregirTest0a7Anios } from '../res202/correccionErrores/Test0a7Anios/Test0a7Anios';
import { CorregirTestVejez } from '../res202/correccionErrores/TestVejez/TestVejez';
import { CorregirPoblacionGeneral } from '../res202/correccionErrores/PoblacionGeneral/PoblacionGeneral';
import { CorregirTuberculosis } from '../res202/correccionErrores/Tuberculosis/Tuberculosis';
import {saveAs} from 'file-saver';
import {eventos} from '../res202/eventos';
import { DescargarErrores } from '../res202/DescargarErrores/DescargarErrores';


@Component({
  selector: 'Resolucion202',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})

export class ComponentsComponent implements OnInit {

  constructor(){}

  //validarEstructura = new ValidateStructure();
  NOMBREARCHIVO: any;
  data: any;  
  txtData: any;
  selectedFile: any;
  errorTotalRegistros: any;
  datosUsuarios: any;
  allowedExtensions = /(\.txt|\.TXT)$/;
  BOTON = true;
  ERRORESESTRUCTURA:  any;
  ESTRUCTURATOTALERRORES = 0;
  DATOSTOTALERRORES = 0;
  BOTONDESCARGAR = true;
  BOTONCORREGIR = true;
  descargarErrores: any;

  erroresUsuarios = {estructuraUsuario: 0, estructuraGestacion: 0, estructuraAgudezaVisual: 0, estructuraAnticoncepcion: 0,
    estructuraCancerCervix: 0, estructuraCancerColon: 0, estructuraCancerProstata: 0, estructuraCancerMama: 0, estructuraCOP: 0,
    estructuraComodin: 0, estructuraPrimeraInfancia: 0, estructuraRecienNacido: 0, estructuraRiesgoCardiovascular: 0,
    estructura0a7Anios: 0, estructura0a12Anios: 0, estructuraVejez: 0, estructuraPoblacionGeneral: 0, estructuraTuberculosis: 0};

  NUMEROERRORES = {agudezaVisual: 0, anticoncepcion: 0, cancerCervix: 0, cancerColon: 0, cancerProstata: 0, cancerMama: 0,
    COP: 0, gestacion: 0, primeraInfancia: 0, recienNacido: 0, riesgoCardiovascular: 0, test0a12Anios: 0,
    test0a7Anios: 0, testVejez: 0, tuberculosis: 0, poblacionGeneral: 0};

  onFileChange(event: any): any {
      const target: DataTransfer = <DataTransfer>(event.target);

      if(target.files.length !== 1) {
        throw new Error("No puede seleccionar más de un archivo");
      }else{   
        const reader: FileReader = new FileReader();   
        reader.onload = (evt: any) => {
          const binaryString: string = evt.target.result;
          const workbook: XLSX.WorkBook = XLSX.read(binaryString, {type: 'binary'});
          const workbookSheetName: string = workbook.SheetNames[0];
          const workbookSheet: XLSX.WorkSheet = workbook.Sheets[workbookSheetName];
          this.data = XLSX.utils.sheet_to_json(workbookSheet);
        };    
        reader.readAsBinaryString(target.files[0]);
      }  
  }

  onFileTXTChange(event: any): any {
    const target: DataTransfer = <DataTransfer>(event.target);

    if(target.files.length !== 1) {
      //alert("No puede seleccionar más de un archivo");
    }else{      
      const fileName = target.files[0].name;
      this.NOMBREARCHIVO = fileName;

      if(this.allowedExtensions.test(fileName)){
        this.txtData = [];
        const reader: FileReader = new FileReader();
        reader.onload = (evt: any) => {
          const binaryString: string = evt.target.result;
          this.txtData = binaryString;
        };    
        reader.readAsText(target.files[0]);
        this.BOTON = false;
        this.BOTONDESCARGAR = true;
        this.BOTONCORREGIR = true;
      }else{
        alert("Debe ser un archivo TXT");
      }
    }  
  }

  leerTXT(): any{
    if(this.txtData.length > 0){
      const resultado = RegistroControl.prototype.validarRegistroControl(this.txtData);
      if(resultado === 'OK'){

        console.log('Número de Campos en Registro de Control OK!!');
        this.errorTotalRegistros = RegistroDetalle.prototype.validarRegistrosDetalle(this.txtData);

        if(this.errorTotalRegistros.length === 0){

          console.log('Número de Campos en Registro de Detalle OK!!');
          datosTXT.validarTXT(this.txtData);

          if(datosTXT.TOTALERRORES === 0){ //EVALUAR SI NO HAY ERRORES DE ESTRUCTURA
            this.BOTONCORREGIR = false;
            this.ESTRUCTURATOTALERRORES = 0;
              this.erroresUsuarios = this.erroresUsuarios;
              ValidarCalidadDato.prototype.validarDatos(this.txtData);
              this.datosUsuarios = ValidarCalidadDato.prototype.ERRORESDATO;
              this.NUMEROERRORES = ValidarCalidadDato.prototype.SUMATORIAERRORES;
              this.DATOSTOTALERRORES = ValidarCalidadDato.prototype.TOTALERRORESDATO;

          }else{
            this.DATOSTOTALERRORES  = 0;
              this.datosUsuarios = {};
              this.ESTRUCTURATOTALERRORES = datosTXT.TOTALERRORES;
              this.ERRORESESTRUCTURA = datosTXT.ERRORESTOTALESESTRUCTURA;
              console.log(this.ERRORESESTRUCTURA);
              this.erroresUsuarios = datosTXT.SUMATORIAERRORESESTRUCTURA;
          }
        }else{
          console.log("¡Error en registro de detalle!");
          console.log(this.errorTotalRegistros);
        }
      }else{
        console.log(resultado);
      }
    }   
  }

  corregirErrores(){
    this.txtData = CorregirAgudezaVisual.prototype.corregirAgudezaVisual(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirAnticoncepcion.prototype.corregirDatosAnticoncepcion(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirCancerCervix.prototype.corregirDatosCancerCervix(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirCancerColon.prototype.corregirDatosCancerColon(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirCancerProstata.prototype.corregirDatosCancerProstata(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirCancerMama.prototype.corregirDatosCancerMama(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirCOP.prototype.corregirDatosCOP(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirGestacion.prototype.corregirDatoGestacion(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirPrimeraInfancia.prototype.corregirDatoPrimeraInfancia(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirRecienNacido.prototype.corregirDatoRecienNacido(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirRiesgoCardiovascular.prototype.corregirDatoRiesgoCardiovascular(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirTest0a12Anios.prototype.corregirDatoTest0a12Anios(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirTest0a7Anios.prototype.corregirDatoTest0a7Anios(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirTestVejez.prototype.corregirDatoTestVejez(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirPoblacionGeneral.prototype.corregirDatoPoblacionGeneral(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.txtData = CorregirTuberculosis.prototype.corregirDatoTuberculosis(this.txtData,this.datosUsuarios,datosTXT.FECHAMAXIMAREPORTE);
    this.txtData = this.txtData.join('\n');
    this.leerTXT();
    this.BOTONDESCARGAR = false;

   // console.log(this.txtData);
  }

  validarDatos(): void{
    datos.validateExcel(this.data)
    //this.leerTXT(this.data);
  }

  guardarArchivoTXT(): void{
    let blob = new Blob([this.txtData],{type:'text/plain;charset=utf-8'});
    saveAs(blob, this.NOMBREARCHIVO);
  }

  leerEventos(value: string){
    eventos.Mostrarpopuup(value);
  }

  mostrarDatos(){
    DescargarErrores.prototype.descargarErroresAgudezaVisual(this.datosUsuarios, this.NUMEROERRORES);
  }

  ngOnInit(): void {
    this.descargarErrores =  new DescargarErrores();
  }  

}
