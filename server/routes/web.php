<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');

Route::resource('question', 'QuestionController');
Route::get('answerCreate/{id}', [
    'as' => 'answerCreate',
    'uses' => 'AnswerController@create'
]);
Route::get('answerEdit/{id}/{questionId}', [
    'as' => 'answerEdit',
    'uses' => 'AnswerController@edit'
]);

Route::resource('answer', 'AnswerController');