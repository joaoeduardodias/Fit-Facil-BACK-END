class CriaExercicio {
	get rules() {
		return {
			nome: 'required|max:50',
			descricao: 'required',
			agp_muscular: 'required|max:50',
		};
	}
}

module.exports = CriaExercicio;
