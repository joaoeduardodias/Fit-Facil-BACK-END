'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/register', 'AuthController.register');
Route.post('/signin', 'AuthController.autenticate');

Route.post('/forgot', 'ForgotPasswordController.store');
Route.post('/reset', 'ResetPasswordController.store');

// treinos

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

// Cadastro de novos treinos(Programas)

Route.post('/createtreino', 'ProgramaController.store');
