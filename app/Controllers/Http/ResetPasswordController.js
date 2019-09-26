const { parseISO, isBefore, subHours } = require('date-fns');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Token = use('App/Models/Token');

class ResetPasswordController {
	async store({ request, response }) {
		const { token, password } = request.only(['token', 'password']);

		const usertoken = await Token.findByOrFail('token', token);

		if (isBefore(parseISO(usertoken.created_at), subHours(new Date(), 2))) {
			return response.status(400).json({
				error:
					' O tempo para recuperação de senha expirou, por favor realize uma nova solicitação',
			});
		}

		const user = await usertoken.user().fetch();

		user.password = password;
		await user.save();
	}
}

module.exports = ResetPasswordController;
