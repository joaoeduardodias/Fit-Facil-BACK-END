/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class DicasNutri extends Model {
	static get table() {
		return 'dicas_nutri';
	}

	imagens() {
		return this.hasMany('App/Models/Imagem');
	}
}

module.exports = DicasNutri;
