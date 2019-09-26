/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MedidaSchema extends Schema {
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
				.integer('fk_user')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.timestamps();
		});
	}

	down() {
		this.drop('medidas');
	}
}

module.exports = MedidaSchema;
