/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ExerciciosPrograma extends Model {
	static get primaryKey() {
		return null;
	}
}

module.exports = ExerciciosPrograma;
