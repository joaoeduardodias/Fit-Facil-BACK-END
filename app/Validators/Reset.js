class forgot {
	get validateAll() {
		return true;
	}

	get rules() {
		return {
			token: 'required',
			password: 'required|confirmed| min:8',
		};
	}
}

module.exports = forgot;
