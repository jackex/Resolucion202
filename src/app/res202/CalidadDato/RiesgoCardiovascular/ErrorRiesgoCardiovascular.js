module.exports.errorRiesgoCardiovascular = {};


module.exports.errorRiesgoCardiovascular.consumoTabaco = {
    errorEdad: 'Si registra Consumo de tabaco, la edad debe ser mayor o igual a 12 años.',
    errorEdad2: 'Si registra no aplica en Consumo de tabaco, la edad debe ser menor a 12 años.'
};

module.exports.errorRiesgoCardiovascular.resultadoGlicemaBasal = {
    errorEdad: 'Si registra Resultado de glicemia basal, la edad debe ser mayor o igual a 18 años y menor a 29 años.',
    errorEdad2: 'Si registra no aplica en Resultado de glicemia basal, la edad debe ser menor a 18 años y menor a 29 años.',
    errorRelacion: 'Si registra Fecha de resultado de glicemia basal, debe registrar Resultado de glicemia basal.',
    errorRelacion2: 'Si registra no se realiza Fecha de resultado de glicemia basal, debe registrar riesgo no evaluado en Resultado de glicemia basal.',
    errorRelacion3: 'Si registra no se tiene el dato en Fecha de resultado de glicemia basal, debe registrar riesgo no evaluado en Resultado de glicemia basal.',
    errorRelacion4: 'Si registra no aplica en Fecha de Glicemia Basal, debe registrar no aplica en Resultado de Glicemia Basal.',
    errorRelacion5: 'Si la variable 14 registra 1 o es Gestante, debe registrar Resultado de Glicemia Basal.'
};

module.exports.errorRiesgoCardiovascular.fechatomaLDL = {
    errorEdad: 'Si registar Fecha de toma LDL, debe ser mayor o igual a 18 años y menor a 29 años.',
    errorEdad2: 'Si registra no aplica en Fecha de toma de LDL, la edad debe ser menor a 18 años y menor a 29 años.',
    errorRelacion: 'Si registra no aplica en Resultado de LDL, debe registrar no aplica en Fecha de toma de LDL.',
    errorRelacion2: 'Si registra Riesgo no evaluado en Resultado de LDL, debe registrar no se tiene el dato en Fecha de toma de LDL.'
};

module.exports.errorRiesgoCardiovascular.resultadoLDL = {
    errorEdad: 'Si registra Resultado de LDL, debe ser mayor o igual a 18 años y menor a 29 años.',
    errorEdad2: 'Si registra no aplica en Resultado de LDL, debe ser menor a 18 años.',
    errorRelacion: 'Si registra Fecha de toma de LDL, debe registrar Resultado de LDL.',
    errorRelacion2: 'Si registra no se realiza Fecha de toma de LDL, debe registrar riesgo no evaluado en Resultado de LDL.',
    errorRelacion3: 'Si registra no se tiene el dato en Fecha de toma de LDL, debe registrar riesgo no evaluado en Resultado de LDL.',
    errorRelacion4: 'Si registra no aplica en Fecha de toma de LDL, debe registrar no aplica en Resultado de LDL.',
};

module.exports.errorRiesgoCardiovascular.resultadoHDL = {
    errorEdad: 'Si registra no aplica en Resultado de HDL, debe ser menor a 18 años.',
    errorRelacion: 'Si registra Fecha de toma de HDL, debe registrar resultado de HDL.',
    errorRelacion2: 'Si registra no se realiza en Fecha de toma de HDL, debe registrar Riesgo no evaluado en resultado de HDL.',
    errorRelacion3: 'Si registra no se tiene el dato en Fecha de toma de HDL, debe registrar Riesgo no evaluado en resultado de HDL.',
    errorRelacion4: 'Si registra no aplica en Fecha de toma de HDL, debe registrar no aplica en resultado de HDL.'
};

module.exports.errorRiesgoCardiovascular.resultadoTrigliceridos = {
    errorEdad: 'Si registra Resultado de trigliceridos, debe ser mayor o igual a 18 años y menor a 29 años.',
    errorEdad2: 'Si registra no aplica en Resultado de trigliceridos, debe ser menor a 18 años.',
    errorRelacion: 'Si registra Fecha de toma de trigliceridos, debe registrar Resultado de trigliceridos.',
    errorRelacion2: 'Si registra no se realiza Fecha de toma de trigliceridos, debe registrar riesgo no evaluado en Resultado de trigliceridos.',
    errorRelacion3: 'Si registra no se tiene el dato en Fecha de toma de trigliceridos, debe registrar riesgo no evaluado en Resultado de trigliceridos.',
    errorRelacion4: 'Si registra no aplica en Fecha de toma de Triglicéridos, debe registrar no aplica en Resultado de Triglicéridos.'
};

