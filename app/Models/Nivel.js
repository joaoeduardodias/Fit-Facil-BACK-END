/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Nivel extends Model {
	treinos() {
		return this.hasMany('App/Models/Treino');
	}
}

module.exports = Nivel;
