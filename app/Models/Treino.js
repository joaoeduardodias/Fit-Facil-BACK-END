/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Treino extends Model {
	usuario_treinos() {
		return this.belongsToMany('App/Models/Usuario')
			.pivotTable('usuario_treino')
			.pivotModel('App/Models/UsuarioTreino');
	}

	treino_exercicios() {
		return this.belongsToMany('App/Models/Exercicio')
			.pivotTable('treino_exercicio')
			.pivotModel('App/Models/TreinoExercicio');
	}
	/*
	static getObjetivo({ objetivo_id }) {
		if (objetivo_id === 1) {
			return 'perda';
		} */
}

module.exports = Treino;
