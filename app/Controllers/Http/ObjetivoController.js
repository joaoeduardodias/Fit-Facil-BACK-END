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
		const data = request.only(['objetivo']);
		const objetivo = await Objetivo.create(data);
		return response.status(201).json(objetivo);
	}

	async destroy({ params, response }) {
		const objetivo = await Objetivo.findOrFail(params.id);
		await objetivo.delete();
		return response.status(200).send();
	}
}

module.exports = ObjetivoController;
