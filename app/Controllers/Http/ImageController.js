const Helpers = use('Helpers');
const Exercicio = use('App/Models/Exercicio');
const Imagem = use('App/Models/Imagem');

class ImageController {
	async show({ params, response }) {
		return response.download(Helpers.tmpPath(`uploads/${params.path}`));
	}

	async store({ params, request, response }) {
		const exe = await Exercicio.findOrFail(params.id);

		const images = request.file('image', {
			types: ['image'],
			size: '4mb',
			extnames: ['png', 'jpg'],
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
		return response.status(201).send();
	}

	async destroy({ params, response }) {
		const img = await Imagem.findOrFail(params.id);
		img.delete();
		return response.status(200).send();
	}
}

module.exports = ImageController;
