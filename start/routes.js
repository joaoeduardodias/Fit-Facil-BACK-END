/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/register', 'AuthController.register').validator('register');
Route.post('/signin', 'AuthController.autenticate').validator('Signin');
Route.post('/forgot', 'ForgotPasswordController.store').validator('forgot');
Route.post('/reset', 'ResetPasswordController.store').validator('reset');

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

Route.get('/exercicios', 'ExercicioController.index');
Route.get('/exercicio/:id', 'ExercicioController.show');
// retorna a imagem para o front-end
Route.get('images/:path', 'ImageController.show');

Route.group(() => {
	// add imagens ao exercicio
	Route.post('/exe/:id/images', 'ImageController.store');

	Route.put('/exeupdate/:id', 'ExercicioController.update');
	Route.post('/createexercicio', 'ExercicioController.store');
	Route.post('/createtreino', 'ProgramaController.store');
	Route.put('/treino/:id', 'ProgramaController.update');
	Route.delete('/treino/:id', 'ProgramaController.destroy');
	Route.get('/medida', 'MedidaController.index');
	Route.post('/createmedida', 'MedidaController.store');
	Route.delete('/deletemedida/:id', 'MedidaController.destroy');
	Route.get('/meustreinos', 'UsersProgramaController.index');
	Route.post('/meustreinos/:id', 'UsersProgramaController.store');
	// adiciona exercicios a um treino
	Route.post(
		'/addexe/:id/treino/:treino_id',
		'ExerciciosProgramaController.store'
	);
}).middleware('auth');
