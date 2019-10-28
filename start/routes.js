/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
// LOGIN
Route.post('/register', 'AuthController.register').validator('register');
Route.post('/signin', 'AuthController.autenticate').validator('Signin');
Route.post('/forgot', 'ForgotPasswordController.store').validator('forgot');
Route.post('/reset', 'ResetPasswordController.store').validator('reset');
Route.get('/verificaadm', 'AuthController.verificaadm').middleware('auth');
Route.delete('/delete', 'AuthController.destroy');
// objetivo e nivel
Route.get('/objetivo', 'ObjetivoController.index');
Route.get('/nivel', 'NivelController.index');
// treinos
Route.get('/treinos', 'ProgramaController.index');
Route.get('/onetreino/:id', 'ExerciciosProgramaController.show');
Route.get('/treinoganho', 'ProgramaController.indexganho');
Route.get('/treinoperda', 'ProgramaController.indexperda');

//  treinos por nível
Route.get('/treinoperdaniveliniciante', 'ProgramaController.indexperdan1');
Route.get('/treinoperdanivelintermediario', 'ProgramaController.indexperdan2');
Route.get('/treinoperdanivelprofissional', 'ProgramaController.indexperdan3');
Route.get('/treinoganhoniveliniciante', 'ProgramaController.indexganhon1');
Route.get('/treinoganhonivelintermediario', 'ProgramaController.indexganhon2');
Route.get('/treinoganhonivelprofissional', 'ProgramaController.indexganhon3');
// exercicio
Route.get('/exercicios', 'ExercicioController.index');
Route.get('/exercicio/:id', 'ExercicioController.show');
// retorna a imagem para o front-end
Route.get('images/:path', 'ImageController.show');

Route.group(() => {
	// add imagens ao exercicio
	Route.post('/exe/:id/images', 'ImageController.store');
	// delete imagem do treino
	Route.delete('/deleteimg/:id', 'ImageController.destroy');
	// deleta um usuario
	Route.delete('/deleteuser/:id', 'AuthController.destroy');
	// crud de exercicio
	Route.post('/createexercicio', 'ExercicioController.store');
	Route.put('/update/:id', 'ExercicioController.update');
	Route.delete('/deleteexe/:id', 'ExercicioController.destroy');
	// crud de treinos
	Route.post('/createtreino', 'ProgramaController.store');
	Route.put('/treino/:id', 'ProgramaController.update');
	Route.delete('/treino/:id', 'ProgramaController.destroy');
	// crud de medidas
	Route.get('/medida', 'MedidaController.index');
	Route.post('/createmedida', 'MedidaController.store');
	Route.delete('/deletemedida/:id', 'MedidaController.destroy');
	// meus treinos
	Route.get('/meustreinos', 'UsersProgramaController.index');
	Route.post('/meustreinos/:id', 'UsersProgramaController.store');
	Route.delete('/removemydrills/:id', 'UsersProgramaController.destroy');
	// adiciona exercicios a um treino
	Route.post(
		'/addexe/:id/treino/:treino_id',
		'ExerciciosProgramaController.store'
	);
	// remove exercicios de um treino
	Route.delete(
		'/deleteexe/:id/dotreino/:treino_id',
		'ExerciciosProgramaController.destroy'
	);
	// cria e deleta objetivo
	Route.post('/createobj', 'ObjetivoController.store');
	Route.delete('/deleteobj/:id', 'ObjetivoController.destroy');
	// cria e deleta nivel
	Route.post('/createnivel', 'NivelController.store');
	Route.delete('/deletenivel/:id', 'NivelController.destroy');
}).middleware('auth');
