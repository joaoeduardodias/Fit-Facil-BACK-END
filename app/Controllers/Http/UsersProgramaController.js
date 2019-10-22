const Meustreinos = use('App/Models/UserPrograma');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Treino = use('App/Models/Programa');

class UsersProgramaController {
	async store({ response, params, auth }) {
		const { id } = await Treino.find(params.id);

		await Meustreinos.create({
			fk_users: auth.user.id,
			fk_programas: id,
		});

		return response.status(201).send();
	}

	async index({ auth }) {
		const meustreinos = Meustreinos.query()
			.where('fk_users', auth.user.id)
			.fetch();
		return meustreinos;
	}
}

module.exports = UsersProgramaController;
