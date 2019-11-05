/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TreinosSchema extends Schema {
	up() {
		this.create('treinos', table => {
			table.increments();
			table
				.integer('objetivo_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('objetivos')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table
				.integer('nivel_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('nivel')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.string('nome', 80).notNullable();
			table.timestamps();
		});
	}

	down() {
		this.drop('treinos');
	}
}

module.exports = TreinosSchema;
