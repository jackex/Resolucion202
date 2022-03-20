module.exports.erroresDatoAnticoncepcion = {};

module.exports.erroresDatoAnticoncepcion.FechaAtencionAsesoriaAnticoncepcion = {
    invalidData: 'Si registra Fecha de atención en salud para la asesoría en anticoncepción, la edad debe ser mayor o igual a 10 años',
    noAplica: 'Si registra no aplica en Fecha de atención en salud para la asesoría en anticoncepción, la edad debe ser menor a 10 años'
};

module.exports.erroresDatoAnticoncepcion.suministroMetodoAnticonceptivo = {
    invalidData: 'Si registra Suministro de método anticonceptivo, la edad debe ser mayor o igual a 10 años y menor a 60 años.',
    noAplica: 'Si registra no aplica en Suministro de método anticonceptivo, la edad debe ser menor a 10 años o mayor o igual a 60 años.',
    noAplicaRelacionada: 'Si registra no aplica en suministro de método anticonceptivo, debe registrar no aplica en Fecha de suministro de método anticonceptivo'

};

module.exports.erroresDatoAnticoncepcion.fechaSuministroMetodoAnticonceptivo = {
    noAplica: 'Si registra Fecha de suminstro de método anticonceptivo, la edad debe ser mayor o igual a 10 años y menor a 60 años.',

};
