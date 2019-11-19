const Treino = use('App/Models/Treino');
const Objetivo = use('App/Models/Objetivo');
const Nivel = use('App/Models/Nivel');

class TreinoController {
	async index({ response }) {
		const treinos = Treino.query()
			.select([
				'id',
				'nome',
				'repeticoes',
				'descanso',
				'objetivo_id',
				'nivel_id',
				'created_at',
			])
			.fetch();
		return response.status(200).json(treinos);
	}

	async indexperda({ response }) {
		const objetivo = await Objetivo.query()
			.where('objetivo', 'perda')
			.fetch();
		const [{ id }] = objetivo.toJSON();
		const treino = await Treino.query()
			.where(`objetivo_id`, id)
			.fetch();
		return response.status(200).json(treino);
	}

	async indexganho({ response }) {
		const objetivo = await Objetivo.query()
			.where('objetivo', 'ganho')
			.fetch();
		const [{ id }] = objetivo.toJSON();
		const treino = await Treino.query()
			.where('objetivo_id', id)
			.fetch();

		return response.status(200).json(treino);
	}

	// nivel iniciante
	async indexganhon1({ response }) {
		const nivel = await Nivel.query()
			.where('nivel', 'iniciante')
			.fetch();
		const objetivo = await Objetivo.query()
			.where('objetivo', 'ganho')
			.fetch();
		const [{ id: obj_id }] = objetivo.toJSON();
		const [{ id: nivel_id }] = nivel.toJSON();

		const treino = await Treino.query()
			.where(`objetivo_id`, obj_id)
			.andWhere(`nivel_id`, nivel_id)
			.fetch();

		return response.status(200).json(treino);
	}

	async indexperdan1({ response }) {
		const nivel = await Nivel.query()
			.where('nivel', 'iniciante')
			.fetch();
		const objetivo = await Objetivo.query()
			.where('objetivo', 'perda')
			.fetch();
		const [{ id: obj_id }] = objetivo.toJSON();
		const [{ id: nivel_id }] = nivel.toJSON();

		const treino = await Treino.query()
			.where('objetivo_id', obj_id)
			.andWhere(`nivel_id`, nivel_id)
			.fetch();
		return response.status(200).json(treino);
	}

	// nivel intermediario
	async indexganhon2({ response }) {
		const nivel = await Nivel.query()
			.where('nivel', 'intermediario')
			.fetch();
		const objetivo = await Objetivo.query()
			.where('objetivo', 'ganho')
			.fetch();
		const [{ id: obj_id }] = objetivo.toJSON();
		const [{ id: nivel_id }] = nivel.toJSON();

		const treino = await Treino.query()
			.where(`objetivo_id`, obj_id)
			.andWhere(`nivel_id`, nivel_id)
			.fetch();
		return response.status(200).json(treino);
	}

	async indexperdan2({ response }) {
		const nivel = await Nivel.query()
			.where('nivel', 'intermediario')
			.fetch();
		const objetivo = await Objetivo.query()
			.where('objetivo', 'perda')
			.fetch();
		const [{ id: obj_id }] = objetivo.toJSON();
		const [{ id: nivel_id }] = nivel.toJSON();

		const treino = await Treino.query()
			.where('objetivo_id', obj_id)
			.andWhere(`nivel_id`, nivel_id)
			.fetch();
		return response.status(200).json(treino);
	}
	// nivel profissional

	async indexganhon3({ response }) {
		const nivel = await Nivel.query()
			.where('nivel', 'profissional')
			.fetch();
		const objetivo = await Objetivo.query()
			.where('objetivo', 'ganho')
			.fetch();
		const [{ id: obj_id }] = objetivo.toJSON();
		const [{ id: nivel_id }] = nivel.toJSON();

		const treino = await Treino.query()
			.where('objetivo_id', obj_id)
			.andWhere(`nivel_id`, nivel_id)
			.fetch();
		return response.status(200).json(treino);
	}

	async indexperdan3({ response }) {
		const nivel = await Nivel.query()
			.where('nivel', 'profissional')
			.fetch();
		const objetivo = await Objetivo.query()
			.where('objetivo', 'perda')
			.fetch();
		const [{ id: obj_id }] = objetivo.toJSON();
		const [{ id: nivel_id }] = nivel.toJSON();

		const treino = await Treino.query()
			.where('objetivo_id', obj_id)
			.andWhere(`nivel_id`, nivel_id)
			.fetch();
		return response.status(200).json(treino);
	}

	async store({ request, response }) {
		try {
			const data = request.only([
				'nome',
				'descricao',
				'descanso',
				'repeticoes',
				'objetivo_id',
				'nivel_id',
			]);
			const prog = await Treino.create(data);
			return response.status(201).json(prog);
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}

	async update({ params, request, response }) {
		try {
			const treino = await Treino.findOrFail(params.id);
			const data = request.only([
				'nome',
				'descricao',
				'descanso',
				'repeticoes',
				'objetivo_id',
				'nivel_id',
			]);
			treino.merge(data);
			await treino.save();
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
			const treino = await Treino.findOrFail(params.id);
			treino.delete();
			return response.status(200).send();
		} catch (error) {
			return response.status(400).json({
				error:
					'Algo deu errado, por favor tente novamente, ou entre em contato com o suporte !',
			});
		}
	}
}

module.exports = TreinoController;
