export class ValoresEstructura202{

    constructor(){}
    
    tipoRegistro = {
        value: '2',
        length: 1
    };

    //ok
    codigoHabilitacion = {
        value: /^999{1}$/,
        length: 12,
        min: 999
    };

    //ok TABLA DE REFERENCIA SGDTipoID en https://web.sispro.gov.co/
    tipoIDentificacionUsuario = {
        value: /^(RC)$|^(TI)$|^(CE)$|^(CC)$|^(PA)$|^(PE)$|^(CD)$|^(MS)$|^(SC)$|^(AS)$|^(NV)$|^(CN)$/,
        length: 2
    };

    numeroIdentificacion = {
        length: 18
    };
    
    //ok
    formatoFecha = {
        value: /^([0-9]{4}\-[0-9]{2}\-[0-9]{2}$)/
    }

    //ok
    sexoUsuario = {
        value: /\M|\F/,
        length: 1
    };

    //ok TABLA DE REFERENCIA SISPRO: GrupoEtnico - web.sispro.gov.co
    codigoPertenenciaEtnica = {
        value: /^1{1}$|^2{1}$|^3{1}$|^4{1}$|^5{1}$|^6{1}$/,
        length: 1

    };

    //ok
    codigoOcupacion = {
        length: 4
    };

    //ok TABLA DE REFERENCIA SISPRO: SGDNivEducativo - web.sispro.gov.co
    codigoNivelEducativo = {
        value: /^1{1}$|^2{1}$|^3{1}$|^4{1}$|^5{1}$|^6{1}$|^7{1}$|^8{1}$|^9{1}$|^10{1}$|^11{1}$|^12{1}$|^13{1}$/,
        length: {
            min: 1,
            max: 2
        }
    };

    //ok
    gestacion = {
        value: /^0{1}$|^1{1}$|^2{1}$|^21{1}$/,
        length: {
            min: 1,
            max: 2
        }
    };

    //ok
    sifilisGestacional = {
        value: /^0{1}$/
    };

    //ok
    tratamientoParaSifilisGestacional = {
        value:  /^0{1}$/
    };

    //ok
    tratamientoParaSifilisCongenita = {
        value:  /^0{1}$/
    };

    //ok
    resultadoPruebaTamizajeSífilis = {
        value: /^0{1}$|^4{1}$|^5{1}$|^21{1}$/
    };

