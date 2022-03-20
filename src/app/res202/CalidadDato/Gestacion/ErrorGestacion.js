module.exports.erroresGestacion = {};

module.exports.erroresGestacion.errorGestantes = {
    errorSexo: 'Si registra un valor en Gestante, la variable 10 debe ser sexo Femenino.',
    errorEdad: 'Si registra un valor en Gestante, debe ser mayor o igual a 10 años y menor a 60 años de edad.',
    errorNoAplica: ' Si registra no aplica en Gestante, debe ser mayor o igual a 10 años y menor a 60 años de edad.'
};

module.exports.erroresGestacion.acidoFolicoPreconcepcional = {
    errorSexo: 'Si registra Acido fólico Preconcepcional, la variable 10 debe ser sexo Femenino.',
    errorEdad: 'Si registra Acido fólico Preconcepcional, debe ser mayor o igual a 10 años y menor a 60 años de edad.',
    errorNoAplica: ' Si registra no aplica Acido fólico Preconcepcional, debe ser mayor o igual a 10 años y menor a 60 años de edad.',
    errorRelacion: 'Si registra Acido fólico Preconcepcional, la varible 14 debe ser diferente de 0, 2 o 21.',
    errorRelacion2: 'Si registra valor como Gestante, debe registrar Acido fólico Preconcepcional'
};

module.exports.erroresGestacion.fechaProbableparto = {
    errorSexo: 'Si registra Fecha probable de parto, la variable 10 debe ser sexo Femenino.',
    errorEdad: 'Si registra Fecha probable de parto, la edad debe ser mayor o igual a 10 años y menor a 60 años de edad.',
    errorRelacion: 'Si registra Fecha probable de parto, la variable 14 debe ser diferente de 0, 2 o 21.'
};

module.exports.erroresGestacion.clasificacionRiesgoGestacional = {
    errorSexo: 'Si registra Clasificación del riesgo gestacional, la variable 10 debe ser sexo Femenino.',
    errorEdad: 'Si registra Clasificación del riesgo gestacional, la edad debe ser mayor o igual a 10 años y menor a 60 años de edad.',
    errorRelacion: 'Si registra Clasificación del riesgo gestacional, la varible 14 debe ser diferente de 0, 2 o 21.',
    errorRelacion2: 'Si registra valor como Gestante, debe registrar Clasificación del riesgo gestacional.'
};

module.exports.erroresGestacion.fechaAtencionPartoCesarea = {
    errorSexo: 'Si registra Fecha de atención del parto o cesarea, la variable 10 debe ser sexo Femenino.',
    errorEdad: 'Si registra Fecha de atención del parto o cesarea, la edad debe ser mayor o igual a 10 años y menor a 60 años de edad.',
    errorRelacion: 'Si registra Fecha de atención del parto o cesarea, la variable 14 debe ser diferente de 0, 2 o 21.',
    errorRelacion2: 'Si registra Fecha de atención del parto o cesarea y Fecha de salida de atención parto o cesarea unicamente, debe registrar 2 en la variable 14.'
};

module.exports.erroresGestacion.fechaSalidaPartoCesarea = {
    errorSexo: 'Si registra Fecha de salida de atención parto o cesárea, la variable 10 debe ser sexo Femenino.',
    errorEdad: 'Si registra Fecha de salida de atención parto o cesárea, la edad debe ser mayor o igual a 10 años y menor a 60 años de edad.',
    errorRelacion: 'Si registra Fecha de salida de atención parto o cesárea, la varible 14 debe ser diferente de 0, 2 o 21.',
    errorRelacion2: 'Si no registra Fecha de atención del parto o cesarea, debe registrar no aplica en Fecha de salida de atención parto o cesárea',
    errorRelacion3: 'Si registra sin dato en Fecha de atención del parto o cesarea, debe registrar sin dato en Fecha de salida de atención parto o cesárea.'
};

module.exports.erroresGestacion.fechaPrimeraConsultaPrenatal = {
    errorSexo: 'Si registra Fecha de primera consulta prenatal, la variable 10 debe ser sexo Femenino.',
    errorEdad: 'Si registra Fecha de primera consulta prenatal, la edad debe ser mayor o igual a 10 años y menor a 60 años de edad.',
    errorRelacion: 'Si registra Fecha de primera consulta prenatal, debe ser menor a Fecha de último control prenatal de seguimiento.',
    errorRelacion2: 'Si registra no aplica en Fecha de primera consulta prenatal, la variable 14 debe ser no Gestante o igual a 0, 2 o 21.',
    errorRelacion3: 'Si registra no Gestante en la variable 14, debe registrar no aplica en Fecha de primera consulta prenatal',
    errorRelacion4: 'Si registra sin dato en Gestante, debe registrar no aplica en Fecha de primera consulta prenatal'
};

