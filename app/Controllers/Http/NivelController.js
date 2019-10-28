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
		const data = request.only(['nivel']);
		const n = await Nivel.create(data);
		return response.status(201).json(n);
	}

	async destroy({ params, response }) {
		const nivel = await Nivel.findOrFail(params.id);
		await nivel.delete();
		return response.status(200).send();
	}
}

module.exports = NivelController;
