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

	getUrl({ path }) {
		return `${Env.get('APP_URL')}/images/${path}`;
	}

	exercicio() {
		return this.belongsTo('App/Models/Exercicio');
	}
}

module.exports = Imagem;
