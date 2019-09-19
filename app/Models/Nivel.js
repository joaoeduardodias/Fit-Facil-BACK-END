'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Nivel extends Model {
	programa() {
		return this.hasMany('App/Models/Programa');
	}
}

module.exports = Nivel;
