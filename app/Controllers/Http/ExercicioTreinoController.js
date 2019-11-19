/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Exe_treino = use('App/Models/TreinoExercicio');
const Treino = use('App/Models/Treino');
const Exercicio = use('App/Models/Exercicio');

class ExercicioTreinoController {
	async store({ response, params, request }) {
		try {
			const { id } = await Exercicio.findOrFail(params.id);
			const treino = await Treino.findOrFail(params.treino_id);
			await treino.treino_exercicios().attach(id);

			const data = request.only(['repeticoes', 'descanso']);

			const exe = await Exe_treino.query()
				.where('treino_id', treino.id)
				.andWhere('exercicio_id', id)
				.first();
			await exe.merge(data);
			await exe.save();

			return response.status(201).send();
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}
	// funcao que exibe os exercicios de um treino

	async show({ params, response }) {
		try {
			const treino = await Treino.findOrFail(params.id);
			await treino.load('treino_exercicios', builder => {
				builder.select(['id', 'nome', 'agp_muscular']);
			});

			return response.status(200).json(treino);
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}

	async destroy({ params, response }) {
		try {
			const { id } = await Exercicio.findOrFail(params.id);
			const treino = await Treino.findOrFail(params.treino_id);
			await treino.treino_exercicios().detach(id);
			return response.status(200).send();
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}
}

module.exports = ExercicioTreinoController;
