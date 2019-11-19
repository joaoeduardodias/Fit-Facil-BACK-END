/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Treino = use('App/Models/Treino');

class UsuarioTreinoController {
	async index({ auth, response }) {
		try {
			const usuario = await auth.getUser();
			await usuario.load('meustreinos', builder => {
				builder.select(['id', 'nome']);
			});

			return response.status(200).json(usuario);
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}

	async store({ response, params, auth }) {
		try {
			const usuario = await auth.getUser();
			const { id } = await Treino.findOrFail(params.id);

			await usuario.meustreinos().attach(id);

			return response.status(201).send();
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}

	async destroy({ params, response, auth }) {
		try {
			const usuario = await auth.getUser();
			const { id } = await Treino.findOrFail(params.id);

			await usuario.meustreinos().detach(id);
			return response.status(200).send();
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}
}

module.exports = UsuarioTreinoController;
