class register {
	get validateAll() {
		return true;
	}

	get rules() {
		return {
			username: 'required',
			email: 'email|required',
			password: 'required | min:8',
		};
	}
}

module.exports = register;
