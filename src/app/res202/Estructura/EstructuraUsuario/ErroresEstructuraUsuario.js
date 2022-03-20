module.exports.ErroresUsuario = {};

module.exports.ErroresUsuario.registerType = {
    invalidNumber: 'Error en tipo registro - El valor de tipo registro debe ser 2.',
    invalidLength: 'Error en tipo registro - La longitud del valor de tipo registro es mayor a la permitida.',
    emptyField: 'Error en tipo registro - El valor de tipo registro no puede estar vacio.',
    invalidFormat: 'Error en tipo registro - El valor de tipo registro no puede tener carácteres especiales.'
};

module.exports.ErroresUsuario.consecutivo = {
    emptyField: 'Error en Consecutivo de registro - El campo no puede estar vacio.',
    invalidFormat: 'Error en Consecutivo de registro - El valor digitado no puede tener carácteres especiales.',
    invalidOptions: 'Error en Consecutivo de registro - El valor digitado no esta dentro del rango de valores permitidos.',
    invalidTotal: 'Error en Consecutivo de registro - El número total de registros no coincide con el número de lineas reportadas',
    invalidRow: 'Error en Consecutivo de registro - Error en el consecutivo: ',
    emptyFile: 'No hay registros en el archivo',
};

module.exports.ErroresUsuario.qualifiedCode = {
    invalidLength: 'Error en código de habilitación - La longitud del código de habilitación debe ser de 12 dígitos.',
    invalidFormat: 'Error en código de habilitación - El valor del código de habilitación no puede tener carácteres especiales.',
    emptyField: 'Error en código de habilitación - El campo de código de habilitación no puede estar vacio.'
};

module.exports.ErroresUsuario.documentType = {
    emptyField: 'Error en el tipo de documento - El campo tipo de documento no puede estar vacio.',
    invalidFormat: 'Error en el tipo de documento - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en el tipo de documento - La longitud del tipo de documento digitado debe ser de 2 carácteres.',
    invalidOptions: 'Error en el tipo de documento - El valor digitado no esta dentro del rango de valores permitidos.'
};

module.exports.ErroresUsuario.documentNumber = {
    emptyField: 'Error en el número de identificación - El campo numero de identificación no puede estar vacio.',
    invalidFormat: 'Error en el número de identificación - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en el número de identificación - La longitud del número de identificación debe se de 12 dígitos.',
    invalidOptions: 'Error en el número de identificación - El valor digitado no esta dentro del rango de valores permitidos.'
};

module.exports.ErroresUsuario.nameErrors = {
    invalidSymbol: 'Error en el nombre - El nombre no debe tener carácteres especiales.',
    invalidFirstName: 'Error en el Primer Nombre - El primer nombre no puede tener carácteres especiales.',
    invalidSecondName: 'Error en el Segundo Nombre - El segundo nombre no puede tener carácteres especiales.',
    invalidSurename: 'Error en el Primer Apellido - El primer apellido no puede tener carácteres especiales.',
    invalidLastname: 'Error en el Segundo Apellido - El segundo apellido no puede tener carácteres especiales.',
    emptyFirstName: 'Error en el Primer Nombre - El primer nombre no puede estar vacio.',
    emptySecondName: 'Error en el Segundo Nombre - El segundo nombre esta vacio.',
    emptySurename: 'Error en el Primer Apellido - El primer apellido no puede estar vacio.',
    emptyLastname: 'Error en el Segundo Apellido - El segundo apellido esta vacio.'
};

module.exports.ErroresUsuario.DateErrors = {
    emptyField: 'Error en fecha de nacimiento - El campo fecha de nacimiento no puede estar vacio.',
    invalidFormat: 'Error en Fecha de Nacimiento - La fecha debe tener el formato [AAAA-MM-DD]',
    invalidOptions: 'Error en Fecha de Nacimiento - La fecha debe ser mayor a 1900-01-01 y menor o igual a la del mes reportado.',
    invalidDay: 'Error en Fecha de Nacimiento - El día de la fecha de nacimiento debe ser menor o igual a 31 días.',
    invalidMonth: 'Error en Fecha de Nacimiento - El número del mes de la fecha de nacimiento debe ser menor o igual a 12.'
};

module.exports.ErroresUsuario.SexErrors = {
    emptyField: 'Error en el sexo del usuario - El campo tipo sexo no puede estar vacio.',
    invalidFormat: 'Error en el sexo del usuario - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en el sexo del usuario - La longitud sexo del usuario debe se de 1 carácter.',
    invalidOptions: 'Error en el sexo del usuario - El valor digitado no esta dentro del rango de valores permitidos.'
};

module.exports.ErroresUsuario.ethnicityCode = {
    emptyField: 'Error en código de pertenencia étnica - El campo de código de pertenencia étnica no puede estar vacio.',
    invalidFormat: 'Error en código de pertenencia étnica - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en código de pertenencia étnica - La longitud de código de pertenencia étnica debe ser de 1 dígito.',
    invalidOptions: 'Error en código de pertenencia étnica - El valor digitado no esta dentro del rango de valores permitidos.'
};

module.exports.ErroresUsuario.occupationCode = {
    emptyField: 'Error en código de ocupación - El campo de código de ocupación no puede estar vacio.',
    invalidFormat: 'Error en código de ocupación - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en código de ocupación - La longitud de código de ocupación debe estar entre 1 y 4 dígitos.',
    invalidOptions: 'Error en código de ocupación - El valor digitado no esta dentro del rango de valores permitidos.'
};

module.exports.ErroresUsuario.educationLevel = {
    emptyField: 'Error en código de nivel educativo - El campo de código de nivel educativo no puede estar vacio.',
    invalidFormat: 'Error en código de nivel educativo - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en código de nivel educativo - La longitud de código de nivel educativo debe estar entre 1 y 2 dígitos.',
    invalidOptions: 'Error en código de nivel educativo - El valor digitado no esta dentro del rango de valores permitidos.'
};

module.exports.ErroresUsuario.CodigoHabilitacionIPSPrimaria = {
    emptyField: 'Error en Código de Habilitacion IPS Primaria - El campo no puede estar vacio.',
    invalidFormat: 'Error en Código de Habilitacion IPS Primaria - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en Código de Habilitacion IPS Primaria - La longitud del valor debe ser de 12 dígitos.',
    invalidOptions: 'Error en  Código de Habilitacion IPS Primaria - El valor digitado no esta dentro del rango de valores permitidos.'
};

module.exports.ErroresUsuario.codigoPais = {
    emptyField: 'Error en Código País - El campo no puede estar vacio.',
    invalidFormat: 'Error en Código País - El valor digitado no puede tener carácteres especiales.',
    invalidLength: 'Error en Código País - La longitud del valor debe ser de 3 dígitos.',
    invalidOptions: 'Error en Código País - El valor digitado no esta dentro del rango de valores permitidos.'
};