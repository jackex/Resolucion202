module.exports.ErroresCOP = {};

module.exports.ErroresCOP.FechaAtenSaludBucalPorProfesOdontologia = {
    emptyField: 'Error en Fecha de atención en salud bucal por profesional en odontología - El campo no puede estar vacio.',
    dateFormat: 'Error en Fecha de atención en salud bucal por profesional en odontología - La fecha debe tener el formato [AAAA-MM-DD].',
    dateValue: 'Error en Fecha de atención en salud bucal por profesional en odontología - La fecha debe ser mayor a 1900-01-01 y menor a la del mes reportado.',
    dateComodin: 'Error en Fecha de atención en salud bucal por profesional en odontología - el valor digitado no aparece dentro del rango de valores permitidos.',
    dateBirthdayError: 'Error en Fecha de atención en salud bucal por profesional en odontología - La fecha debe ser mayor a la fecha de nacimiento.'
};

module.exports.ErroresCOP.COPPorPersona = {
    emptyField: 'Error en COP por persona - El campo no puede estar vacio.',
    invalidFormat: 'Error en COP por persona - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en COP por persona - La longitud del valor debe ser de 12 dígitos.',
    invalidOptions: 'Error en COP por persona - El valor digitado no esta dentro del rango de valores permitidos.'
};