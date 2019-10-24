/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Nivel = use('App/Models/Nivel');

class NivelController {
	async store({ request, response }) {
		const data = request.input('nivel');
		const nivel = await Nivel.create(data);
		return response.status(201).json(nivel);
	}

	async destroy({ params, response }) {
		const nivel = await Nivel.findOrFail(params.id);
		await nivel.delete();
		return response.status(200).send();
	}
}

module.exports = NivelController;
