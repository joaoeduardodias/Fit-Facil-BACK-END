class Imagens {
	get rules() {
		return {
			images: 'file|file_ext:png,jpg|file_size:2mb|file_types:image',
		};
	}
}

module.exports = Imagens;
