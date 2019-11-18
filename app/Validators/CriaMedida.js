const { rule } = use('Validator');

class CriaMedida {
	get rules() {
		return {
			usuario_id: [rule('exists', ['usuarios', 'id'])],
		};
	}
}

module.exports = CriaMedida;
