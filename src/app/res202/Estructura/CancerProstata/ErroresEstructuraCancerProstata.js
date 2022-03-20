module.exports.ErroresCancerProstata = {};

module.exports.ErroresCancerProstata.resultadoTactoRectal = {
    emptyField: 'Error en Resultado del tacto rectal - El campo no puede estar vacio.',
    invalidFormat: 'Error en Resultado del tacto rectal - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en Resultado del tacto rectal - La longitud del valor digitado debe estar entre 1 y 2 dígitos.',
    invalidOptions: 'Error en Resultado del tacto rectal - El valor digitado no esta dentro del rango de valores permitidos.'
};

module.exports.ErroresCancerProstata.fechaTactoRectal = {
    emptyField: 'Error en Fecha del tacto rectal - El campo no puede estar vacio.',
    dateFormat: 'Error en Fecha del tacto rectal - La fecha debe tener el formato [AAAA-MM-DD].',
    dateValue: 'Error en Fecha del tacto rectal - La fecha debe ser mayor a 1900-01-01 y menor a la del mes reportado.',
    dateComodin: 'Error en Fecha del tacto rectal - el valor digitado no aparece dentro del rango de valores permitidos.',
    dateBirthdayError: 'Error en Fecha del tacto rectal - La fecha debe ser mayor a la fecha de nacimiento.'
};

module.exports.ErroresCancerProstata.fechaTomaPSA = {
    emptyField: 'Error en Fecha de toma PSA cancer prostata - El campo no puede estar vacio.',
    dateFormat: 'Error en Fecha de toma PSA cancer prostata - La fecha debe tener el formato [AAAA-MM-DD].',
    dateValue: 'Error en Fecha de toma PSA cancer prostata - La fecha debe ser mayor a 1900-01-01 y menor a la del mes reportado.',
    dateComodin: 'Error en Fecha de toma PSA cancer prostata - el valor digitado no aparece dentro del rango de valores permitidos.',
    dateBirthdayError: 'Error en Fecha de toma PSA cancer prostata - La fecha debe ser mayor a la fecha de nacimiento.'
};

module.exports.ErroresCancerProstata.resultadoPSA = {
    emptyField: 'Error en Resultado de PSA - El campo no puede estar vacio.',
    invalidFormat: 'Error en Resultado de PSA - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en Resultado de PSA - La longitud del valor debe ser de 4 dígitos.',
    invalidOptions: 'Error en Resultado de PSA - El valor digitado no esta dentro del rango de valores permitidos.'
};