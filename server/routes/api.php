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
    $api->post('players', 'App\Http\Controllers\PlayerController@store');
    $api->get('questions/{id}', 'App\Http\Controllers\QuestionController@show');
    $api->post('questions/{id}/result', 'App\Http\Controllers\QuestionController@storeResult');
});
