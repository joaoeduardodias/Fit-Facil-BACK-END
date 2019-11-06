/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Nutri = use('App/Models/DicasNutri');

class NutriController {
	async store({ request, response }) {
		const data = request.only(['titulo', 'descricao', 'texto']);
		const dicas_nutri = await Nutri.create(data);
		return response.status(201).json(dicas_nutri);
	}

	async update({ params, response, request }) {
		const dica_nutri = await Nutri.findOrFail(params.id);
		const data = request.only(['titulo', 'descricao', 'texto']);
		await dica_nutri.merge(data);
		dica_nutri.save();
		return response.status(200).json(dica_nutri);
	}

	async index({ response }) {
		const dicas_nutri = await Nutri.query()
			.select(['id', 'titulo', 'descricao', 'texto'])
			.fetch();
		return response.status(200).json(dicas_nutri);
	}

	async show({ params, response }) {
		const dica_nutri = await Nutri.findOrFail(params.id);
		await dica_nutri.load('imagens', builder => {
			builder.select(['id', 'caminho']);
		});
		return response.status(200).json(dica_nutri);
	}

	async destroy({ params, response }) {
		const dica_nutri = await Nutri.findOrFail(params.id);
		await dica_nutri.delete();
		return response.status(200).send();
	}
}

module.exports = NutriController;
