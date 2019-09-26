class Signin {
	get rules() {
		return {
			email: 'email|required',
			password: 'required',
		};
	}
}

module.exports = Signin;
