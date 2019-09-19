'use strict';
const Programas = use('App/Models/Programa');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with programas
 */
class ProgramaController {
	/**
	 * Show a list of all programas.
	 * GET programas
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async indexganho({}) {
		const prog = Programas.query()
			.where(`fk_objetivo`, 1)
			.fetch();
		return prog;
	}

	async indexperda() {
		const prog = Programas.query()
			.where('fk_objetivo', 2)
			.fetch();
		return prog;
	}

	// nivel iniciante
	async indexganhon1({}) {
		const prog = Programas.query()
			.where(`fk_objetivo`, 1)
			.andWhere(`fk_nivel`, 1)
			.fetch();
		return prog;
	}

	async indexperdan1() {
		const prog = Programas.query()
			.where('fk_objetivo', 2)
			.andWhere(`fk_nivel`, 1)
			.fetch();
		return prog;
	}

	// nivel intermediario
	async indexganhon2({}) {
		const prog = Programas.query()
			.where(`fk_objetivo`, 1)
			.andWhere(`fk_nivel`, 2)
			.fetch();
		return prog;
	}

	async indexperdan2() {
		const prog = Programas.query()
			.where('fk_objetivo', 2)
			.andWhere(`fk_nivel`, 2)
			.fetch();
		return prog;
	}
	// nivel profissional

	async indexganhon3({}) {
		const prog = Programas.query()
			.where(`fk_objetivo`, 1)
			.andWhere(`fk_nivel`, 3)
			.fetch();
		return prog;
	}

	async indexperdan3() {
		const prog = Programas.query()
			.where('fk_objetivo', 2)
			.andWhere(`fk_nivel`, 3)
			.fetch();
		return prog;
	}

	/**
	 * Create/save a new programa.
	 * POST programas
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async store({ request }) {
		const data = request.only([
			'descricao',
			'nome',
			'fk_objetivo',
			'fk_nivel',
		]);
		const prog = await Programas.create(data);
		return prog;
	}

	/**
	 * Display a single programa.
	 * GET programas/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show({ params }) {
		const prog = Programas.finOrFail(params.nome);
		return prog;
	}

	/**
	 * Update programa details.
	 * PUT or PATCH programas/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update({ params, request }) {
		const prog = Programas.finOrFail(params.id);
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

	/**
	 * Delete a programa with id.
	 * DELETE programas/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async destroy({ params }) {
		const prog = Programas.finOrFail(params.id);
		prog.delete();
	}
}

module.exports = ProgramaController;
