export class CalcularEdad{

    NUMERODEDIAS = 0;
    NUMERODEMESES = 0;
    EDAD = 0;
    
    obtenerFecha(fecha: any){
        const dateArray = fecha.split('-');
            return dateArray;
    }

    calcularEdad(fechaNacimiento: any, fechaSuperiorReporte: any){
        const arrayFechaNacimiento = this.obtenerFecha(fechaNacimiento);
        const añoFechaNacimiento = parseInt(arrayFechaNacimiento[0]);
        const mesFechaNacimiento = parseInt(arrayFechaNacimiento[1]);
        const diaFechaNacimiento = parseInt(arrayFechaNacimiento[2]);

        const arrayFechaSuperiorReporte = this.obtenerFecha(fechaSuperiorReporte);
        const añoFechaSuperiorReporte = parseInt(arrayFechaSuperiorReporte[0]);
        const mesFechaSuperiorReporte = parseInt(arrayFechaSuperiorReporte[1]);
        const diaFechaSuperiorReporte = parseInt(arrayFechaSuperiorReporte[2]);

        let año = añoFechaSuperiorReporte - añoFechaNacimiento;
 
        if(mesFechaNacimiento < mesFechaSuperiorReporte){
            if(año < 0){ año = 0; }
               // año = año + this.calcularDias(arrayFechaNacimiento, arrayFechaSuperiorReporte);
        }else{
            if(mesFechaNacimiento === mesFechaSuperiorReporte){
                if(diaFechaNacimiento < diaFechaSuperiorReporte){
                    //año = año - 1;  
                    if(año < 0){ año = 0; }
                    //año = año + this.calcularDias(arrayFechaNacimiento, arrayFechaSuperiorReporte); 
                }else{
                    if(diaFechaNacimiento > diaFechaSuperiorReporte){
                        año = año - 1;  
                        if(año < 0){ año = 0; }
                            //año = año + this.calcularDias(arrayFechaNacimiento, arrayFechaSuperiorReporte);
                        }
                }
            }else{
                if(mesFechaNacimiento > mesFechaSuperiorReporte){
                    año = año - 1;
                    if(año < 0){ año = 0; }
                    //año = año + this.calcularDias(arrayFechaNacimiento, arrayFechaSuperiorReporte); 

                }
            }
        } 
          this.EDAD = año;     
    }

    calcularDias(mesNacimiento: any, mesFechaReporte: any): any{
        let dias = 0;
        let diasMesReporte = parseInt(mesFechaReporte[1]);
        let diasMesNacimiento = parseInt(mesNacimiento[1]);
        //diasMesNacimiento =  diasMesNacimiento - (31 - parseInt(mesNacimiento[2]));
        //diasMesReporte = diasMesReporte - parseInt(mesFechaReporte[2]);
       // diasMesNacimiento = diasMesNacimiento - parseInt(mesNacimiento[2]);
        //this.NUMERODEDIAS = diasMesNacimiento;
        if(diasMesReporte < diasMesNacimiento){
            dias =  diasMesReporte / diasMesNacimiento;
        }else{
            if(diasMesReporte === diasMesNacimiento){
                dias =  diasMesNacimiento - diasMesReporte;
            }else{
                dias = diasMesReporte - diasMesNacimiento;
            }
        }
        if(dias < 0){ dias = 0;}
        //console.log(dias);
        return dias;
    }

    calcularDiasyMeses(fechaNacimiento: any, fechaReporte: any){
        this.calcularEdad(fechaNacimiento, fechaReporte);
        //const edad = this.EDAD;
        const mesNacimiento = this.obtenerFecha(fechaNacimiento);
        const mesFechaReporte = this.obtenerFecha(fechaReporte);
        const mesDeNacimiento = parseInt(mesNacimiento[1]);
        const diaDeNacimiento = parseInt(mesNacimiento[2]);
        const mesReporte = parseInt(mesFechaReporte[1]);
        const diaReporte = parseInt(mesFechaReporte[2]);

        if(mesDeNacimiento < mesReporte){
            if(diaDeNacimiento > diaReporte){
                this.NUMERODEMESES = 12 - (mesReporte - mesDeNacimiento);
                this.NUMERODEDIAS = 30 - (diaDeNacimiento - diaReporte);
            }else{
                if(diaDeNacimiento < diaReporte){
                    this.NUMERODEMESES = (mesReporte - mesDeNacimiento);
                    this.NUMERODEDIAS = (diaReporte - diaDeNacimiento);
                }else{
                    this.NUMERODEMESES = (mesReporte - mesDeNacimiento);
                    this.NUMERODEDIAS = (diaReporte - diaDeNacimiento);
                }
            }
        }
        else{
            if(mesDeNacimiento === mesReporte){
                if(diaDeNacimiento > diaReporte){
                    this.NUMERODEMESES = 12 - (mesDeNacimiento - mesReporte);
                    this.NUMERODEDIAS = 30 - (diaDeNacimiento - diaReporte);
                }else{
                    if(diaDeNacimiento < diaReporte){
                        this.NUMERODEDIAS = 30 - (diaReporte - diaDeNacimiento);
                        this.NUMERODEMESES = (mesDeNacimiento - mesReporte);
                    }else{
                        this.NUMERODEMESES = (mesDeNacimiento - mesReporte);
                        this.NUMERODEDIAS = (diaReporte - diaDeNacimiento);
                    }
                }                
            }else{
                if(diaDeNacimiento > diaReporte){
                    this.NUMERODEMESES = 12 - (mesDeNacimiento - mesReporte);
                    this.NUMERODEDIAS = 30 - (diaDeNacimiento - diaReporte);
                }else{
                    if(diaDeNacimiento < diaReporte){
                        this.NUMERODEMESES = 12 - (mesDeNacimiento - mesReporte);
                        this.NUMERODEDIAS =  (diaReporte - diaDeNacimiento);
                    }else{
                        this.NUMERODEMESES = 12 - (mesDeNacimiento - mesReporte);
                        this.NUMERODEDIAS = (diaReporte - diaDeNacimiento);
                    }
                }
            }
        }
        //console.log("año "+ edad + " mes " +this.NUMERODEMESES + " dias " + this.NUMERODEDIAS);
    }

}