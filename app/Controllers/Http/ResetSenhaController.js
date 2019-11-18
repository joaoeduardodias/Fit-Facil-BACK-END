const { parseISO, isBefore, subHours } = require('date-fns');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Token = use('App/Models/Token');

class ResetSenhaController {
	async store({ request, response }) {
		const { token, senha } = request.only(['token', 'senha']);
		try {
			const usertoken = await Token.findOrFail('token', token);
			if (
				isBefore(parseISO(usertoken.created_at), subHours(new Date(), 2))
			) {
				return response.status(400).json({
					error:
						' O tempo para recuperação de senha expirou, por favor realize uma nova solicitação',
				});
			}

			const usuario = await usertoken.usuario().fetch();

			usuario.senha = senha;
			await usuario.save();
		} catch (error) {
			return response.status(400).json({
				error:
					'ERRO, Por favor faça uma nova solicitação de recuperação de senha',
			});
		}
	}
}

module.exports = ResetSenhaController;
