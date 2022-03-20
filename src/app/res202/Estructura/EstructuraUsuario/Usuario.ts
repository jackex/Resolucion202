import {ErroresUsuario} from './ErroresEstructuraUsuario';
import {validarEstructura} from '../ValoresEstructura202/ValoresEstructura202';
import {ValidateEmpty} from '../ValidarEspacios/ValidarEspacios';

const allowOnlyNumbersRegExp = /[a-zA-Z\á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;
const regularExpresion = /[0-9á-úÁ-ü«#$%&/(){}+=*.,_?¿\\|¨"´`¡!°':;@<>¬~]/;


export class Paciente{

    userAge = 0;
    ComodinUsuario = 0;

    constructor(){}

    validarTipoRegistro(excelRegisterType: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelRegisterType.toString().length > 0 || excelRegisterType.toString().length > 0){
            excelRegisterType = ValidateEmpty.prototype.validateEmpty(excelRegisterType);
            if(!allowOnlyNumbersRegExp.test(excelRegisterType)){
                if(excelRegisterType.length === validarEstructura.tipoRegistro.length){
                    if(excelRegisterType.toString() === validarEstructura.tipoRegistro.value){
                        
                    }else{
                            return ErroresUsuario.registerType.invalidNumber + 
                                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelRegisterType.toString();
                    }
                }else{
                        return ErroresUsuario.registerType.invalidLength + 
                            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelRegisterType.toString();
                } 
            }else{
                    return ErroresUsuario.registerType.invalidFormat + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelRegisterType.toString();
            }
        }else{
                return ErroresUsuario.registerType.emptyField + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelRegisterType.toString();
        }   
    };

    contarConsecutivos(excelData: Array<any>, totalRegistros: any, arrayErrores: any){
        
        if(excelData.length > 0){
            if(excelData.length == totalRegistros){ 
                    for(let i = 0; i <= excelData.length - 1; i++){
                                if((i + 1) <= excelData.length - 1){

                                    excelData[i].valor = ValidateEmpty.prototype.validateEmpty(excelData[i].valor);
                                    excelData[i + 1].valor = ValidateEmpty.prototype.validateEmpty(excelData[i + 1].valor);
                                        if(!allowOnlyNumbersRegExp.test(excelData[i].valor.toString())){
                                            if(!allowOnlyNumbersRegExp.test(excelData[i + 1].valor.toString())){

                                                if(parseInt(excelData[i].valor.toString()) < parseInt(excelData[i + 1].valor.toString())){
                                                    if((parseInt(excelData[i + 1].valor.toString()) - parseInt(excelData[i].valor.toString())) === 1){
                                                        
                                                        //console.log(excelData[i].toString());
                                                    }else{
                                                        arrayErrores.push(ErroresUsuario.consecutivo.invalidRow + excelData[i + 1].consecutivo + " - valor: "
                                                        + excelData[i + 1].valor);
                                                        i += 1;
                                                    }
                                                }else{
                                                    arrayErrores.push(ErroresUsuario.consecutivo.invalidRow + excelData[i + 1].consecutivo + " - valor: "
                                                    + excelData[i + 1].valor);
                                                    i += 1;
                                                } 
                                            }else{
                                                arrayErrores.push(ErroresUsuario.consecutivo.invalidFormat + excelData[i + 1].consecutivo + " - valor: "
                                                + excelData[i + 1].valor);
                                            }                                                                                              
                                                }else{
                                                    arrayErrores.push(ErroresUsuario.consecutivo.invalidFormat + excelData[i].consecutivo + " - valor: "
                                                    + excelData[i].valor);
                                                }              
                                }else{                         
                                    break;
                                }                                 
                    }
        }else{//console.log(ErroresUsuario.consecutivo.invalidTotal);
            arrayErrores.push(ErroresUsuario.consecutivo.invalidTotal);
        }
        }else{//console.log(ErroresUsuario.consecutivo.emptyFile);
            arrayErrores.push(ErroresUsuario.consecutivo.emptyFile);
        }
    }

    validarCodigoHabilitacion(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString() > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(excelData.toString() > validarEstructura.codigoHabilitacion.min){
                    if(validarEstructura.codigoHabilitacion.length === excelData.length){
                        
                        //console.log(excelData.toString());
                    }else{
                        return ErroresUsuario.CodigoHabilitacionIPSPrimaria.invalidLength + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelData.toString();
                    }
                }else{
                    if(validarEstructura.codigoHabilitacion.value.test(excelData)){
                        
                        //console.log(excelData.toString());
                    }else{
                        return ErroresUsuario.CodigoHabilitacionIPSPrimaria.invalidOptions + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelData.toString()
                    }
                }                
            }else{
                return ErroresUsuario.CodigoHabilitacionIPSPrimaria.invalidFormat + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelData.toString();
            }
        }else{
            return ErroresUsuario.CodigoHabilitacionIPSPrimaria.emptyField + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelData.toString();
        }
    }

    validarTipoIDentificacion(excelDocumentType: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelDocumentType.toString().length > 0){    
            excelDocumentType = ValidateEmpty.prototype.validateEmpty(excelDocumentType);
            if(!regularExpresion.test(excelDocumentType)){
                if(excelDocumentType.length == validarEstructura.tipoIDentificacionUsuario.length){
                    if(validarEstructura.tipoIDentificacionUsuario.value.test(excelDocumentType)){
                        
                        //console.log(excelDocumentType.toString());
                    }else{
                        return ErroresUsuario.documentType.invalidOptions+ 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " valor: " + excelDocumentType;
                    }
                }else{
                        return ErroresUsuario.documentType.invalidLength+ 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " valor: " + excelDocumentType;
                }
            }else{
                    return ErroresUsuario.documentType.invalidFormat+ 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " valor: " + excelDocumentType;
            }
        }else{
                return ErroresUsuario.documentType.emptyField+ 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " valor: " + excelDocumentType;
        }
    };

    validarNumeroDocumento(excelDocumentNumber: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelDocumentNumber.toString().length > 0){            
            excelDocumentNumber = ValidateEmpty.prototype.validateEmpty(excelDocumentNumber.toString());
            if(!allowOnlyNumbersRegExp.test(excelDocumentNumber)){
                if(excelDocumentNumber.length <= validarEstructura.numeroIdentificacion.length){
                    
                    //console.log(excelDocumentNumber.toString());
                }else{
                        return ErroresUsuario.documentNumber.invalidLength + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelDocumentNumber;
                }
            }else{
                    return ErroresUsuario.documentNumber.invalidFormat + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelDocumentNumber;
            }
        }else{
                return ErroresUsuario.documentNumber.emptyField + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelDocumentNumber;
        }
    };

    validarPrimerNombre(excelFirstName: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelFirstName.toString().length > 0){
            if(!regularExpresion.test(excelFirstName)){
                excelFirstName = ValidateEmpty.prototype.validateEmpty(excelFirstName);
                
            }else{
                    return ErroresUsuario.nameErrors.invalidFirstName + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelFirstName;
            }
        }else{
                return ErroresUsuario.nameErrors.emptyFirstName + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelFirstName;
        }
    };

    validarSegundoNombre(excelMiddleName: any, consecutivo: any, numeroIdentificacion: any): any{
        if(!regularExpresion.test(excelMiddleName)){
            excelMiddleName = ValidateEmpty.prototype.validateEmpty(excelMiddleName);
            
        }else{
                return ErroresUsuario.nameErrors.invalidSecondName + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelMiddleName;
        }
    };

    validarPrimerApellido(excelSurename: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelSurename.toString().length > 0){
            if(!regularExpresion.test(excelSurename)){
                excelSurename = ValidateEmpty.prototype.validateEmpty(excelSurename);
                
            }else{
                return ErroresUsuario.nameErrors.invalidSurename + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " +  excelSurename;
            }
        }else{
                return ErroresUsuario.nameErrors.emptySurename + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " +  excelSurename;
        }
    };

    ValidarSegundoApellido(excelSecondSurename: any, consecutivo: any, numeroIdentificacion: any): any{
        if(!regularExpresion.test(excelSecondSurename)){
            excelSecondSurename = ValidateEmpty.prototype.validateEmpty(excelSecondSurename);
            
        }else{
                return ErroresUsuario.nameErrors.invalidLastname + 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelSecondSurename;
        }
    };

    ValidarFechaNacimiento(excelBirthDate: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelBirthDate.toString().length > 0){
            if(validarEstructura.formatoFecha.value.test(excelBirthDate)){
                const dateArray = excelBirthDate.split('-');
                const excelYear = Number.parseInt(dateArray[0]);
                const excelMonth = Number.parseInt(dateArray[1]);
                const excelDay = Number.parseInt(dateArray[2]);

                if(excelYear > validarEstructura.comodinesFecha.valorMinimo){
                    if(excelMonth <= 12){
                        if(excelDay <= 31){

                        }else{
                            return ErroresUsuario.DateErrors.invalidDay + 
                            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " +  excelBirthDate;
                        }
                    }else{
                        return ErroresUsuario.DateErrors.invalidMonth + 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " +  excelBirthDate;
                    }
                }else{
                    return ErroresUsuario.DateErrors.invalidOptions + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " +  excelBirthDate;
                }
            }else{
                    return ErroresUsuario.DateErrors.invalidFormat + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " +  excelBirthDate;
            }
        }else{
            return ErroresUsuario.DateErrors.emptyField + 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " +  excelBirthDate; 
        }
        
    };

    validarSexo(excelSex: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelSex.toString().length > 0){
            excelSex = ValidateEmpty.prototype.validateEmpty(excelSex);
            if(!regularExpresion.test(excelSex)){
                if(excelSex.length === validarEstructura.sexoUsuario.length){
                    if(validarEstructura.sexoUsuario.value.test(excelSex)){
                        
                        //console.log(excelSex.toString());
                    }else{
                            return ErroresUsuario.SexErrors.invalidOptions+ 
                            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion  + " - valor: " + excelSex;
                    }
                }else{
                        return ErroresUsuario.SexErrors.invalidLength+ 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion  + " - valor: " + excelSex;
                } 
            }else{
                        return ErroresUsuario.SexErrors.invalidFormat+ 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion  + " - valor: " + excelSex;
            }       
        }else{
                        return ErroresUsuario.SexErrors.emptyField+ 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion  + " - valor: " + excelSex;
        }
    };

    validarCodigoPertenenciaEtnica(excelEthnicity: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelEthnicity.toString().length > 0){
            excelEthnicity = ValidateEmpty.prototype.validateEmpty(excelEthnicity);
            if(!allowOnlyNumbersRegExp.test(excelEthnicity)){
                if(excelEthnicity.length === validarEstructura.codigoPertenenciaEtnica.length){
                    if(validarEstructura.codigoPertenenciaEtnica.value.test(excelEthnicity)){
                        
                       // console.log(excelEthnicity.toString());
                    }else{
                            return ErroresUsuario.ethnicityCode.invalidOptions+ 
                            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion  + " - valor: " + excelEthnicity;   
                    }
                }else{
                        return ErroresUsuario.ethnicityCode.invalidLength+ 
                        " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion  + " - valor: " + excelEthnicity;
                }
            }else{
                    return ErroresUsuario.ethnicityCode.invalidFormat+ 
                    " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion  + " - valor: " + excelEthnicity;
            }
        }else{
                return ErroresUsuario.ethnicityCode.emptyField+ 
                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion  + " - valor: " + excelEthnicity;
        }
    };

    validarCodigoOcupacion(excelOccupationCode: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelOccupationCode.toString().length > 0){
                excelOccupationCode = ValidateEmpty.prototype.validateEmpty(excelOccupationCode);
            if(!allowOnlyNumbersRegExp.test(excelOccupationCode)){
                if(excelOccupationCode.length === validarEstructura.codigoOcupacion.length){
                    
                }else{  
                            return ErroresUsuario.occupationCode.invalidLength+ 
                            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion  + " - valor: " + excelOccupationCode; 
                }
            }else{  
                            return ErroresUsuario.occupationCode.invalidFormat+ 
                            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion  + " - valor: " + excelOccupationCode; 
            }
        }else{
                            return ErroresUsuario.occupationCode.emptyField+ 
                            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion  + " - valor: " + excelOccupationCode;
        }
    };

    validarCodigoNivelEducativo(excelEducationLevel: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelEducationLevel.toString().length > 0){
            excelEducationLevel = ValidateEmpty.prototype.validateEmpty(excelEducationLevel);
            if(!allowOnlyNumbersRegExp.test(excelEducationLevel)){
                if(excelEducationLevel.length >= validarEstructura.codigoNivelEducativo.length.min
                    && excelEducationLevel.length <= validarEstructura.codigoNivelEducativo.length.max){
                        if(validarEstructura.codigoNivelEducativo.value.test(excelEducationLevel)){
                            
                            //console.log(excelEducationLevel.toString());
                        }else{
                                return ErroresUsuario.educationLevel.invalidOptions+ 
                                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelEducationLevel;
                        }
                    }else{
                            return ErroresUsuario.educationLevel.invalidLength+ 
                            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelEducationLevel;
                    }
            }else{
                            return ErroresUsuario.educationLevel.invalidFormat+ 
                            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelEducationLevel;
            }
        }else{
                            return ErroresUsuario.educationLevel.emptyField+ 
                            " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " + excelEducationLevel;
        }
    };

    validarCodigoPais(excelData: any, consecutivo: any, numeroIdentificacion: any): any{
        if(excelData.toString().length > 0){
            excelData = ValidateEmpty.prototype.validateEmpty(excelData);
            
            if(!allowOnlyNumbersRegExp.test(excelData)){
                if(excelData.toString() > validarEstructura.codigoPais.value.min &&
                excelData.toString() <= validarEstructura.codigoPais.value.max){
                    if(validarEstructura.codigoPais.length === excelData.length){
                        
                        //console.log(excelData.toString());
                    }else{
                            return ErroresUsuario.codigoPais.invalidLength+ 
                                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " +  excelData;
                            }
                }else{
                    if(validarEstructura.codigoPais.comodinPais.test(excelData)){
                        
                        //console.log(excelData.toString());
                    }else{
                                return ErroresUsuario.codigoPais.invalidOptions+ 
                                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " +  excelData;
                            }
                }                
            }else{
                                return ErroresUsuario.codigoPais.invalidFormat+ 
                                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " +  excelData;
                            }
        }else{
                                return ErroresUsuario.codigoPais.emptyField+ 
                                " Error en consecutivo: " + consecutivo + "  Documento: "+ numeroIdentificacion + " - valor: " +  excelData;
                            }
    }

}