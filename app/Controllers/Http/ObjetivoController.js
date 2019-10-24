/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Objetivo = use('App/Models/Objetivo');
class ObjetivoController {
	async store({ request, response }) {
		const data = request.input('objetivo');
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
