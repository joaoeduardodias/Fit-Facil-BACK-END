const Meustreinos = use('App/Models/UserPrograma');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Treino = use('App/Models/Programa');

class UsersProgramaController {
	async store({ response, params, auth }) {
		const { id } = await Treino.find(params.id);

		await Meustreinos.create({
			fk_users: auth.user.id,
			fk_programas: id,
		});

		return response.status(201).send();
	}

	async index() {
		const mydrills = Meustreinos.all();
		return mydrills;
	}

	// DEPOIS DE 15 DIAS ENVIAR UMA NOTIFICACAO PARA O USUARIO DAR UMA NOTA E UM COMENTARIO AO TREINO
	/* async update({ request }) {
		const data = request.only(['nota', 'comentario']);
	} */
}

module.exports = UsersProgramaController;
