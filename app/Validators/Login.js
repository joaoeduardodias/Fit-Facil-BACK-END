class Login {
	get rules() {
		return {
			email: 'email|required',
			senha: 'required',
		};
	}
}

module.exports = Login;
