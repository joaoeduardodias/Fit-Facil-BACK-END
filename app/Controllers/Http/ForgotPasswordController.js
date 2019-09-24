'use strict';

const User = use('App/Models/User');
const Mail = use('Mail');
const crypto = require('crypto');
const moment = require('moment');

class ForgotPasswordController {
	/**
	 * SOLICITA A ALTERAÇÃO DE SENHA
	 */
	async store({ request, response }) {
		try {
			const email = request.input('email');

			/**
			 * @description: findByOrFail tenta encontrar na coluna email o valor request.email.
			 * caso não encontre, retorna um erro, caindo no catch(err)
			 */
			const user = await User.findByOrFail('email', email);

			user.token = crypto.randomBytes(10).toString('hex');
			user.token_created_at = new Date();

			await user.save();

			// Envia e-mail para reset de senha
			await Mail.send(
				['emails.forgot_password'],
				{
					email,
					token: user.token,
					link: `${request.input('request_url')}?token${user.token}`,
				},
				message => {
					message
						.to(user.email)
						.from('maiconrs95@gmail.com', 'Maicon | aaa')
						.subject('Recuperação de senha');
				},
			);
		} catch (err) {
			return response.status(err.status).send({
				error: {
					message: 'Algo deu errado. Verifique o e-mail e tente novamente',
				},
			});
		}
	}
}
