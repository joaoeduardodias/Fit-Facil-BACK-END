class Signin {
	get validateAll() {
		return true;
	}

	get rules() {
		return {
			email: 'email|required',
			senha: 'required',
		};
	}
}

module.exports = Signin;
