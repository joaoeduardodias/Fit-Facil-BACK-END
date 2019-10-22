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

	async autenticate({ request, auth, response }) {
		const { email, password } = request.all();

		const token = await auth.attempt(email, password);

		const user = await User.findOrFail({ email });

		console.log(user);

		token.user = user;
		// token.user = administrador;
		// console.log(user);
		// console.log(administrador);

		return response.status(200).json(token);
	}
}

module.exports = AuthController;
