/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Objetivo = use('App/Models/Objetivo');

class ObjetivoController {
	async index({ response }) {
		const obj = await Objetivo.query()
			.select(['id', 'objetivo'])
			.fetch();
		return response.status(200).json(obj);
	}

	async store({ request, response }) {
		try {
			const data = request.only(['objetivo']);
			const objetivo = await Objetivo.create(data);
			return response.status(201).json(objetivo);
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}

	async destroy({ params, response }) {
		try {
			const objetivo = await Objetivo.findOrFail(params.id);
			await objetivo.delete();
			return response.status(200).send();
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}
}

module.exports = ObjetivoController;
