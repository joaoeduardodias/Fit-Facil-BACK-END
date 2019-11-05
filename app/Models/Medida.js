/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Medida extends Model {
	usuario() {
		return this.belongsTo('App/Models/Usuario');
	}
}

module.exports = Medida;
