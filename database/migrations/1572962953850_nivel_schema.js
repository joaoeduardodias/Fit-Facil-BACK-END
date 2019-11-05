/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class NivelSchema extends Schema {
	up() {
		this.create('nivel', table => {
			table.increments();
			table.string('nivel', 15);
			table.timestamps();
		});
	}

	down() {
		this.drop('nivel');
	}
}

module.exports = NivelSchema;
