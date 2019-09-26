/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Objetivo extends Model {
	programa() {
		return this.hasMany('App/Models/Programa');
	}
}

module.exports = Objetivo;
