const Programas = use('App/Models/Programa');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

class ProgramaController {
	async index({}) {
		const prog = Programas.all();
		return prog;
	}

	async indexperda({}) {
		const prog = Programas.query()
			.where(`fk_objetivo`, 1)
			.fetch();
		return prog;
	}

	async indexganho() {
		const prog = Programas.query()
			.where('fk_objetivo', 2)
			.fetch();
		return prog;
	}

	// nivel iniciante
	async indexganhon1({}) {
		const prog = Programas.query()
			.where(`fk_objetivo`, 2)
			.andWhere(`fk_nivel`, 1)
			.fetch();
		return prog;
	}

	async indexperdan1() {
		const prog = Programas.query()
			.where('fk_objetivo', 1)
			.andWhere(`fk_nivel`, 1)
			.fetch();
		return prog;
	}

	// nivel intermediario
	async indexganhon2({}) {
		const prog = Programas.query()
			.where(`fk_objetivo`, 2)
			.andWhere(`fk_nivel`, 2)
			.fetch();
		return prog;
	}

	async indexperdan2() {
		const prog = Programas.query()
			.where('fk_objetivo', 1)
			.andWhere(`fk_nivel`, 2)
			.fetch();
		return prog;
	}
	// nivel profissional

	async indexganhon3({}) {
		const prog = Programas.query()
			.where(`fk_objetivo`, 2)
			.andWhere(`fk_nivel`, 3)
			.fetch();
		return prog;
	}

	async indexperdan3() {
		const prog = Programas.query()
			.where('fk_objetivo', 1)
			.andWhere(`fk_nivel`, 3)
			.fetch();
		return prog;
	}

	async store({ request }) {
		const data = request.only([
			'nome',
			'descricao',
			'fk_objetivo',
			'fk_nivel',
		]);
		const prog = await Programas.create(data);
		return prog;
	}

	async update({ params, request }) {
		const prog = await Programas.findOrFail(params.id);
		const data = request.only([
			'nome',
			'descricao',
			'fk_objetivo',
			'fk_nivel',
		]);
		prog.merge(data);
		await prog.save();
		return prog;
	}

	async destroy({ params }) {
		const prog = await Programas.findOrFail(params.id);
		prog.delete();
	}
}

module.exports = ProgramaController;
