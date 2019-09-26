/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProgramasSchema extends Schema {
	up() {
		this.create('programas', table => {
			table.increments();
			table.string('descricao', 255);
			table.string('nome', 80);
			table
				.integer('fk_objetivo')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('objetivos')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table
				.integer('fk_nivel')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('nivels')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.timestamps();
		});
	}

	down() {
		this.drop('programas');
	}
}

module.exports = ProgramasSchema;
