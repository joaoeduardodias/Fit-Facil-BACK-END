/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MedidasSchema extends Schema {
	up() {
		this.create('medidas', table => {
			table.increments();
			table.float('peso');
			table.float('braco');
			table.float('peito');
			table.float('ombro');
			table.float('cintura');
			table.float('perna');
			table.float('panturrilha');
			table
				.integer('usuario_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('usuarios')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.timestamps();
		});
	}

	down() {
		this.drop('medidas');
	}
}

module.exports = MedidasSchema;
