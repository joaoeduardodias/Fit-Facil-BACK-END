'use strict';

const Mail = use('Mail');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const User = use('App/Models/User');

class ForgotPasswordController {
	async Store({ request }) {
		const email = request.input('email');
		const user = await User.findByOrFail('email', email);

		await Mail.send(
			'emails.forgotpassword',
			{ username: user.username },
			message => {
				message
					.to(user.email)
					.from('fitfacil@gmail.com.br') // caso alguem responda caira nesse email - CRIAR O EMAIL
					.subject(' FIT-FACIL-Recuperação de senha ');
			},
		);
	}
}

module.exports = ForgotPasswordController;
