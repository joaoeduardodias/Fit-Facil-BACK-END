const User = use('App/Models/User');

class AuthController {
	async register({ request, response }) {
		const data = request.only([
			'username',
			'email',
			'password',
			'sexo',
			'administrador',
		]);
		const user = await User.create(data);
		return response.status(201).json(user);
	}

	async autenticate({ request, auth, response }) {
		const { email, password } = request.all();

		const token = await auth.attempt(email, password);

		return response.status(200).json(token);
	}

	async destroy({ params, response }) {
		const user = await User.findOrFail(params.id);
		user.delete();
		return response.status(200).send();
	}
}

module.exports = AuthController;
