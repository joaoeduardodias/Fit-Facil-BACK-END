const Helpers = use('Helpers');
const Exercicio = use('App/Models/Exercicio');

class ImageController {
	async show({ params, response }) {
		return response.download(Helpers.tmpPath(`uploads/${params.path}`));
	}

	async store({ params, request }) {
		const exe = await Exercicio.findOrFail(params.id);

		const images = request.file('image', {
			types: ['image'],
			size: '2mb',
		});

		await images.moveAll(Helpers.tmpPath('uploads'), file => ({
			name: `${new Date().getTime()}.${file.subtype}`,
		}));

		if (!images.movedAll()) {
			return images.errors();
		}

		await Promise.all(
			images
				.movedList()
				.map(image => exe.imagens().create({ path: image.fileName }))
		);
	}
}

module.exports = ImageController;
