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
Auth::routes();

Route::group(['middleware' => 'App\Http\Middleware\IsAdmin'], function () {
    Route::get('/admin', function () {
        return view('admin.dashboard');
    });

Route::get('/display', [
    'as' => 'display',
    'uses' => 'QuestionController@display'
]);


    /*
    |--------------------------------------------------------------------------
    | Route Question
    |--------------------------------------------------------------------------
    |
    */
    Route::resource('question', 'QuestionController');

    Route::get('showQuestion/{question}', [
    'as' => 'showQuestion',
    'uses' => 'QuestionController@showQuestion'
]);

    /*
    |--------------------------------------------------------------------------
    | Route Answer
    |--------------------------------------------------------------------------
    |
    */
    Route::resource('answer', 'AnswerController');

    Route::get('answerCreate/{id}', [
    'as' => 'answerCreate',
    'uses' => 'AnswerController@create'
]);
    Route::get('answerEdit/{id}/{questionId}', [
    'as' => 'answerEdit',
    'uses' => 'AnswerController@edit'
]);
});
