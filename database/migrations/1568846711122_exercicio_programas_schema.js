/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ExerciciosProgramasSchema extends Schema {
	up() {
		this.create('exercicio_programas', table => {
			table.increments();
			table
				.integer('fk_programas')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('programas')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table
				.integer('fk_exercicios')
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

module.exports = ExerciciosProgramasSchema;
