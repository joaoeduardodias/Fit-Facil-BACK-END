class Reset {
	get rules() {
		return {
			token: 'required',
			senha: 'required| min: 6| max: 60|confirmed',
		};
	}
}

module.exports = Reset;
