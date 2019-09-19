'use strict';

const { randomBytes } = require('crypto');
const { promisify } = require('util');
const Mail = use('Mail');
const Env = use('Env');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const User = use('App/Models/User');

class ForgotPasswordController {
	async Store({ request }) {
		const email = request.input('email');
		const user = await User.findByOrFail('email', email);
		const random = await promisify(randomBytes)(24);

		const token = random.toString('hex');
		await user.tokens().create({
			token,
			type: 'forgotpassword',
		});

		const resetpassword = `${Env.get('FRONT_URL')}/reset?token=${token}`;

		await Mail.send(
			'emails.forgotpassword',
			{ username: user.username, resetpassword },
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
