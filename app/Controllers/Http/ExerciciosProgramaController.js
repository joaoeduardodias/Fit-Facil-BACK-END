/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Exe_treino = use('App/Models/ExercicioPrograma');
const Treino = use('App/Models/Programa');
const Exercicio = use('App/Models/Exercicio');

class ExercicioProgramaController {
	async store({ response, params, request }) {
		const { id } = await Exercicio.findOrFail(params.id);
		const treino = await Treino.findOrFail(params.treino_id);
		await treino.exercicios_programas().attach(id);

		const data = request.only(['repeticoes', 'descanso']);

		const exe = await Exe_treino.query()
			.where('programa_id', treino.id)
			.andWhere('exercicio_id', id)
			.first();
		await exe.merge(data);
		await exe.save();

		return response.status(201).send();
	}

	async show({ params, response }) {
		const treino = await Treino.findOrFail(params.id);

		await treino.load('exercicios_programas', builder => {
			builder.select(['id', 'exercicio', 'agp_muscular']);
		});

		return response.status(200).json(treino);
	}

	async destroy({ params, response }) {
		const { id } = await Exercicio.findOrFail(params.id);
		const treino = await Treino.findOrFail(params.treino_id);
		await treino.exercicios_programas().detach(id);
		return response.status(200).send();
	}
}

module.exports = ExercicioProgramaController;
