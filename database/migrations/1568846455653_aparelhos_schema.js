'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AparelhosSchema extends Schema {
	up() {
		this.create('aparelhos', table => {
			table.increments();
			table.string('aparelho', 200);
			table.timestamps();
		});
	}

	down() {
		this.drop('aparelhos');
	}
}

module.exports = AparelhosSchema;
