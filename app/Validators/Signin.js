class Signin {
	get validateAll() {
		return true;
	}

	get rules() {
		return {
			email: 'email|required',
			password: 'required',
		};
	}
}

module.exports = Signin;
