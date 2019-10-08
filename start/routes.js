/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/register', 'AuthController.register').validator('register');
Route.post('/signin', 'AuthController.autenticate').validator('Signin');
Route.post('/forgot', 'ForgotPasswordController.store').validator('forgot');
Route.post('/reset', 'ResetPasswordController.store').validator('reset');

Route.get('/onetreino/:id', 'ProgramaController.show');
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

Route.group(() => {
	Route.put('/exercicioupdate/:id', 'ExercicioController.update');
	Route.post('/createexercicio', 'ExercicioController.store');
	Route.post('/createtreino', 'ProgramaController.store');
	Route.put('/treino/:id', 'ProgramaController.update');
	Route.get('/medida', 'MedidaController.index');
	Route.post('/createmedida', 'MedidaController.store');
	Route.delete('/deletemedida/:id', 'MedidaController.destroy');

	// my drills
	Route.get('/meustreinos', 'UsersProgramaController.index');
	Route.post('/meustreinos/:id', 'UsersProgramaController.store');
}).middleware('auth');
