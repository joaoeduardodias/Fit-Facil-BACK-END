class AtualizaExercicio {
	get rules() {
		return {
			nome: 'required|max:50',
			descricao: 'required',
			agp_muscular: 'required',
		};
	}
}

module.exports = AtualizaExercicio;
