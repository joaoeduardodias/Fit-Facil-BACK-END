class register {
	get validateAll() {
		return true;
	}

	get rules() {
		return {
			nome: 'required',
			email: 'email|required',
			senha: 'required | min:8',
		};
	}
}

module.exports = register;
