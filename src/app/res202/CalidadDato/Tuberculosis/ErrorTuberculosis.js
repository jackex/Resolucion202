module.exports.errorTuberculosis = {};

module.exports.errorTuberculosis.sintomaticoRespiratorio = {
    errorRelacion: 'Si registra no aplica en Sintomatico respiratorio, debe registrar NO en Resultado de baciloscopia y No aplica en Fecha de toma de baciloscopia.',
    errorRelacion2: 'Si registra Sintomatico respiratorio, debe registrar Resultado de baciloscopia y Fecha de toma de baciloscopia.'
};

module.exports.errorTuberculosis.fechaTomaBaciloscopiaDiagnostico = {
    errorRelacion: 'Si registra no aplica en Sintomatico respiratorio, debe registrar no aplica en Fecha de toma de baciloscopia diagnóstico.',
    errorRelacion2: 'Si registra no se tiene el dato en Sintomatico respiratorio, debe registrar no aplica en Fecha de toma de baciloscopia diagnóstico.',
    errorRelacion3: 'Si registra no aplica en Sintomatico respiratorio, debe registrar no aplica en Fecha de toma de baciloscopia diagnóstico.'
};

module.exports.errorTuberculosis.resultadoBasiloscipiaDiagnostico = {
    errorRelacion: 'Si registra no se realiza Fecha de toma de baciloscopia diagnóstico, debe registrar Riesgo no evaluado en Resultado de basiloscopia de diagnóstico.',
    errorRelacion2: 'Si registra no se tiene el dato en Fecha de toma de baciloscopia diagnóstico, debe registrar Riesgo no evaluado en Resultado de basiloscopia de diagnóstico.',
    errorRelacion3: 'Si registra Fecha de toma de baciloscopia diagnóstico, debe registrar Resultado de basiloscopia de diagnóstico.',
    errorRelacion4: 'Si registra 4 en Resultado de basiloscopia de diagnóstico, debe registrar no aplica en Fecha de toma de baciloscopia diagnóstico.',
    errorRelacion5: 'Si registra no aplica en Fecha de toma de baciloscopia diagnóstico, debe registrar 4 en Resultado de basiloscopia de diagnóstico.'
};