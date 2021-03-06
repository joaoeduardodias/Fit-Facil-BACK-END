/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ObjetivoSchema extends Schema {
	up() {
		this.create('objetivos', table => {
			table.increments();
			table.string('objetivo', 30);
			table.timestamps();
		});
	}

	down() {
		this.drop('objetivos');
	}
}

module.exports = ObjetivoSchema;