module.exports.erroresGestacion.fechaUltimoControlPrenatalSeguimiento = {
    errorSexo: 'Si registra Fecha del ultimo control prenatal de seguimiento, la variable 10 debe ser sexo Femenino.',
    errorEdad: 'Si registra Fecha del ultimo control prenatal de seguimiento, la edad debe ser mayor o igual a 10 años y menor a 60 años de edad.',
    errorRelacion: 'Si registra Fecha del ultimo control prenatal de seguimiento, la variable 14 debe ser diferente de 0, 2 o 21.',
    errorRelacion2: 'Si registra no aplica en Fecha de primera consulta prenatal, debe registrar no aplica en Fecha del ultimo control prenatal de seguimiento',
    errorRelacion3: 'Si registra dato desconocido en Fecha de primera consulta prenatal, debe registrar dato desconocido en Fecha del ultimo control prenatal de seguimiento',
    errorRelacion4: 'Si registra Fecha de primera consulta prenatal, debe registrar un valor diferente a no aplica en Fecha del ultimo control prenatal de seguimiento.',
    errorRelacion5: 'Si registra no aplica en Fecha del ultimo control prenatal de seguimiento, la variable 14 debe ser igual a 0, 2 o 21.',
};

module.exports.erroresGestacion.suministroAcidoFolicoControlPrenatal = {
    errorSexo: 'Si registra Suministro de ácido fólico en el control prenatal durante el periodo reportado, la variable 10 debe ser sexo Femenino.',
    errorEdad: 'Si registra Suministro de ácido fólico en el control prenatal durante el periodo reportado, la edad debe ser mayor o igual a 10 años y menor a 60 años de edad.',
    errorRelacion: 'Si registra Suministro de ácido fólico en el control prenatal durante el periodo reportado, la variable 14 debe ser de 0, 2 o 21.'
};

module.exports.erroresGestacion.suministroSulfatoFerrosoControlPrenatal = {
    errorSexo: 'Si registra Suministro de sulfato ferroso en el control prenatal durante el periodo reportado, la variable 10 debe ser sexo Femenino.',
    errorEdad: 'Si registra Suministro de sulfato ferroso en el control prenatal durante el periodo reportado, la edad debe ser mayor o igual a 10 años y menor a 60 años de edad.',
    errorRelacion: 'Si registra Suministro de sulfato ferroso en el control prenatal durante el periodo reportado, la variable 14 debe ser de 0, 2 o 21.'
};

module.exports.erroresGestacion.suministroCarbonatoCalcioControlPrenatal = {
    errorSexo: 'Si registra Suministro de carbonato de calcio en el control prenatal durante el periodo reportado, la variable 10 debe ser sexo Femenino.',
    errorEdad: 'Si registra Suministro de carbonato de calcio en el control prenatal durante el periodo reportado, la edad debe ser mayor o igual a 10 años y menor a 60 años de edad.',
    errorRelacion: 'Si registra Suministro de carbonato de calcio en el control prenatal durante el periodo reportado, la variable 14 debe ser de 0, 2 o 21.'
};

module.exports.erroresGestacion.fechaAtencionSaludApoyoLactanciaMaterna = {
    errorSexo: 'Si registra Fecha de atención en salud para la promoción y apoyo de la lactancia materna, la variable 10 debe ser sexo Femenino o Masculino menores a 7 meses o Femenino mayor a 10 años.',
    errorEdad: 'Si registra Fecha de atención en salud para la promoción y apoyo de la lactancia materna, la edad debe ser mayor o igual a 10 años y menor a 60 años de edad o Femenino o Masculino menores a 7 meses.',
    errorNoAplica: 'Si registra no aplica en Fecha de atención en salud para la promoción y apoyo de la lactancia materna, la edad debe ser menor a 10 años o mayor a 60 años de edad o mayor a 7 meses.',
    errorRelacion: 'Si  registra no aplica en Fecha de atención en salud para la promoción y apoyo de la lactancia materna la variable 14 debe ser diferente de 1.'
};