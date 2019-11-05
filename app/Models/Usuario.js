/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash');

class Usuario extends Model {
	static get table() {
		return 'usuarios';
	}

	static boot() {
		super.boot();

		this.addHook('beforeSave', async userInstance => {
			if (userInstance.dirty.senha) {
				userInstance.senha = await Hash.make(userInstance.senha);
			}
		});
	}

	/**
	 * A relationship on tokens is required for auth to
	 * work. Since features like `refreshTokens` or
	 * `rememberToken` will be saved inside the
	 * tokens table.
	 *
	 * @method tokens
	 *
	 * @return {Object}
	 */
	tokens() {
		return this.hasMany('App/Models/Token');
	}

	medidas() {
		return this.hasMany('App/Models/Medida');
	}

	meustreinos() {
		return this.belongsToMany('App/Models/Treino')
			.pivotTable('usuario_treino')
			.pivotModel('App/Models/UsuarioTreino');
	}
}

module.exports = Usuario;
