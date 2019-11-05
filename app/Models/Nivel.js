/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Nivel extends Model {
	static get table() {
		return 'nivel';
	}

	treinos() {
		return this.hasMany('App/Models/Treino');
	}
}

module.exports = Nivel;
