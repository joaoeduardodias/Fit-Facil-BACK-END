/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Treino = use('App/Models/Treino');

class UsuarioTreinoController {
	async index({ auth, response }) {
		const user = await auth.getUser();
		await user.load('meustreinos', builder => {
			builder.select(['id', 'nome', 'descricao']);
		});

		return response.status(200).json(user);
	}

	async store({ response, params, auth }) {
		const user = await auth.getUser();
		const { id } = await Treino.findOrFail(params.id);

		await user.meustreinos().attach(id);

		return response.status(201).send();
	}

	async destroy({ params, response, auth }) {
		const user = await auth.getUser();
		const { id } = await Treino.findOrFail(params.id);

		await user.meustreinos().detach(id);
		return response.status(200).send();
	}
}

module.exports = UsuarioTreinoController;
