import {Fecha} from './Fecha';

export class RegistroControl{

    validarRegistroControl(txtData: any): string{
        txtData = txtData.split(/\r\n|\n/);
        let registroControl = txtData[0];
        registroControl = registroControl.split('|');
        return this.validarLineaRegistro(registroControl, txtData);      
    }

    validarCodigoEntidades(registroControl: any): boolean{
        if(registroControl.length <= 6){return true;}
        return false;
    }

    validarTipoRegistro(registroControl: any): boolean{
        if(parseInt(registroControl) === 1){return true;}
        return false;
    }

    validarFechasControlRegistro(registroControl: any, txtData: any): string{
        if(registroControl[4] > 0){
          if(this.validarTotalRegistrosDetalle(txtData)){
              const flag = Fecha.prototype.formatoGeneralValidarFecha(registroControl[2], registroControl[3]);
              if(flag === true){
                return 'OK';
              }else{
                return flag;
              }
          }else{
            return "El número total de filas del registro de control no coincide con el número total de registros de detalle"
          }
            
          }else{
            return "El número total de filas del registro de control no debe estar vacío y debe ser mayor a cero.";
          }
    }

    validarLineaRegistro(registroControl: any, txtData: any): string{
        if(registroControl.length === 5){
            if(this.validarTipoRegistro(registroControl[0])){
                if(this.validarCodigoEntidades(registroControl[1])){
                    return this.validarFechasControlRegistro(registroControl, txtData);
                }else{
                    return "Error en registro de control - La longitud del codigo de la EAPB debe ser menor o igual a 6 dígitos.";
                }               
            }else{
                return "Error en registro de control - el Tipo de registro debe ser 1";
            }                    
          }else{
            return "El número de campos del formato de registro de control no coincide con el anexo técnico.";
          }          
    }

    validarTotalRegistrosDetalle(controlRegistro: any){
      let data = controlRegistro[0];
      data = data.split('|');
      const totalRegistrosControl = parseInt(data[4]);
      if(totalRegistrosControl > 0){
        const totalRegistrosDetalle = controlRegistro.length - 1;
        if(totalRegistrosControl === totalRegistrosDetalle){
            return true;
        }
      }
      
      return false;
  }

}