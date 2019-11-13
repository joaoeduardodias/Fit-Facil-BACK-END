const { parseISO, isBefore, subHours } = require('date-fns');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Token = use('App/Models/Token');

class ResetSenhaController {
	async store({ request, response }) {
		const { token, senha } = request.only(['token', 'senha']);

		const usertoken = await Token.findByOrFail('token', token);

		if (isBefore(parseISO(usertoken.created_at), subHours(new Date(), 2))) {
			return response.status(400).json({
				error:
					' O tempo para recuperação de senha expirou, por favor realize uma nova solicitação',
			});
		}

		const usuario = await usertoken.usuario().fetch();
		console.log(usuario);

		usuario.senha = senha;
		await usuario.save();
	}
}

module.exports = ResetSenhaController;