/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Exercicio extends Model {
	exercicios_programas() {
		return this.belongsToMany('App/Models/Programa')
			.pivotTable('exercicio_programas')
			.pivotModel('App/Models/ExercicioPrograma');
	}

	imagens() {
		return this.hasMany('App/Models/Imagem');
	}
}

module.exports = Exercicio;
