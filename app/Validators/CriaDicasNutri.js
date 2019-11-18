class CriaDicasNutri {
	get rules() {
		return {
			titulo: 'required | max: 50',
			descricao: 'required | max:150',
		};
	}
}

module.exports = CriaDicasNutri;
