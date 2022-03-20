module.exports.errorCancerMama = {};

module.exports.errorCancerMama.fechaTomaMamografia = {
    errorSexo: 'Si registra Fecha de toma de mamografía, la variable 10 debe ser sexo Femenino.',
    errorEdad: 'Si registra Fecha de toma de mamografía, debe ser mayor o igual a 35 años de edad.',
    errorEdad2: 'Si registra no aplica en Fecha de toma de mamografía, debe ser menor de 35 años de edad.',
    errorRelacion: 'Si registra no aplica en Fecha de toma de mamografía, debe registrar no aplica en Resultado de mamografía.',
    errorRelacion2: 'Si registra riesgo no evaluado en resultado de mamografía , debe registrar sin dato en Fecha de toma de mamografía.',
    errorRelacion3: 'Si registra Resultado de mamografía, debe registrar Fecha de toma de mamografía. '
};

module.exports.errorCancerMama.resultadoMamografia = {
    errorSexo: 'Si registra Resultado de mamografía, la variable 10 debe ser sexo Femenino.',
    errorEdad: 'Si registra Resultado de mamografía, debe ser mayor o igual a 35 años.',
    errorRelacion:'Si registra Fecha de toma de mamograía, debe registrar Resultado de mamografía.',
    errorRelacion2: 'Si registra Resultado de mamografía, debe registrar Fecha de toma de mamografía.',
    errorRelacion3: 'Si registra no aplica en Resultado de mamografía, debe ser menor a 35 años.'
};

module.exports.errorCancerMama.fechaTomaBiopsia = {
    errorSexo: 'Si registra Fecha de toma de biopsia de mama, la variable 10 debe ser sexo Femenino',
    errorEdad: 'Si registra Fecha de toma de biopsia de mama, debe ser mayor o igual a 35 años de edad.',
    errorRelacion: 'Si registra Fecha de resultado biopsia de mama, debe registrar Fecha de toma de biopsia.',
    errorRelacion2: 'Si registra Fecha de toma de biopsia de mama, la Fecha de resultado de biopsia de mama debe ser mayor a la Fecha de toma de biopsia.'
};

module.exports.errorCancerMama.fechaResultadoBiopsiaMama = {
    errorSexo: 'Si registra Fecha de resultado de biopsia de mama, la variable 10 debe ser sexo Femenino',
    errorEdad: 'Si registar Fecha de resultado de biopsia de mama, la edad debe ser mayor o igual a 35 años.',
    errorRelacion: 'Si no registra Fecha de toma de biopsia de mama, debe registrar no aplica en Fecha de resultado de Biopsia.',
    errorRelacion2: 'Si no se tiene el dato en Fecha de toma de biopsia de mama, debe registrar 21 en Fecha de resultado de Biopsia.',
    errorRelacion3: 'Si registra Fecha de toma de biopsia de mama, debe registrar Fecha de resultado de biopsia de mama.',
    errorRelacion4: 'Si no registra Fecha de toma de biopsia de mama, debe registrar no se tiene el dato en Fecha resultado de biopsia de mama.'
};

module.exports.errorCancerMama.resultadoBiopsiaMama = {
    errorSexo: 'Si registra Resultado de biopsia de mama, la variable 10 debe esr sexo Femenino.',
    errorEdad: 'Si registra Resultado de biopsia de mama, la edad debe ser mayor o igual a 35 años.',
    errorRelacion: ' Si registra Fecha de resultado de biopsia de mama, debe registrar Resultado de Biopsia de mama.',
    errorRelacion2: ' Si registra no aplica en Fecha de resultado de biopsia de mama, debe registrar no aplica en Resultao de biopsia de mama.',
    errorRelacion2: ' Si no se tiene el dato en Fecha de resultado de biopsia de mama, debe registrar 21 en Resultao de biopsia de mama.'
};