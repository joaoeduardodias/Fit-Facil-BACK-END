/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Nivel = use('App/Models/Nivel');

class NivelController {
	async index({ response }) {
		const nivel = await Nivel.query()
			.select(['id', 'nivel'])
			.fetch();
		return response.status(200).json(nivel);
	}

	async store({ request, response }) {
		try {
			const data = request.only(['nivel']);
			const nivel = await Nivel.create(data);
			return response.status(201).json(nivel);
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}

	async destroy({ params, response }) {
		try {
			const nivel = await Nivel.findOrFail(params.id);
			await nivel.delete();
			return response.status(200).send();
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}
}

module.exports = NivelController;
