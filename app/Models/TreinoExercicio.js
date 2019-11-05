/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class TreinoExercicio extends Model {
	static get table() {
		return 'treino_exercicio';
	}
}

module.exports = TreinoExercicio;
