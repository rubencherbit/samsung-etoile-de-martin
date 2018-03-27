
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});

/**
 * Display BO
 */

const baseUrl = 'https://api.quizzetoile.fr/api/';

function getQuestion(id) {
    $.ajax({url: baseUrl + "questions/" + id, success: function(result){
        $(".current").find('span').html(id);
        $(".current").find('.jumbotron h3').html(result.data.description);
        let html = '';
        $.each(result.data.answers, function( index, value ) {
            html += `<li>${value.description} (${value.score}) </li>`;
        });
        $(".current").find('ul').html(html);
    }});
}
// Display Setting
$.ajax({
    url: baseUrl + "setting",
    success: function(result) {
        getQuestion(result.question_id);
    }
});

$(".nextQuestion").click(function(){
    $.ajax({url: baseUrl + "setting/next", success: function(result){
        $(".current").find('span').html(result.question_id);
        $(".current").find('.response').html('');
        getQuestion(result.question_id);
    }});
});

$(".resetQuestion").click(function(){
    $.ajax({url: baseUrl + "setting/reset", success: function(result){
        $(".current").find('span').html(result.question_id);
    }});
});
$(".endQuestion").click(function () {
    $.ajax({
        url: baseUrl + "setting/end", success: function (result) {
        }
    });
});
$(".statQuestion").click(function(){
    const id =  $(".current").find('span').html();
    $.ajax({url: baseUrl + "questions/" + id + "/score", success: function(result){
        if(result) {
            $(".current").find('.response').html(
                'Bonne réponse : ' + result.true + ' % , ' +
                'Mauvaise réponse : ' + result.false + ' %' ,
            );
        }
    }});
});

