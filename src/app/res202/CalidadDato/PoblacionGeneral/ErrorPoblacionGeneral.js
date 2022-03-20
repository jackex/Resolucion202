module.exports.errorPoblacionGeneral = {};

module.exports.errorPoblacionGeneral.fechaPeso = {
    errorRelacion: 'Si no se registra Peso en kilogramos, debe registrar no se toma Fecha del peso',
    errorRelacion2: 'Si registra Fecha de la talla, debe registrar Fecha del peso'
};

module.exports.errorPoblacionGeneral.pesoKGS = {
    errorRelacion: 'Si registra Fecha del peso, debe registrar Peso en Kilogramos.'
};

module.exports.errorPoblacionGeneral.fechaTalla = {
    errorRelacion: 'Si no se registra Talla en centimetros, debe registrar no se toma Fecha de la talla',
    errorRelacion2: 'Si registra Fecha del peso, debe registrar Fecha de la talla'
};

module.exports.errorPoblacionGeneral.tallaCMS = {
    errorRelacion: 'Si registra Fecha de la talla, debe registrar Talla en centimetros.'
};

module.exports.errorPoblacionGeneral.resultadoTamizajeHepatitisC = {
    errorEdad: 'Si registra no aplica en Resultado de tamizaje para hepatitis C, debe haber nacido despues del año 1996.',
    errorEdad2: 'Si registra Resultado de tamizaje para hepatitis C, debe haber nacido antes del año 1996.',
    errorRelacion: 'Si registra Fecha de toma de tamizaje hepatitis C, debe registrar Resultado de tamizaje para hepatitis C',
    errorRelacion2: 'Si registra no se realiza Fecha de toma de tamizaje hepatitis C, debe registrar Riesgo no evaludado en Resultado de tamizaje para hepatitis C',
    errorRelacion3: 'Si registra no se tiene el dato en Fecha de toma de tamizaje hepatitis C, debe registrar Riesgo no evaludado en Resultado de tamizaje para hepatitis C'
};

module.exports.errorPoblacionGeneral.resultadoAntigenoSuperficioHepatitisB = {
    errorRelacion: 'Si registra Fecha de antígeno de superficie hepatitis B, debe registrar Resultado de antígeno de superficie hepatitis B.',
    errorRelacion2: 'Si registra no se realiza Fecha de antígeno de superficie hepatitis B, debe registrar Riesgo no evaludado en Resultado de antígeno de superficie hepatitis B.',
    errorRelacion3: 'Si registra no se tiene el dato en Fecha de antígeno de superficie hepatitis B, debe registrar Riesgo no evaludado en Resultado de antígeno de superficie hepatitis B.',
    errorRelacion4: 'Si registra no aplica en Fecha de antígeno de superficie hepatitis B, debe registrar no aplica en Resultado de antígeno de superficie hepatitis B.'
};

module.exports.errorPoblacionGeneral.fechaTomaTamizajeSifilis = {
    errorRelacion: 'Si es Gestante debe registrar un valor diferente a no aplica en Fecha de toma de prueba tamizaje para sífilis',
};

module.exports.errorPoblacionGeneral.resultadoTamizajeSifilis = {
    errorRelacion: 'Si registra Fecha de toma de prueba tamizaje para sífilis, debe registrar el Resultado de prueba tamizaje para sífilis.',
    errorRelacion2: 'Si registra no se realiza Fecha de toma de prueba tamizaje para sífilis, debe registrar Riesgo no evaluado en Resultado de prueba tamizaje para sífilis.',
    errorRelacion3: 'Si registra no aplica en Fecha de toma de prueba tamizaje para sífilis, debe registrar no aplica en Resultado de prueba tamizaje para sífilis.',
    errorRelacion4: 'Si registra no se tiene el dato en Fecha de toma de prueba tamizaje para sífilis, debe registrar Riesgo no evaluado en Resultado de prueba tamizaje para sífilis.'
};

module.exports.errorPoblacionGeneral.fechaPruebaVIH = {
    errorRelacion: 'Si es Gestante debe registrar un valor diferente a no aplica en Fecha de toma de prueba de VIH.'
};

module.exports.errorPoblacionGeneral.resultadoPruebaVIH = {
    errorRelacion: 'Si es Gestante debe registrar un valor Resultado de prueba de VIH.',
    errorRelacion2: 'Si registra Fecha de toma de prueba de VIH, debe registrar Resultado de prueba de VIH.',
    errorRelacion3: 'Si registra no se realiza Fecha de toma de prueba de VIH, debe registrar Riesgo no evaluado en Resultado de prueba de VIH.',
    errorRelacion4: 'Si registra no aplica en Fecha de toma de prueba de VIH, debe registrar no aplica en Resultado de prueba de VIH.',
    errorRelacion5: 'Si registra no se tiene el dato en Fecha de toma de prueba de VIH, debe registrar Riesgo no evaluado en Resultado de prueba de VIH.'
};

module.exports.errorPoblacionGeneral.fechaTamizajeHepatitisC = {
    errorEdad: 'Si registra Fecha de toma de tamizaje hepatitis C, debe haber nacido antes del año 1996.',
    errorEdad2: 'Si registra no aplica en Fecha de toma de tamizaje hepatitis C, debe haber nacido a partir del año 1996.'
};