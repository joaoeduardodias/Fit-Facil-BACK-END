/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ImagensSchema extends Schema {
	up() {
		this.create('imagens', table => {
			table.increments();
			table
				.integer('exercicio_id')
				.unsigned()
				.references('id')
				.inTable('exercicios')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.string('caminho').notNullable();
			table.timestamps();
		});
	}

	down() {
		this.drop('imagens');
	}
}

module.exports = ImagensSchema;
