const { rule } = use('Validator');

class CriaTreino {
	get rules() {
		return {
			nome: [rule('required'), rule('max', '80')],
			repeticoes: [rule('required')],
			descanso: [rule('required')],
			objetivo_id: [rule('required'), rule('exists', ['objetivos', 'id'])],
			nivel_id: [rule('required'), rule('exists', ['nivel', 'id'])],
		};
	}
}

module.exports = CriaTreino;
