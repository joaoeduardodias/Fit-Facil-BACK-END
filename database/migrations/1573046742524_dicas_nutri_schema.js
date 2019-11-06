/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Schema = use('Schema');

class DicasNutriSchema extends Schema {
	up() {
		this.create('dicas_nutri', table => {
			table.increments();
			table.string('titulo', 50).notNullable();
			table.string('descricao', 150).notNullable();
			table.text('texto');
			table.timestamps();
		});
	}

	down() {
		this.drop('dicas_nutri');
	}
}

module.exports = DicasNutriSchema;
