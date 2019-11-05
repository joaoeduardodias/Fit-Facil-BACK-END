/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UsuarioTreinoSchema extends Schema {
	up() {
		this.create('usuario_treino', table => {
			table.increments();
			table
				.integer('usuario_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('usuarios')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table
				.integer('treino_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('treinos')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.float('nota');
			table.text('comentario');
			table.timestamps();
		});
	}

	down() {
		this.drop('usuario_treino');
	}
}

module.exports = UsuarioTreinoSchema;
