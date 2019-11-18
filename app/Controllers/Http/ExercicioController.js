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
		try {
			const exercicio = await Exercicio.findOrFail(params.id);
			await exercicio.load('imagens', builder => {
				builder.select(['id', 'caminho']);
			});
			return response.status(200).json(exercicio);
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}

	async store({ request, response }) {
		try {
			const data = request.only(['nome', 'descricao', 'agp_muscular']);
			const exercicio = await Exercicio.create(data);
			return response.status(201).json(exercicio);
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}

	async update({ request, params, response }) {
		try {
			const data = request.only(['nome', 'descricao', 'agp_muscular']);

			const exercicio = await Exercicio.findOrFail(params.id);

			exercicio.merge(data);
			await exercicio.save();
			return response.status(201).json(exercicio);
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}

	async destroy({ params, response }) {
		try {
			const exercicio = await Exercicio.findOrFail(params.id);
			await exercicio.delete();
			return response.status(200).send();
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}
}

module.exports = ExercicioController;
