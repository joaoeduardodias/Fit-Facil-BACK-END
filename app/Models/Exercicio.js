'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Exercicio extends Model {
	exercicioprograma() {
		return this.hasMany('App/Models/ExerciciosPrograma');
	}
	imagen() {
		return this.hasMany('App/Models/Imagen');
	}
	video() {
		return this.hasMany('App/Models/Video');
	}
}

module.exports = Exercicio;
