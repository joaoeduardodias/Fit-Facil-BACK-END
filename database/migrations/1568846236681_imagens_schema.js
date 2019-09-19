'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ImagensSchema extends Schema {
	up() {
		this.create('imagens', table => {
			table.increments();
			table.string('caminho', 300).notNullable();
			table.string('descricao', 200);
			table
				.integer('fk_exercicios')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('exercicios')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table
				.integer('fk_aparelhos')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('aparelhos')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.timestamps();
		});
	}

	down() {
		this.drop('imagens');
	}
}

module.exports = ImagensSchema;
