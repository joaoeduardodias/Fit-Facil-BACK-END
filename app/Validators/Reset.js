class forgot {
	get rules() {
		return {
			token: 'required',
			password: 'required|confirmed| min:8',
		};
	}
}

module.exports = forgot;
