/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Objetivo extends Model {
	treinos() {
		return this.hasMany('App/Models/Treino');
	}
}

module.exports = Objetivo;
