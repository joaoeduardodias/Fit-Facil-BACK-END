const { rule } = use('Validator');

class Esqueciminhasenha {
	get rules() {
		return {
			email: [
				rule('email'),
				rule('required'),
				rule('exists', ['usuarios', 'email']),
			],
		};
	}
}

module.exports = Esqueciminhasenha;
