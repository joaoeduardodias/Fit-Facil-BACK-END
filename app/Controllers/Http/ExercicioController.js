/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Exercicio = use('App/Models/Exercicio');

class ExercicioController {
	async index({ response }) {
		const exercicio = await Exercicio.query()
			.select(['id', 'nome', 'descricao', 'agp_muscular'])
			.with('imagens', buider => {
				buider.select(['id', 'exercicio_id', 'caminho']);
			})
			.fetch();

		return response.status(200).json(exercicio);
	}

	async show({ params, response }) {
		const exercicio = await Exercicio.findOrFail(params.id);
		await exercicio.load('imagens', builder => {
			builder.select(['id', 'caminho']);
		});
		return response.status(200).json(exercicio);
	}

	async store({ request, response }) {
		const data = request.only(['nome', 'descricao', 'agp_muscular']);
		const exercicio = await Exercicio.create(data);
		return response.status(201).json(exercicio);
	}

	async update({ request, params, response }) {
		const data = request.only(['nome', 'descricao', 'agp_muscular']);

		const exercicio = await Exercicio.findOrFail(params.id);

		exercicio.merge(data);
		await exercicio.save();
		return response.status(201).json(exercicio);
	}

	async destroy({ params, response }) {
		const exercicio = await Exercicio.findOrFail(params.id);
		await exercicio.delete();
		return response.status(200).send();
	}
}

module.exports = ExercicioController;
