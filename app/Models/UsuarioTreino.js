/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class UsuarioTreino extends Model {
	static get table() {
		return 'usuario_treino';
	}
}

module.exports = UsuarioTreino;