    //ok
    resultadoHDL = {
        value: /^0{1}$|^998{1}$/,
        min: 1,
        max: 997,
        minLength: 1,
        maxLength: 3
    };

//ok
resultadoPruebaMiniMentalState = {
    value: /^0{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
hipotiroidismoCongenito = {
    value: /^0{1}$/
};

//ok
sintomaticoRespiratorio = {
    value: /^1{1}$|^2{1}$|^21{1}$/
};

//ok
consumoTabaco = {
    value: /^96{1}$|^97{1}$|^98{1}$|^99{1}$/,
    min: 0,
    max: 95,
    minLength: 1,
    maxLength: 2
};

//ok
lepra = {
    value: /^21{1}$/
};

//ok
obesidadDesnutricionPC = {
    value: /^21{1}$/
};

//ok
resultadoTactoRectal = {
    value: /^0{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
AcidoFolicoPReconcepcional = {
    value: /^0{1}$|^1{1}$|^2{1}$|^21{1}$/,
    length: {
        min: 1,
        max: 2
    }
};

//ok
acidoFolicoEnControlPrenatalPeriodoReportado = {
    value: /^0{1}$|^1{1}$|^16{1}$|^17{1}$|^18{1}$|^20{1}$|^21{1}$/
}

//ok
sulfatoFerrosoEnControlPrenatalPeriodoReportado = {
    value: /^0{1}$|^1{1}$|^16{1}$|^17{1}$|^18{1}$|^20{1}$|^21{1}$/
}

//ok
carbonatoCalcioEnControlPrenatalPeriodoReportado = {
    value: /^0{1}$|^1{1}$|^16{1}$|^17{1}$|^18{1}$|^20{1}$|^21{1}$/
}

//ok
resultSangreOcultaMateriaFecal = {
    value: /^0{1}$|^4{1}$|^5{1}$|^6{1}$|^21{1}$/    
};

//ok
enfermedadMental = {
    value: /^21{1}$/  
};

//ok
agudezaVisualLejanaOjoIzquierdo = {
    value: /^0{1}$|^3{1}$|^4{1}$|^5{1}$|^6{1}$|^7{1}$|^8{1}$|^9{1}$|^21{1}$/
};

//ok
agudezaVisualLejanaOjoDerecho = {
    value: /^0{1}$|^3{1}$|^4{1}$|^5{1}$|^6{1}$|^7{1}$|^8{1}$|^9{1}$|^21{1}$/
};

//ok
comodinesFecha = {
    formatoFecha: /^([0-9]{4}\-[0-9]{2}\-[0-9]{2}$)/,
        Doscomodines: /^(1845\-01\-01$)|^(1800\-01\-01$)/,
        SieteComodines: /^(1800\-01\-01$)|^(1805\-01\-01$)|^(1810\-01\-01$)|^(1825\-01\-01$)|^(1830\-01\-01$)|^(1835\-01\-01$)|^(1845\-01\-01$)/,
        valorMinimo: 1900
};

//ok
pesoKG = {
    comodinPeso: /^999{1}$/,
    value: {
        min: 0,
        max: 200
    },
    length: 4
};

fechaPeso = {
    formatoFecha: /^([0-9]{4}\-[0-9]{2}\-[0-9]{2}$)/,
    value: /^(1800\-01\-01$)/,
    valorMinimo: 1900
};

fechaTalla = {
    formatoFecha: /^([0-9]{4}\-[0-9]{2}\-[0-9]{2}$)/,
    value: /^(1800\-01\-01$)/,
    valorMinimo: 1900
};

tallaCMS = {
    comodinTalla: /^999{1}$/,
    value: {
        min: 0,
        max: 250
    },
    length: 3
};

//ok
codigoPais = {
    comodinPais: /^999{1}$|^170{1}$/,
    length: 3,
    value: {
        min: 0,
        max: 894
    },
}

//ok
icacionRiesgoGestacional = {
    value: /^0{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
resultadoColonoscopiaTamizaje = {
    value: /^0{1}$|^2{1}$|^3{1}$|^4{1}$|^5{1}$|^6{1}$|^21{1}$/
};

//ok
resultadoTamizajeAuditivoNeonatal = {
    value: /^0{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
resultadoTamizajeVisualNeonatal = {
    value: /^0{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
DPTMenores5Anios = {
    value: /^0{1}$/
};

//ok
resultadoTamizajeVALE = {
    value: /^0{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
neumococo = {
    value: /^0{1}$/
};

//ok
resultadoTamizajeHepatitisC = {
    value: /^0{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
resultadoTamizajeHepatitisB = {
    value: /^0{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
ResulEscalaAbrevDesaMotricGruesa = {
    value: /^0{1}$|^3{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
ResulEscalaAbrevDesaMotriFinoadaptativa = {
    value: /^0{1}$|^3{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
ResulEscalaAbrevDesaMotriAreaPersonal = {
    value: /^0{1}$|^3{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
ResulEscalaAbrevDesaMotricAudicionLenguaje = {
    value: /^0{1}$|^3{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
tratamAblatPostTecnInsVisual = {
    value: /^0{1}$|^6{1}$|^7{1}$|^8{1}$|^9{1}$|^10{1}$|^21{1}$/
}

//ok
tamizajeCancerCuelloUterino = {
    value: /^0{1}$|^1{1}$|^2{1}$|^3{1}$|^4{1}$|^16{1}$|^17{1}$|^18{1}$|^19{1}$|^20{1}$|^21{1}$/
};

//ok
resultadoTamizajeCancerCuelloUterino = {
    value: /^0{1}$|^1{1}$|^2{1}$|^3{1}$|^4{1}$|^5{1}$|^6{1}$|^7{1}$|^8{1}$|^9{1}$|^10{1}$|^11{1}$|^12{1}$|^13{1}$|^14{1}$|^15{1}$|^16{1}$|^17{1}$|^18{1}$|^19{1}$|^20{1}$|^21{1}$/
};

//ok
resultTamizConOximPreYPostDuctal = {
    value:  /^0{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
suministroMetodoAnticonceptivo = {
    value: /^0{1}$|^1{1}$|^2{1}$|^3{1}$|^4{1}$|^5{1}$|^6{1}$|^7{1}$|^8{1}$|^9{1}$|^10{1}$|^11{1}$|^12{1}$|^13{1}$|^14{1}$|^15{1}$|^16{1}$|^17{1}$|^18{1}$|^20{1}$|^21{1}$/
};

//ok
calidadMuestraCitologíaCervicouterina = {
    value: /^0{1}$|^1{1}$|^2{1}$|^3{1}$|^4{1}$|^999{1}$/
};

//ok
codigoHabilitIPSTamizajeCancerCuelloUterino = {
    value: /^0{1}$|^999{1}$/,
    length: 12,
    min: 999
};

//ok
resultadoBiopsiaCervicouterina = {
    value: /^0{1}$|^1{1}$|^3{1}$|^4{1}$|^5{1}$|^6{1}$|^21{1}$/
};

consultaPsicologia = {
    value: /^(1845\-01\-01$)/
};

//ok
resultadoPSA = {
    value: /^0{1}$|^998{1}$/,
    min: 0.00,
    max: 998,
    length: 4
};

//ok
resultadoMamografia = {
    value: /^0{1}$|^1{1}$|^2{1}$|^3{1}$|^4{1}$|^5{1}$|^6{1}$|^7{1}$|^21{1}$/
};

//ok
resultadoBiopsiaMama = {
    value: /^0{1}$|^1{1}$|^2{1}$|^3{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
COPPorPersona = {
    value: /^0{1}$|^21{1}$/,
    length: 12,
    min: 2
};

//ok
cancerCervix = {
    value: /^0{1}$/,
};

//ok
preservativosEntregadosPITS = {
    value: /^0{1}$/,
};

//ok
suministroFortificacionCaseraPI = {
    value: /^0{1}$|^1{1}$|^16{1}$|^17{1}$|^18{1}$|^20{1}$|^21{1}$/,
};

//ok
suministroVitaminaAPrimeraInfancia = {
    value: /^0{1}$|^1{1}$|^16{1}$|^17{1}$|^18{1}$|^20{1}$|^21{1}$/,
};

//ok
suministroHierroPrimeraInfancia = {
    value: /^0{1}$|^1{1}$|^16{1}$|^17{1}$|^18{1}$|^20{1}$|^21{1}$/,
};

//ok
resultadoTSHNeonatal = {
    value: /^0{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
glicemiaBasal = {
    value: /^0{1}$|^998{1}$/,
    min: 1,
    max: 998,
    length: 3
};

//ok
resultadoLDL = {
        value: /^0{1}$|^998{1}$/,
        min: 1,
        max: 997,
        length: 12
};

//ok
resultadoTrigliceridos = {
    value: /^0{1}$|^998{1}$/,
    min: 1,
    max: 997
};

//ok
resultadoHemoglobina = {
    value: /^0{1}$|^998{1}$/,
    min: 1,
    max: 997,
    minLength: 1,
    maxLength: 4
};

//ok
resultadoCreatinina = {
    value: /^0{1}$|^998{1}$/,
    min: 0.13, // EL VALOR ORIGINAL SOPORTADOR POR EL ANEXO TECNICO DE LA RESOLUCION 202 ES IGUAL A 0.15
    max: 37,
    minLength: 1,
    maxLength: 4
};

//ok
fechaHemoglobinaGlicosilada = {
    value: /^(1845\-01\-01$)/
};

//ok
resultadoRiesgoCardiovascular = {
    value: /^0{1}$|^4{1}$|^5{1}$|^6{1}$|^21{1}$/
};

//ok
resultadoRiesgoMetabolico = {
    value: /^0{1}$|^4{1}$|^5{1}$|^6{1}$|^21{1}$/
};

//ok
resultadoPruebaVIH = {
    value: /^0{1}$|^4{1}$|^5{1}$|^21{1}$/
};

//ok
resultadoBaciloscopiaDiagnostico = {
    value: /^1{1}$|^2{1}$|^3{1}$|^4{1}$|^21{1}$/
};

//ok
clasificacionRiesgoGestacional = {
    value: /^0{1}$|^4{1}$|^5{1}$|^21{1}$/
};

}

export const validarEstructura = new ValoresEstructura202();