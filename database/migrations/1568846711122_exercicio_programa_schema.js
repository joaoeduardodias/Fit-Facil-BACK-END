/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ExercicioProgramaSchema extends Schema {
	up() {
		this.create('exercicio_programas', table => {
			table.increments();
			table
				.integer('programa_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('programas')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table
				.integer('exercicio_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('exercicios')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.integer('repeticoes');
			table.float('descanso');
			table.timestamps();
		});
	}

	down() {
		this.drop('exercicio_programas');
	}
}

module.exports = ExercicioProgramaSchema;
