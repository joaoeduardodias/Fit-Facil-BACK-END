'use strict';
const User = use('App/Models/User');

class AuthController {
	async register({ request }) {
		const data = request.only([
			'username',
			'email',
			'password',
			'sexo',
			'administrador',
		]);
		const user = User.create(data);
		return user;
	}
	async autenticate({ request, auth }) {
		const { email, password } = request.all();
		const token = await auth.attempt(email, password);
		return token;
	}
}

module.exports = AuthController;
