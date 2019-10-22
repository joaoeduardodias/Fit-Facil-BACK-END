// const Meustreinos = use('App/Models/UserPrograma');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Treino = use('App/Models/Programa');

class UsersProgramaController {
	async store({ response, params, auth }) {
		const user = await auth.getUser();
		const { id } = await Treino.findOrFail(params.id);

		await user.mydrills().attach(id);

		return response.status(201).send();
	}

	async index({ auth, response }) {
		const user = await auth.getUser();
		await user.load('mydrills', builder => {
			builder.select(['id', 'nome', 'descricao']);
		});

		return response.status(200).json(user);
	}
}

module.exports = UsersProgramaController;