module.exports.errorRiesgoCardiovascular.fechaTomaHemoglobina ={
    errorSexo: 'Si registra Fecha toma de hemoglobina, la variable 10 debe ser sexo Femenino',
    errorEdad: 'Si registra no aplica en Fecha de toma de hemoglobina, de ser menor a 6 meses o mayor a 23 meses de edad.',
    errorEdad2: 'Si registra no aplica en Fecha de toma de hemoglobina, de ser menor a 10 años o mayor a 17 de edad.',
    errorEdad2: 'Si registra no aplica en Fecha de toma de hemoglobina en Gestantes, debe ser menor a 10 años o mayor a 60 de edad.'
};

module.exports.errorRiesgoCardiovascular.resultadoHemoglobina ={
    errorSexo: 'Si registra Resultado de hemoglobina, la variable 10 debe ser sexo Femenino',
    errorEdad: 'Si registra no aplica en Resultado de hemoglobina, de ser menor a 6 meses o mayor a 23 meses de edad.',
    errorEdad2: 'Si registra no aplica en Resultado de hemoglobina, de ser menor a 10 años o mayor a 17 de edad.',
    errorEdad2: 'Si registra no aplica en Resultado de hemoglobina en Gestantes, debe ser menor a 10 años o mayor a 60 de edad.',
    errorRelacion: 'Si registra no se realiza Fecha de toma de hemoglobina, debe registrar riesgo no evaluado en resultado de hemoglobina.',
    errorRelacion2: 'Si registra no se tiene el dato en Fecha de toma de hemoglobina, debe registrar riesgo no evaluado en resultado de hemoglobina.'
};

module.exports.errorRiesgoCardiovascular.fechaGlicemiaBasal = {
    errorEdad: 'Si registra no aplica en Fecha de glicemia basal debe ser menor a 18 años.',
    errorEdad2: 'Si registra Fecha de glicemia basal debe ser mayor o igual a 18 años.',
    errorRelacion: 'Si registra no se realiza Fecha de glicemia basal, debe registrar riesgo no evaluado en Resultado de glicemmia basal.',
    errorRelacion2: 'Si registra no se tiene el dato en Fecha de glicemia basal, debe registrar riesgo no evaluado en Resultado de glicemia basal.',
    errorRelacion3: 'si la variable 14 registra 1 o es Gestante debe registrar Fecha de Glicemia Basal.'
};

module.exports.errorRiesgoCardiovascular.fechaTomaCreatinina = {
    errorEdad: 'Si registra no aplica en Fecha de toma de creatinina debe ser menor a 18 años.',
    errorEdad2: 'Si registra Fecha de toma de creatinina debe ser mayor o igual a 18 años.',
};

module.exports.errorRiesgoCardiovascular.resultadoCreatinina = {
    errorEdad: 'Si registra no aplica en Resultado de creatinina, debe ser menor a 18 años.',
    errorEdad2: 'Si registra Resultado de creatinina, debe ser mayor o igual a 18 años.',
    errorRelacion: 'Si registra no se realiza Resultado de creatinina, debe registrar riesgo no evaluado en Resultado de creatinina.',
    errorRelacion2: 'Si registra no se tiene el dato en Feha de toma de creatinina, debe registrar riesgo no evaluado en Resultado de creatinina.',
    errorRelacion3: 'Si registra Fecha de toma de creatinina, debe registrar un valor en Resultado de creatinina.'
};

module.exports.errorRiesgoCardiovascular.fechaTomaHDL= {
    errorEdad: 'Si registra no aplica en Fecha de toma de HDL, debe ser menor de 18 años.',
    errorEdad2: 'Si registra Fecha de toma de HDL, debe ser mayor o igual a 18 años.'
}

module.exports.errorRiesgoCardiovascular.clasificacionRiesgoCardiovascular = {
    errorEdad: 'Si registra no aplica en Clasificación del riesgo cardiovascular, debe ser menor a 18 años.',
    errorEdad2: 'Si registra Clasificación del riesgo cardiovascular, debe ser mayor o igual a 18 años.'
};

module.exports.errorRiesgoCardiovascular.clasificacionRiesgoMetabolico = {
    errorEdad: 'Si registra no aplica en Clasificación del riesgo metabólico, debe ser menor a 18 años.',
    errorEdad2: 'Si registra Clasificación del riesgo metabólico, debe ser mayor o igual a 18 años.'
};

module.exports.errorRiesgoCardiovascular.fechaTomaTrigliceridos = {
    errorEdad: 'Si registra no aplica en Fecha de toma de triglicéridos, debe ser menor a 18 años.',
    errorEdad2: 'Si registra Fecha de toma de triglicéridos, debe ser mayor o igual a 18 años.',
    errorRelacion: 'Si registra Riesgo no evaluado en Resultados de Triglicéridos, debe registrar no se tiene el dato en Fecha de toma de Triglicéridos.',
    errorRelacion2: 'Si registra no aplica en Resultado de Triglicéridos, debe registrar no aplica en Fecha de toma de Triglicéridos.'
};