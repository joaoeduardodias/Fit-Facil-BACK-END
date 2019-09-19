'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ExerciciosAparelho extends Model {
	static get primaryKey() {
		return null;
	}
}

module.exports = ExerciciosAparelho;
