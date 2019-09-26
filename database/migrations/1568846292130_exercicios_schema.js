/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ExerciciosSchema extends Schema {
	up() {
		this.create('exercicios', table => {
			table.increments();
			table.string('exercicio', 50).notNullable();
			table.string('descricao', 255).notNullable();
			table.timestamps();
		});
	}

	down() {
		this.drop('exercicios');
	}
}

module.exports = ExerciciosSchema;
