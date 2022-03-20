class Eventos{

    Mostrarpopuup(key){

        switch (key) {
            case 'xlsAnticoncepcion':
                const xlsAnticoncepcion = document.getElementById('xlsAnticoncepcion');
                xlsAnticoncepcion.addEventListener("mouseover",function(){
                const popupAnticoncepcion = document.getElementById('popupAnticoncepcion');
                popupAnticoncepcion.classList.toggle("show");
                });
                this.evitarRedireccion();
                break;
            case 'xlsAgudezaVisual':
                const xlsAgudezaVisual = document.getElementById('xlsAgudezaVisual');
                xlsAgudezaVisual.addEventListener("mouseover",function(){
                const popupAgudezaVisual = document.getElementById('popupAgudezaVisual');
                popupAgudezaVisual.classList.toggle("show");
                });
                this.evitarRedireccion();
                break;
            case 'xlsCancerCervix':
                const xlsCancerCervix = document.getElementById('xlsCancerCervix');
                xlsCancerCervix.addEventListener("mouseover",function(){
                const popupCancerCervix = document.getElementById('popupCancerCervix');
                popupCancerCervix.classList.toggle("show");
                });
                break;
            case 'xlsCancerColon':
                const xlsCancerColon = document.getElementById('xlsCancerColon');
                xlsCancerColon.addEventListener("mouseover",function(){
                const popupCancerColon = document.getElementById('popupCancerColon');
                popupCancerColon.classList.toggle("show");
                });
                this.evitarRedireccion();
                break;
            case 'xlsCancerProstata':
                const xlsCancerProstata = document.getElementById('xlsCancerProstata');
                xlsCancerProstata.addEventListener("mouseover",function(){
                const popupCancerProstata = document.getElementById('popupCancerProstata');
                popupCancerProstata.classList.toggle("show");
                });
                this.evitarRedireccion();
                break;
            case 'xlsCancerMama':
                const xlsCancerMama = document.getElementById('xlsCancerMama');
                xlsCancerMama.addEventListener("mouseover",function(){
                const popupCancerMama = document.getElementById('popupCancerMama');
                popupCancerMama.classList.toggle("show");
                });
                this.evitarRedireccion();
                break;
            case 'xlsCOP':
                const xlsCOP = document.getElementById('xlsCOP');
                xlsCOP.addEventListener("mouseover",function(){
                const popupCOP = document.getElementById('popupCOP');
                popupCOP.classList.toggle("show");
                });
                this.evitarRedireccion();
                break;
            case 'xlsGestacion':
                const xlsGestacion = document.getElementById('xlsGestacion');
                xlsGestacion.addEventListener("mouseover",function(){
                const popupGestacion = document.getElementById('popupGestacion');
                popupGestacion.classList.toggle("show");
                });
                this.evitarRedireccion();
                break;
            case 'xlsPrimeraInfancia':
                const xlsPrimeraInfancia = document.getElementById('xlsPrimeraInfancia');
                xlsPrimeraInfancia.addEventListener("mouseover",function(){
                const popupPrimeraInfancia = document.getElementById('popupPrimeraInfancia');
                popupPrimeraInfancia.classList.toggle("show");
                });
                this.evitarRedireccion();
                break;
            case 'xlsRecienNacido':
                const xlsRecienNacido = document.getElementById('xlsRecienNacido');
                xlsRecienNacido.addEventListener("mouseover",function(){
                const popupRecienNacido = document.getElementById('popupRecienNacido');
                popupRecienNacido.classList.toggle("show");
                });
                this.evitarRedireccion();
                break;
                case 'xlsRiesgoCardiovascular':
                    const xlsRiesgoCardiovascular = document.getElementById('xlsRiesgoCardiovascular');
                    xlsRiesgoCardiovascular.addEventListener("mouseover",function(){
                    const popupRiesgoCardiovascular = document.getElementById('popupRiesgoCardiovascular');
                    popupRiesgoCardiovascular.classList.toggle("show");
                    });
                    this.evitarRedireccion();
                    break;
                case 'xlstest0a12':
                    const xlstest0a12 = document.getElementById('xlstest0a12');
                    xlstest0a12.addEventListener("mouseover",function(){
                    const popuptest0a12 = document.getElementById('popuptest0a12');
                    popuptest0a12.classList.toggle("show");
                    });
                    this.evitarRedireccion();
                    break;
                case 'xlstest0a7':
                    const xlstest0a7 = document.getElementById('xlstest0a7');
                    xlstest0a7.addEventListener("mouseover",function(){
                    const popuptest0a7 = document.getElementById('popuptest0a7');
                    popuptest0a7.classList.toggle("show");
                    });
                    this.evitarRedireccion();
                    break;
                case 'xlsTestVejez':
                    const xlsTestVejez = document.getElementById('xlsTestVejez');
                    xlsTestVejez.addEventListener("mouseover",function(){
                    const popupTestVejez = document.getElementById('popupTestVejez');
                    popupTestVejez.classList.toggle("show");
                    });
                    this.evitarRedireccion();
                    break;
                case 'xlsTuberculosis':
                    const xlsTuberculosis = document.getElementById('xlsTuberculosis');
                    xlsTuberculosis.addEventListener("mouseover",function(){
                    const popupTuberculosis = document.getElementById('popupTuberculosis');
                    popupTuberculosis.classList.toggle("show");
                    });
                    this.evitarRedireccion();
                    break;
                case 'xlsPoblacionGeneral':
                    const xlsPoblacionGeneral = document.getElementById('xlsPoblacionGeneral');
                    xlsPoblacionGeneral.addEventListener("mouseover",function(){
                    const popupPoblacionGeneral = document.getElementById('popupPoblacionGeneral');
                    popupPoblacionGeneral.classList.toggle("show");
                    });
                    this.evitarRedireccion();
                    break;
            
            default:
                break;
        }



    
    }

    evitarRedireccion(){
        const descargar = document.getElementById('descargar');
        descargar.addEventListener('click',function(event){
            event.preventDefault();
        });
    }
    
}

module.exports.eventos = new Eventos();