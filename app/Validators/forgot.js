class forgot {
	get validateAll() {
		return true;
	}

	get rules() {
		return {
			email: 'email|required',
		};
	}
}

module.exports = forgot;
