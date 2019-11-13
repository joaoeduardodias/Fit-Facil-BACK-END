/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

// usuario
Route.group(() => {
	Route.post('/cadastro', 'UsuarioController.register').validator('Cadastro');
	Route.post('/login', 'UsuarioController.autenticate').validator('Login');
	Route.get('/verificaadm', 'UsuarioController.verificaadm').middleware(
		'auth'
	);
	Route.post('/esqueciminhasenha', 'ForgotPasswordController.store').validator(
		'Esqueciminhasenha'
	);
	Route.post('/reset', 'ResetSenhaController.store').validator('Reset');
	Route.delete('/usuario/:id', 'UsuarioController.destroy');
});

// objetivo e nivel
Route.group(() => {
	Route.get('/nivel', 'NivelController.index');
	Route.get('/objetivo', 'ObjetivoController.index');
	// crud
	Route.post('/nivel', 'NivelController.store');
	Route.post('/objetivo', 'ObjetivoController.store');
	Route.delete('/nivel/:id', 'NivelController.destroy');
	Route.delete('/objetivo/:id', 'ObjetivoController.destroy');
});

// treinos
Route.group(() => {
	Route.get('/treinos', 'TreinoController.index');
	Route.get('/treino/:id', 'ExercicioTreinoController.show');
	Route.get('/treinoganho', 'TreinoController.indexganho');
	Route.get('/treinoperda', 'TreinoController.indexperda');
	//  treinos por nível
	// ganho
	Route.get('/treinoganhoniveliniciante', 'TreinoController.indexganhon1');
	Route.get('/treinoganhonivelintermediario', 'TreinoController.indexganhon2');
	Route.get('/treinoganhonivelprofissional', 'TreinoController.indexganhon3');
	// perda
	Route.get('/treinoperdaniveliniciante', 'TreinoController.indexperdan1');
	Route.get('/treinoperdanivelintermediario', 'TreinoController.indexperdan2');
	Route.get('/treinoperdanivelprofissional', 'TreinoController.indexperdan3');
	// crud
	Route.post('/treino', 'TreinoController.store').validator('CriaTreino');
	Route.put('/treino/:id', 'TreinoController.update').validator(
		'AtualizaTreino'
	);
	Route.delete('/treino/:id', 'TreinoController.destroy');
});

// meus treinos
Route.group(() => {
	Route.get('/meustreinos', 'UsuarioTreinoController.index');
	// crud
	Route.post('/meustreinos/:id', 'UsuarioTreinoController.store').middleware(
		'auth'
	);
	Route.delete(
		'/meustreinos/:id',
		'UsuarioTreinoController.destroy'
	).middleware('auth');
});

// exercicio
Route.group(() => {
	Route.get('/exercicios', 'ExercicioController.index');
	Route.get('/exercicio/:id', 'ExercicioController.show');
	// crud
	Route.post('/exercicio', 'ExercicioController.store').validator(
		'CriaExercicio'
	);
	Route.put('/exercicio/:id', 'ExercicioController.update').validator(
		'AtualizaExercicio'
	);
	Route.delete('/exercicio/:id', 'ExercicioController.destroy');
});

// medidas
Route.group(() => {
	Route.get('/medida', 'MedidaController.index');
	// crud
	Route.post('/medida', 'MedidaController.store')
		.validator('CriaMedida')
		.middleware('auth');
	Route.delete('/medida/:id', 'MedidaController.destroy');
});

// exercicios que pertencem a um treino
Route.group(() => {
	Route.post('/exe/:id/treino/:treino_id', 'ExercicioTreinoController.store');
	Route.delete(
		'/exe/:id/treino/:treino_id',
		'ExercicioTreinoController.destroy'
	);
});

// Imagens
Route.group(() => {
	// adiciona imagens ao exercicio
	Route.post('/exe/:id/imagens', 'ImagemController.store').validator('Imagem');
	// adiciona imagens ao dicas_nutri
	Route.post('/nutri/:id/imagens', 'ImagemController.store2').validator(
		'Imagem'
	);
	// deleta imagens
	Route.delete('/imagem/:id', 'ImagemController.destroy');
	// retorna a imagem para o front-end
	Route.get('imagens/:caminho', 'ImagemController.show');
});

// Dicas Nutricao
Route.group(() => {
	Route.post('/nutri', 'DicasNutriController.store').validator(
		'CriaDicasNutri'
	);
	Route.put('/nutri/:id', 'DicasNutriController.update').validator(
		'AtualizaDicasNutri'
	);
	Route.delete('/nutri/:id', 'DicasNutriController.destroy');
	Route.get('/', 'DicasNutriController.index');
	Route.get('/nutri/:id', 'DicasNutriController.show');
});
