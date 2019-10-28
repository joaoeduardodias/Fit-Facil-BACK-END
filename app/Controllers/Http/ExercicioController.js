/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Exercicio = use('App/Models/Exercicio');

class ExercicioController {
	async index({ response }) {
		const exercicio = await Exercicio.query()
			.select(['id', 'exercicio', 'descricao', 'agp_muscular'])
			.with('imagens', buider => {
				buider.select(['id', 'exercicio_id', 'path']);
			})
			.fetch();
		return response.status(200).json(exercicio);
	}

	async store({ request, response }) {
		const data = request.only(['exercicio', 'descricao', 'agp_muscular']);
		const exercicio = await Exercicio.create(data);
		return response.status(201).json(exercicio);
	}

	async show({ params, response }) {
		const exercicio = await Exercicio.findOrFail(params.id);
		await exercicio.load('imagens', builder => {
			builder.select(['id', 'path']);
		});

		return response.status(200).json(exercicio);
	}

	async update({ request, params, response }) {
		const data = request.only(['exercicio', 'descricao', 'agp_muscular']);
		const exe = await Exercicio.findOrFail(params.id);

		exe.merge(data);
		exe.save();
		return response.status(201).json(exe);
	}

	async destroy({ params, response }) {
		const exercicio = await Exercicio.findOrFail(params.id);
		await exercicio.delete();
		return response.status(200).send();
	}
}

module.exports = ExercicioController;
