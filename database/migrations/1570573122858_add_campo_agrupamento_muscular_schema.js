/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddCampoAgrupamentoMuscularSchema extends Schema {
	up() {
		this.table('exercicios', table => {
			table.string('agp_muscular', 50);
		});
	}

	down() {
		this.table('exercicios', table => {
			table.dropColumn('agp_muscular');
		});
	}
}

module.exports = AddCampoAgrupamentoMuscularSchema;
