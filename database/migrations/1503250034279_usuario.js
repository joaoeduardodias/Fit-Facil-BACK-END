/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
	up() {
		this.create('usuarios', table => {
			table.increments();
			table.string('nome', 80).notNullable();
			table
				.string('email', 254)
				.notNullable()
				.unique();
			table.string('senha', 60).notNullable();
			table.boolean('adm').defaultTo(0);
			table.string('sexo', 9);
			table.timestamps();
		});
	}

	down() {
		this.drop('usuarios');
	}
}

module.exports = UserSchema;
