<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('results', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('question_id');
            $table->foreign('question_id')
            ->references('id')->on('questions');
            $table->integer('answer_id');
            $table->foreign('answer_id')
            ->references('id')->on('answers');
            $table->integer('player_id');
            $table->foreign('player_id')
            ->references('id')->on('players');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('results');
    }
}
