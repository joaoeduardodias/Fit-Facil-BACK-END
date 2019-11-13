class Cadastro {
	get rules() {
		return {
			nome: 'required|max:80',
			email: 'email|required| unique:usuarios',
			senha: 'required|min:6|max:60',
		};
	}
}

module.exports = Cadastro;
