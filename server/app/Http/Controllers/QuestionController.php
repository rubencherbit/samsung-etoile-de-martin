<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Dingo\Api\Routing\Helpers;
use App\Question;
use App\Answer;
use App\Result;
use App\Player;
use App\Http\Requests\StorePlayer;
use App\Http\Requests\StoreResult;
use App\Transformers\QuestionTransformers;

class QuestionController extends Controller
{
    use Helpers;

    public function show($id)
    {
        $question = Question::where('id', $id)->first();

        if ($question) {
            return $this->item($question, new QuestionTransformers);
        }

        return $this->response->errorNotFound();
    }

    public function showAllScore()
    {
        $results = Result::all();
        $score = ['true' => 0, 'false' => 0];
        foreach ($results as $result) {
            $answer = Answer::where('id', $result->answer_id)->first();
            if ($answer->score === 1) {
                $score['true']++;
            } else {
                $score['false']++;
            }
        }
        $nb_total = $score['true'] + $score['false'];
        $finalStat = ['true' => ($score['true'] / $nb_total) * 100, 'false' => ($score['false'] / $nb_total) * 100];
        return $finalStat;
        if ($question) {
            return $this->item($question, new questiontransformers);
        }

        return $this->response->errorNotFound();
    }

    public function showScore($id)
    {
        $results = Result::where('question_id', $id)->get();
        if (count($results) === 0) {
            return $this->response->errorNotFound();
        }
        $score = ['true' => 0, 'false' => 0];
        foreach ($results as $result) {
            $answer = Answer::where('id', $result->answer_id)->first();
            if ($answer->score === 1) {
                $score['true']++;
            } else {
                $score['false']++;
            }
        }
        $nb_total = $score['true'] + $score['false'];
        $finalStat = ['true' => ($score['true'] / $nb_total) * 100, 'false' => ($score['false'] / $nb_total) * 100];
        return $finalStat;
        if ($question) {
            return $this->item($question, new questiontransformers);
        }

        return $this->response->errorNotFound();
    }

    public function showAnswers($id)
    {
        $question = Question::where('id', $id)->first();

        if ($question) {
            return $question->answers()->get();
        }

        return $this->response->errorNotFound();
    }

    public function storeResult(StoreResult $request)
    {
        $answer_id = $request->request->get('answer_id');
        $player_id = $request->request->get('player_id');
        $question_id = $request->request->get('question_id');

        if (Result::Create($request->all()) && empty($result)) {
            $answer = Answer::where('id', $answer_id)->first();
            if ($answer->score == 1) {
                $player = Player::where('id', $player_id)->first();
                $player->score = $player->score + 1;
                $player->save();

                return $this->response->created();
            }
            return $this->response->created();
        }
        return $this->response->errorBadRequest();
    }
}
