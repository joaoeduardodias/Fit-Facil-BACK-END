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
Route.post('/reset', 'ResetePasswordController.store');

// treinos

Route.get('/treinoganho', 'ProgramaController.indexganho');
Route.get('/treinoperda', 'ProgramaController.indexperda');

//  treinos por nível
Route.get('/treinoganhon1', 'ProgramaController.indexganhon1');
Route.get('/treinoperdan1', 'ProgramaController.indexperdan1');
Route.get('/treinoganhon2', 'ProgramaController.indexganhon2');
Route.get('/treinoperdan2', 'ProgramaController.indexperdan2');
Route.get('/treinoganhon3', 'ProgramaController.indexganhon3');
Route.get('/treinoperdan3', 'ProgramaController.indexperdan3');
