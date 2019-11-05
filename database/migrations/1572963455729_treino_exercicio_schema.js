/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TreinoExercicioSchema extends Schema {
	up() {
		this.create('treino_exercicio', table => {
			table.increments();
			table
				.integer('treino_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('treinos')
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
		this.drop('treino_exercicio');
	}
}

module.exports = TreinoExercicioSchema;
