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
			.where('usuario_id', id)
			.fetch();
		return response.status(200).json(medida);
	}

	async store({ request, auth, response }) {
		try {
			const data = request.only([
				'peso',
				'braco',
				'peito',
				'ombro',
				'cintura',
				'perna',
				'panturrilha',
			]);

			const medida = await Medida.create({
				usuario_id: auth.user.id,
				...data,
			});
			return response.status(201).json(medida);
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}

	async destroy({ params, response }) {
		try {
			const medida = await Medida.findOrFail(params.id);
			await medida.delete();
			return response.status(200).send();
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}
}

module.exports = MedidaController;
