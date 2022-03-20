export class ValidateEmpty{

    validateEmpty(excelRegisterType: any){
        if(excelRegisterType.charAt(0) == ' ' || excelRegisterType.charAt(excelRegisterType.length - 1)){
            excelRegisterType = excelRegisterType.trim();
        }
        return excelRegisterType;
    }
}