module.exports.errorDatoAgudezaVisual = {};


module.exports.errorDatoAgudezaVisual.AgudezaVisualLejanaOjoIzquierdo = {
    invalidData: 'Si registra Agudeza visual lejana ojo izquierdo, debe registrar Fecha de agudeza visual válida',
    sinDatosComodin: 'Si registró Fecha de valoración de agudeza visual, registre un valor diferente a no aplica en Agudeza visual lejana ojo izquierdo',
    noAplicaComodin: 'Si registró no aplica en Fecha de agudeza visual, registre 0 en Agudeza visual lejana ojo izquierdo',
    noAplicaEdad: "Si registra un valor diferente de 0 en agudeza visual lejana ojo izquierdo y fecha de valoración de agudeza visual, la edad debe ser mayor o igual a 3 años"
};

module.exports.errorDatoAgudezaVisual.AgudezaVisualLejanaOjoDerecho = {
    invalidData: 'Si registra Agudeza visual lejana ojo derecho, debe registrar Fecha de agudeza visual válida',
    sinDatosComodin: 'Si registró Fecha de valoración de agudeza visual, registre un valor diferente a no aplica en Agudeza visual lejana ojo derecho',
    noAplicaComodin: 'Si registró no aplica en Fecha de agudeza visual, registre 0 en Agudeza visual lejana ojo derecho',
    noAplicaEdad: "Si registra un valor diferente de 0 en agudeza visual lejana ojo derecho y fecha de valoración de agudeza visual, la edad debe ser mayor o igual a 3 años"
};

module.exports.errorDatoAgudezaVisual.errorFechaAgudezaVisual = {
    invalidData: 'Si registra fecha de valoración de agudeza visual, la edad debe ser mayor o igual a 3 años.',
    noAplicaComodin: 'Si registró Fecha de valoración de agudeza visual, registre un valor diferente a no aplica.',
    
};