module.exports.erroresDatoCancerCervix = {};

module.exports.erroresDatoCancerCervix.tratamAblatEncisionTecInspeccionVisual = {
    errorSexo: 'Si registra valor para Tratamiento ablativo o de escisión posterior a la realización de la técnica de inspección visual, la variable 10 debe ser sexo femenino.',
    errorEdad: 'Si registra valor para Tratamiento ablativo o de escisión posterior a la realización de la técnica de inspección visual, la edad debe ser mayor o igual a 10 años.',
    errorNoaplica: 'Si registra no aplica para Tratamiento ablativo o de escisión posterior a la realización de la técnica de inspección visual, la edad debe ser menor o igual a 10 años.',
    errorRelacion: 'Si la variable 86 = 3  y la variable 88 = 19, debe registrar 0 para Tratamiento ablativo o de escisión posterior a la realización de la técnica de inspección visual',
    errorRelacion2: 'Si registra 0 para Tratamiento ablativo o de escisión posterior a la realización de la técnica de inspección visual y es mayor de 10 años, no se realiza tamizaje cáncer cuello uterino o si lo realizó no debe ser técnica de inspección visual.',
    errorRelacion3: 'Si registra no aplica para Tratamiento ablativo o de escisión posterior a la realización de la técnica de inspección visual, el tamizaje de cáncer de cuello uterino debe ser técnica de inspección visual.',
    errorRelacion4: 'Si registra Tratamiento ablativo o de escisión posterior a la realización de la técnica de inspección visual y es mayor de 10 años, si realiza tamizaje cáncer cuello uterino debe ser técnica de inspección visual.'

};

module.exports.erroresDatoCancerCervix.tratamientoCancerCuelloUterino = {
    errorSexo: 'Si registra valor para tamizaje del cáncer del cuello uterino, la variable 10 debe ser sexo femenino.',
    errorEdad: 'Si registra valor para tamizaje del cáncer del cuello uterino, la edad debe ser mayor o igual a 10 años.',
    errorNoaplica: 'si registra no aplica para tamizaje del cáncer del cuello uterino, la edad debe ser menor a 10 años.'
};

module.exports.erroresDatoCancerCervix.FechaTamizajeCancerCuelloUterino = {
    errorSexo: 'Si registra Fecha de tamizaje cáncer de cuello uterino, la variable 10 debe ser sexo femenino.',
    errorEdad: 'Si registra Fecha de tamizaje del cáncer del cuello uterino, la edad debe ser mayor o igual a 10 años.',
    errorNoaplica: 'si registra no aplica en Fecha de tamizaje del cáncer del cuello uterino, la edad debe ser menor a 10 años.',
    errorRelacion: 'Si registra Fecha de tamizaje cáncer de cuello uterino, debe registrar Resultado tamizaje de cáncer de cuello uterino.'
};

module.exports.erroresDatoCancerCervix.resultadoTamizajeCancerCuelloUterino = {
    errorSexo: 'Si registra resultado tamizaje cancer de cuello uterino, la variable 10 debe ser sexo femenino.',
    errorEdad: 'Si registra resultado tamizaje cancer de cuello uterino, la edad debe ser mayor o igual a 10 años.',
    errorNoaplica: 'si registra no aplica en resultado tamizaje cancer de cuello uterino, la edad debe ser menor a 10 años.',
    errorRelacion: 'si registra riesgo no evaluado en tamizaje del cáncer cuello uterino, debe registrar riesgo no evaluado en resultado tamizaje cáncer cuello uterino'
};

module.exports.erroresDatoCancerCervix.calidadMuestraCitologiaCervicouterina = {
    errorSexo: 'Si registra calidad en la muestra de citología cervicouterina, la variable 10 debe ser sexo femenino.',
    errorEdad: 'Si registra calidad en la muestra de citología cervicouterina, la edad debe ser mayor o igual a 10 años.',
    errorNoaplica: 'si registra no aplica en calidad en la muestra de citología cervicouterina, la edad debe ser menor a 10 años.',
    errorRelacion: 'Si registra calidad de la muestra de citología cervicouterina, debe registrar resultado de citología.',
    errorRelacion2: 'si registra calidad en la muestra de citología cervicouterina, el resultado tamizaje cáncer de cuello uterino debe ser diferente a riesgo no evaluado.',
    errorRelacion3: 'si registra calidad en la muestra de citología cervicouterina, la fecha de tamizaje de cáncer de cuello uterino debe ser diferente a 1800-01-01.'
};

module.exports.erroresDatoCancerCervix.codigoHabilitacionIPS = {
    errorSexo: 'si registra código de habilitación IPS donde se realiza el tamizaje cáncer cuello uterino, la variable 10 debe ser sexo femenino.',
    errorEdad:'si registra código de habilitación IPS donde se realiza el tamizaje cáncer cuello uterino, la edad debe ser mayor o igual a 10 años.',
    errorNoAplica: 'si registra no aplica en código de habilitación IPS donde se realiza el tamizaje cáncer cuello uterino, la edad debe ser menor a 10 años.',
    errorRelacion: 'si registra código de habilitación IPS donde se realiza el tamizaje cáncer cuello uterino, debe registrar un valor en fecha de tamizaje de cancer de cuello uterino.'
};

module.exports.erroresDatoCancerCervix.fechaColposcopia = {
    errorSexo: 'si registra fecha de colposcopia, la variable 10 debe ser sexo femenino.',
    errorEdad:'si registra fecha de colposcopia, la edad debe ser mayor o igual a 10 años.',
    errorNoAplica: 'debe registrar no aplica en fecha de colposcopia, si en resultado de tamizaje de cáncer de cuello uterino registra negativo, normal, no realizado o muestra rechazada en calidad de la muestra de citología cervicouterina.'
};

module.exports.erroresDatoCancerCervix.fechaBiopsiaCervicouterina = {
    errorSexo: 'si registra fecha de biopsia cervicouterina, la variable 10 debe ser sexo femenino',
    errorEdad: 'si registra fecha de biopsia cervicouterina, la edad debe ser mayor o igual a 10 años.',
    errorNoAplica: 'si registra no aplica en fecha de biopsia cervicouterina, la edad debe ser menor a 10 años.',
    errorRelacion: 'debe registrar no aplica en fecha de biopsia cervicouterina si no se realizó tamizaje de cancer de cuello uterino o los reportados con resultado negativo o normal en tamizaje del cáncer de cuello uterino, la no realización del mismo o muestra rechazada en calidad de la muestra de citología cervicouterina.'
};

module.exports.erroresDatoCancerCervix.resultadoBiopsiaCervicouterina = {
    errorSexo: 'si registra resultado de biopsia cervicouterina, la variable 10 debe ser sexo femenino',
    errorEdad: 'si registra resultado de biopsia cervicouterina, la edad debe ser mayor o igual a 10 años.',
    errorNoAplica: 'si registra no aplica en resultado de biopsia cervicouterina, la edad debe ser menor a 10 años.',
    errorComodin: 'si registra un valor en resultado de biopsia cervicouterina debe registrar valor en fecha de biopsia cervicouterina.',
    errorComodin2: 'si registra un valor en resultado de biopsia cervicouterina, resultado normal o negativo, o no se realizó el tamizaje de cáncer de cuello uterino debe registrar valor en fecha de biopsia cervicouterina.'
};
