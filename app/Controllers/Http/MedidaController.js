/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Medida = use('App/Models/Medida');

class MedidaController {
	async index({ auth, response }) {
		const { id } = await auth.getUser();

		const medida = await Medida.query()
			.select([
				'id',
				'peso',
				'braco',
				'peito',
				'ombro',
				'cintura',
				'perna',
				'panturrilha',
				'created_at',
			])
			.where('fk_user', id)
			.fetch();
		return response.status(200).json(medida);
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

	async destroy({ params, response }) {
		const medida = await Medida.findOrFail(params.id);
		await medida.delete();
		return response.status(200).send();
	}
}

module.exports = MedidaController;
