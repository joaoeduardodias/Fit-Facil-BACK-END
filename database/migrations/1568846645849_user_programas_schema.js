/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UsersProgramasSchema extends Schema {
	up() {
		this.create('user_programas', table => {
			table.increments();
			table
				.integer('fk_users')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table
				.integer('fk_programas')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('programas')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.float('nota');
			table.text('comentario');
			table.timestamps();
		});
	}

	down() {
		this.drop('user_programas');
	}
}

module.exports = UsersProgramasSchema;
