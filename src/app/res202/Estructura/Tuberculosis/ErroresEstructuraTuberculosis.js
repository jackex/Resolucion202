module.exports.ErroresTuberculosis = {};

module.exports.ErroresTuberculosis.sintomaticoRespiratorio = {
    emptyField: 'Error en Sintomático Respiratorio - El campo no puede estar vacio.',
    invalidFormat: 'Error en Sintomático Respiratorio - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en Sintomático Respiratorio - La longitud del valor debe ser de máximo 2 dígitos.',
    invalidOptions: 'Error en Sintomático Respiratorio - El valor digitado no esta dentro del rango de valores permitidos.',
};

module.exports.ErroresTuberculosis.fechaTomaBaciloscopiaDiagnostico = {
    emptyField: 'Error en Fecha de toma de baciloscopia diagnóstico - El campo no puede estar vacio.',
    dateFormat: 'Error en Fecha de toma de baciloscopia diagnóstico - La fecha debe tener el formato [AAAA-MM-DD].',
    dateValue: 'Error en Fecha de toma de baciloscopia diagnóstico - La fecha debe ser mayor a 1900-01-01 y menor a la del mes reportado.',
    dateComodin: 'Error en Fecha de toma de baciloscopia diagnóstico - el valor digitado no aparece dentro del rango de valores permitidos.',
    dateBirthdayError: 'Error en Fecha de toma de baciloscopia diagnóstico - La fecha debe ser mayor a la fecha de nacimiento.'
};

module.exports.ErroresTuberculosis.resultadoBaciloscopiaDiagnostico = {
    emptyField: 'Error en Resultado de baciloscopia diagnóstico - El campo no puede estar vacio.',
    invalidFormat: 'Error en Resultado de baciloscopia diagnóstico - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en Resultado de baciloscopia diagnóstico - La longitud del valor debe ser de máximo 2 dígitos.',
    invalidOptions: 'Error en Resultado de baciloscopia diagnóstico - El valor digitado no esta dentro del rango de valores permitidos.',
};