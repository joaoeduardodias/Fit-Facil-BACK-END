const Usuario = use('App/Models/Usuario');

class UsuarioController {
	async register({ request, response }) {
		const data = request.only(['nome', 'email', 'senha', 'sexo', 'adm']);
		const usuario = await Usuario.create(data);
		return response.status(201).json(usuario);
	}

	async autenticate({ request, auth, response }) {
		const { email, senha } = request.all();

		const token = await auth.attempt(email, senha);

		return response.status(200).json(token);
	}

	async verificaadm({ auth }) {
		const usuario = await auth.getUser();
		const json = usuario.toJSON();
		const { adm } = json;
		if (adm === 1) {
			return true;
		}
		return false;
	}

	async destroy({ params, response }) {
		const usuario = await Usuario.findOrFail(params.id);
		usuario.delete();
		return response.status(200).send();
	}
}

module.exports = UsuarioController;
