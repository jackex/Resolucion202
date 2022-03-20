

export class RegistroDetalle{

    validarRegistrosDetalle(controlRegistro: any): Array<any>{
        const array = new Array;
        controlRegistro = controlRegistro.split(/\r\n|\n/);
        for(let i = 1; i <= controlRegistro.length - 1; i++){
            let temp = controlRegistro[i];
            temp = temp.split(/\r\n|\n/);
            temp = temp[0];
            temp = temp.split('|');
            if(temp.length === 119){}
            else{
                array.push("Error en fila " + i + ". Número de Columnas: " + temp.length);
            }
        }
        return array;
    }

}