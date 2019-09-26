/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Programa extends Model {
	users_programas() {
		return this.hasMany('App/Models/UsersPrograma');
	}

	exercicios_programas() {
		return this.hasMany('App/Models/ExerciciosPrograma');
	}
}

module.exports = Programa;
