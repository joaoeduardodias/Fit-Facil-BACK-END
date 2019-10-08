/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ExerciciosSchema extends Schema {
	up() {
		this.create('exercicios', table => {
			table.increments();
			table.string('exercicio', 50).notNullable();
			table.text('descricao').notNullable();
			table.string('agp_muscular', 50);
			table.timestamps();
		});
	}

	down() {
		this.drop('exercicios');
	}
}

module.exports = ExerciciosSchema;
