/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Env = use('Env');

const Model = use('Model');

class Imagem extends Model {
	static get table() {
		return 'imagens';
	}

	static get computed() {
		return ['url'];
	}

	getUrl({ caminho }) {
		return `${Env.get('APP_URL')}/imagens/${caminho}`;
	}

	exercicio() {
		return this.belongsTo('App/Models/Exercicio');
	}

	dicas_nutri() {
		return this.belongsTo('App/Models/DicasNutri');
	}
}

module.exports = Imagem;
