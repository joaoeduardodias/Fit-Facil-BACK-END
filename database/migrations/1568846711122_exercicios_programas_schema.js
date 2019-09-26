/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ExerciciosProgramasSchema extends Schema {
	up() {
		this.create('exercicios_programas', table => {
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
		this.drop('exercicios_programas');
	}
}

module.exports = ExerciciosProgramasSchema;
