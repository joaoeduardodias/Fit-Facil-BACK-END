const Programas = use('App/Models/Programa');
const Objetivo = use('App/Models/Objetivo');
const Nivel = use('App/Models/Nivel');

class ProgramaController {
	async index({ response }) {
		const prog = Programas.all();
		return response.status(200).json(prog);
	}

	async indexperda({ response }) {
		const obj = await Objetivo.query()
			.where('objetivo', 'perda')
			.fetch();
		const [{ id }] = obj.toJSON();
		const prog = await Programas.query()
			.where(`fk_objetivo`, id)
			.fetch();
		return response.status(200).json(prog);
	}

	async indexganho({ response }) {
		const obj = await Objetivo.query()
			.where('objetivo', 'ganho')
			.fetch();
		const [{ id }] = obj.toJSON();
		const prog = await Programas.query()
			.where('fk_objetivo', id)
			.fetch();

		return response.status(200).json(prog);
	}

	// nivel iniciante
	async indexganhon1({ response }) {
		const nivel = await Nivel.query()
			.where('nivel', 'iniciante')
			.fetch();
		const obj = await Objetivo.query()
			.where('objetivo', 'ganho')
			.fetch();
		const [{ id: obj_id }] = obj.toJSON();
		const [{ id: nivel_id }] = nivel.toJSON();

		const prog = await Programas.query()
			.where(`fk_objetivo`, obj_id)
			.andWhere(`fk_nivel`, nivel_id)
			.fetch();

		return response.status(200).json(prog);
	}

	async indexperdan1({ response }) {
		const nivel = await Nivel.query()
			.where('nivel', 'iniciante')
			.fetch();
		const obj = await Objetivo.query()
			.where('objetivo', 'perda')
			.fetch();
		const [{ id: obj_id }] = obj.toJSON();
		const [{ id: nivel_id }] = nivel.toJSON();

		const prog = await Programas.query()
			.where('fk_objetivo', obj_id)
			.andWhere(`fk_nivel`, nivel_id)
			.fetch();
		return response.status(200).json(prog);
	}

	// nivel intermediario
	async indexganhon2({ response }) {
		const nivel = await Nivel.query()
			.where('nivel', 'intermediario')
			.fetch();
		const obj = await Objetivo.query()
			.where('objetivo', 'ganho')
			.fetch();
		const [{ id: obj_id }] = obj.toJSON();
		const [{ id: nivel_id }] = nivel.toJSON();

		const prog = await Programas.query()
			.where(`fk_objetivo`, obj_id)
			.andWhere(`fk_nivel`, nivel_id)
			.fetch();
		return response.status(200).json(prog);
	}

	async indexperdan2({ response }) {
		const nivel = await Nivel.query()
			.where('nivel', 'intermediario')
			.fetch();
		const obj = await Objetivo.query()
			.where('objetivo', 'perda')
			.fetch();
		const [{ id: obj_id }] = obj.toJSON();
		const [{ id: nivel_id }] = nivel.toJSON();

		const prog = await Programas.query()
			.where('fk_objetivo', obj_id)
			.andWhere(`fk_nivel`, nivel_id)
			.fetch();
		return response.status(200).json(prog);
	}
	// nivel profissional

	async indexganhon3({ response }) {
		const nivel = await Nivel.query()
			.where('nivel', 'profissional')
			.fetch();
		const obj = await Objetivo.query()
			.where('objetivo', 'ganho')
			.fetch();
		const [{ id: obj_id }] = obj.toJSON();
		const [{ id: nivel_id }] = nivel.toJSON();

		const prog = await Programas.query()
			.where('fk_objetivo', obj_id)
			.andWhere(`fk_nivel`, nivel_id)
			.fetch();
		return response.status(200).json(prog);
	}

	async indexperdan3({ response }) {
		const nivel = await Nivel.query()
			.where('nivel', 'profissional')
			.fetch();
		const obj = await Objetivo.query()
			.where('objetivo', 'perda')
			.fetch();
		const [{ id: obj_id }] = obj.toJSON();
		const [{ id: nivel_id }] = nivel.toJSON();

		const prog = await Programas.query()
			.where('fk_objetivo', obj_id)
			.andWhere(`fk_nivel`, nivel_id)
			.fetch();
		return response.status(200).json(prog);
	}

	async store({ request, response }) {
		const data = request.only([
			'nome',
			'descricao',
			'fk_objetivo',
			'fk_nivel',
		]);
		const prog = await Programas.create(data);
		return response.status(201).json(prog);
	}

	async update({ params, request, response }) {
		const prog = await Programas.findOrFail(params.id);
		const data = request.only([
			'nome',
			'descricao',
			'fk_objetivo',
			'fk_nivel',
		]);
		prog.merge(data);
		await prog.save();
		return response.status(200).json(prog);
	}

	async destroy({ params, response }) {
		const prog = await Programas.findOrFail(params.id);
		prog.delete();
		return response.status(200).send();
	}
}

module.exports = ProgramaController;
