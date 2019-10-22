/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Exercicio = use('App/Models/Exercicio');

class ExercicioController {
	/**
	 * Show a list of all exercicios.
	 * GET exercicios
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */

	async index() {
		const exercicio = Exercicio.all();
		return exercicio;
	}

	async store({ request }) {
		const data = request.only(['exercicio', 'descricao', 'agp_muscular']);
		const exercicio = await Exercicio.create(data);
		return exercicio;
	}

	async show({ params }) {
		const exercicio = await Exercicio.findOrFail(params.id);
		return exercicio;
	}

	async update({ params, request }) {
		const data = request.only(['exercicio', 'descricao', 'agp_muscular']);
		const exercicio = await Exercicio.findOrFail(params.id);

		exercicio.merge(data);
		await exercicio.save();
		return exercicio;
	}

	/**
	 * Delete a exercicio with id.
	 * DELETE exercicios/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy({ params }) {
		const exercicio = Exercicio.findOrFail(params.id);
		await exercicio.delete();
	}
}

module.exports = ExercicioController;
