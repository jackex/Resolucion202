module.exports.errorCOP = {};

module.exports.errorCOP.fechaSaludBucalProfesionalOdontologia = {
    errorEdad: 'Si registra Fecha de atención en salud bucal por profesional en odontología, debe ser mayor o igual a 6 meses de edad. Si es endéntulo registre 000000000000.',
    errorEdad2: 'Si registra no aplica en Fecha de atención en salud bucal por profesional en odontología, debe ser menor o igual a 6 meses.'
};

module.exports.errorCOP.COPPersona = {
    errorEdad: 'Si registra COP por persona, debe ser mayor o igual a 6 meses de edad',
    errorRelacion: 'Si no registra Fecha de atención en salud bucal por profesional en odontología, debe registrar 21 en COP por persona.',
    errorRelacion2: 'Si registra no aplica en Fecha de atención en salud bucal por profesional en odontología, debe registrar no aplica en COP por persona.',
    errorRelacion3: 'Si no se tiene el dato en Fecha de atención en salud bucal por profesional en odontología, debe registrar 21 en COP por persona.',
    errorRelacion4: 'Si registra Fecha de atención en salud bucal por profesional en odontología, debe registrar COP por persona. Si es endéntulo registre 000000000000.',
    errorPrimeraInfancia: 'Si registra COP y es primera infancia hasta los 4 años, 11 meses y 29 días, el número total de dientes presentes debe ser menor o igual a 20.',
    errorInfancia: 'Si registra COP y es mayor a 4 años, 11 meses y 29 días, el número total de dientes presentes debe ser menor o igual a 20 en recambio o 32 dientes en total.',
    errorTotal: 'Si registra COP por persona, el total de dientes reportados debe ser igual al total de dientes presentes al momento de la valoración.'
};
