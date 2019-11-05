/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Treino = use('App/Models/Treino');

class UsuarioTreinoController {
	async index({ auth, response }) {
		const usuario = await auth.getUser();
		await usuario.load('meustreinos', builder => {
			builder.select(['id', 'nome']);
		});

		return response.status(200).json(usuario);
	}

	async store({ response, params, auth }) {
		const usuario = await auth.getUser();
		const { id } = await Treino.findOrFail(params.id);

		await usuario.meustreinos().attach(id);

		return response.status(201).send();
	}

	async destroy({ params, response, auth }) {
		const usuario = await auth.getUser();
		const { id } = await Treino.findOrFail(params.id);

		await usuario.meustreinos().detach(id);
		return response.status(200).send();
	}
}

module.exports = UsuarioTreinoController;
