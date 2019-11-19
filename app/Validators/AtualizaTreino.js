const { rule } = use('Validator');

class AtualizaTreino {
	get rules() {
		return {
			nome: [rule('required'), rule('max', '80')],
			objetivo_id: [rule('required'), rule('exists', ['objetivos', 'id'])],
			nivel_id: [rule('required'), rule('exists', ['nivel', 'id'])],
		};
	}
}

module.exports = AtualizaTreino;
