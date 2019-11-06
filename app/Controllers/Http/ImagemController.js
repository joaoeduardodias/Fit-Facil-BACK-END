const Helpers = use('Helpers');
const Exercicio = use('App/Models/Exercicio');
const Nutri = use('App/Models/DicasNutri');
const Imagem = use('App/Models/Imagem');

class ImagemController {
	async show({ params, response }) {
		return response.download(Helpers.tmpPath(`uploads/${params.caminho}`));
	}

	async store({ params, request, response }) {
		const exe = await Exercicio.findOrFail(params.id);

		const imagens = request.file('image', {
			types: ['image'],
			size: '4mb',
			extnames: ['png', 'jpg'],
		});

		await imagens.moveAll(Helpers.tmpPath('uploads'), file => ({
			name: `${new Date().getTime()}.${file.subtype}`,
		}));

		if (!imagens.movedAll()) {
			return imagens.errors();
		}

		await Promise.all(
			imagens
				.movedList()
				.map(image => exe.imagens().create({ caminho: image.fileName }))
		);
		return response.status(201).send();
	}

	async store2({ params, request, response }) {
		const nutri = await Nutri.findOrFail(params.id);

		const imagens = request.file('image', {
			types: ['image'],
			size: '4mb',
			extnames: ['png', 'jpg'],
		});

		await imagens.moveAll(Helpers.tmpPath('uploads'), file => ({
			name: `${new Date().getTime()}.${file.subtype}`,
		}));

		if (!imagens.movedAll()) {
			return imagens.errors();
		}

		await Promise.all(
			imagens
				.movedList()
				.map(image => nutri.imagens().create({ caminho: image.fileName }))
		);
		return response.status(201).send();
	}

	async destroy({ params, response }) {
		const imagem = await Imagem.findOrFail(params.id);
		imagem.delete();
		return response.status(200).send();
	}
}

module.exports = ImagemController;
