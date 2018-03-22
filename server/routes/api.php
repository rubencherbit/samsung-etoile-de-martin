<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
$api = app('Dingo\Api\Routing\Router');
$api->version('v1', function ($api) {
    $api->get('players/{id}', 'App\Http\Controllers\PlayerController@show');
    $api->post('players', 'App\Http\Controllers\PlayerController@store');
    $api->get('questions/score', 'App\Http\Controllers\QuestionController@showAllScore');
    $api->get('questions/{id}/score', 'App\Http\Controllers\QuestionController@showScore');
    $api->get('questions/{id}', 'App\Http\Controllers\QuestionController@show');
    $api->post('questions/{id}/result', 'App\Http\Controllers\QuestionController@storeResult');
    $api->get('setting', 'App\Http\Controllers\SettingController@show');
});
