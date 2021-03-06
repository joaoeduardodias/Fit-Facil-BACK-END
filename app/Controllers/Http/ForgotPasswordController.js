const { randomBytes } = require('crypto');
const { promisify } = require('util');

const Mail = use('Mail');
const Env = use('Env');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const User = use('App/Models/Usuario');

class ForgotPasswordController {
	async store({ request }) {
		const email = request.input('email');

		const user = await User.findByOrFail('email', email);
		const random = await promisify(randomBytes)(24);

		const token = random.toString('hex');
		await user.tokens().create({
			token,
			type: 'forgot_password',
		});

		const resetpassword = `${Env.get('FRONT_URL')}/reset?token=${token}`;

		await Mail.send(
			'emails.forgotpassword',
			{ name: user.username, resetpassword },
			message => {
				message
					.to(user.email)
					.from('<fitfacil@gmail.com')
					.subject('FIT FACIL-Recuperação de senha ');
			}
		);
	}
}

module.exports = ForgotPasswordController;
