/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Exercicio extends Model {
	treino_exercicios() {
		return this.belongsToMany('App/Models/Treino')
			.pivotTable('treino_exercicio')
			.pivotModel('App/Models/Treino');
	}

	imagens() {
		return this.hasMany('App/Models/Imagem');
	}
}

module.exports = Exercicio;
