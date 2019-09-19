'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ExerciciosAparelhosSchema extends Schema {
	up() {
		this.create('exercicios_aparelhos', table => {
			table
				.integer('fk_aparelhos')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('aparelhos')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table
				.integer('fk_exercicios')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('exercicios')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.timestamps();
		});
	}

	down() {
		this.drop('exercicios_aparelhos');
	}
}

module.exports = ExerciciosAparelhosSchema;
