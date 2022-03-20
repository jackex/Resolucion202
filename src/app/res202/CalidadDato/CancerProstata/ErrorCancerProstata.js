module.exports.errorCancerProstata = {};

module.exports.errorCancerProstata.resultadoCancerProstata = {
    errorSexo: 'Si registra Resultado del tacto rectal, la variable 10 debe ser sexo Masculino.',
    errorEdad: 'Si Registra Resultado del tacto rectal, debe ser mayor o igual de 40 años de edad.',
    errorEdad2: 'Si Registra no aplica en Resultado del tacto rectal, debe ser menor de 40 años de edad.',
    errorRelacion: 'Si registra riesgo no evaluado en Resultado del tacto rectal, debe registrar no se tiene dato o no realización del tamizaje en Fecha el tacto rectal.'
};

module.exports.errorCancerProstata.fechaDelTactoRectal = {
    errorSexo: 'Si registra Fecha del tacto rectal, la variable 10 debe ser sexo Masculino.',
    errorEdad2: 'Si registra no aplica en Fecha del tacto rectal,  debe ser menor de 40 años de edad.',
    errorRelacion: 'Si registra Resutado del tacto rectal, debe registrar Fecha del tacto rectal.',
    errorRelacion2: 'Si registra no aplica en Resultado del tacto rectal, debe registrar no aplica en Fecha del tacto rectal o debe ser menor de 40 años de edad o debe ser mayor o igual a 40 años y menor o igual a 49 años de edad sin factores de riesgo.'
};

module.exports.errorCancerProstata.fechaTomaPSA = {
    errorSexo: 'Si registra Fecha de toma PSA, la variable 10 debe ser sexo Masculino.',
    errorEdad: 'Si registra Fecha de toma PSA, debe ser mayor o igual de 40 años y menorde edad y menor ',
    errorEdad2: 'Si registra no aplica en Fecha de toma PSA, debe ser menor de 40 años de edad o debe ser mayor o igual a 40 años y menor o igual a 49 años de edad sin factores de riesgo.',
    errorRelacion: 'Si registra Resultado de PSA, debe registrar Fecha de toma PSA.'
};

module.exports.errorCancerProstata.resultadoPSA = {
    errorSexo: 'Si registra Resultado de PSA, la variable 10 debe ser sexo Masculino.',
    errorEdad2: 'Si registra no aplica en Resultado de PSA, debe ser menor de 40 años de edad.',
    errorRelacion: 'Si registra no aplica en Resultado de PSA debe registrar no aplica en Fecha toma PSA ,si registra cero como resultado de PSA debe registrar Fecha de toma PSA.',
    errorRelacion2: 'Si registra no aplica en Resultado de PSA, debe ser menor de 40 años de edad o debe ser mayor o igual a 40 años y menor o igual a 49 años de edad sin factores de riesgo.',
    errorRelacion3: 'Si registra riesgo no evaluado en Fecha de toma de PSA, debe registrar riesgo no evaludado en Resultado de PSA.'
};