class register {
	get rules() {
		return {
			username: 'required',
			email: 'email|required',
			password: 'required | min:8',
		};
	}
}

module.exports = register;
