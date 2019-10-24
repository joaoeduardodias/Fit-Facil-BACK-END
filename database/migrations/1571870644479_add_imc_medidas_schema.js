/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddImcMedidasSchema extends Schema {
	up() {
		this.table('medidas', table => {
			table.double('imc');
		});
	}

	down() {
		this.table('medidas', table => {
			table.dropColumn('imc');
		});
	}
}

module.exports = AddImcMedidasSchema;
