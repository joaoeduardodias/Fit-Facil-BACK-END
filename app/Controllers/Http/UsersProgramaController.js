/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

class UsersProgramaController {
	async mydrills({ response, params, auth }) {
		const user = await auth.getUser();
		const { fk_users } = params;
		await user.mydrills().attach(fk_users);
		return response.status(201).send();
	}
}

module.exports = UsersProgramaController;
