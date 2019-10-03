/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Medida = use('App/Models/Medida');

/**
 * Resourceful controller for interacting with medidas
 */
class MedidaController {
	/**
	 * Show a list of all medidas.
	 * GET medidas
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index() {
		const medida = Medida.all();
		return medida;
	}

	async store({ request, auth, response }) {
		const data = request.only([
			'peso',
			'braco',
			'peito',
			'ombro',
			'cintura',
			'perna',
			'panturrilha',
		]);

		const medida = await Medida.create({ fk_user: auth.user.id, ...data });
		return response.status(201).json(medida);
	}

	async destroy({ params }) {
		const medida = await Medida.findOrFail(params.id);
		medida.delete();
	}
}

module.exports = MedidaController;
