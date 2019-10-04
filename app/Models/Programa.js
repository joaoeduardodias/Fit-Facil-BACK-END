/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Programa extends Model {
	usertraining() {
		return this.belongsToMany('App/Models/User')
			.pivotTable('users_programas')
			.withTimestamps();
	}

	/* exercicios_programas() {
		return this.hasMany('App/Models/ExerciciosPrograma');
	} */
}

module.exports = Programa;
