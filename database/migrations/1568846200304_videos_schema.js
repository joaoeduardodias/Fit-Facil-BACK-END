/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class VideosSchema extends Schema {
	up() {
		this.create('videos', table => {
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

			table.timestamps();
		});
	}

	down() {
		this.drop('videos');
	}
}

module.exports = VideosSchema;
