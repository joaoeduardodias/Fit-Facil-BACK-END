'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class NivelSchema extends Schema {
	up() {
		this.create('nivels', table => {
			table.increments();
			table.string('nivel', 15);
			table.timestamps();
		});
	}

	down() {
		this.drop('nivels');
	}
}

module.exports = NivelSchema;
