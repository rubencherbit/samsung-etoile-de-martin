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

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\View\View
     */
    public function index(Request $request)
    {
        $keyword = $request->get('search');
        $perPage = 25;

        if (!empty($keyword)) {
            $question = Question::where('description', 'LIKE', "%$keyword%")
                ->paginate($perPage);
        } else {
            $question = Question::paginate($perPage);
        }

        return view('question.index', compact('question'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('question.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(Request $request)
    {

        $requestData = $request->all();

        Question::create($requestData);

        return redirect('question')->with('flash_message', 'Question added!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\View\View
     */
    public function showQuestion($id)
    {
        $question = Question::findOrFail($id);

        return view('question.show', compact('question'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\View\View
     */
    public function edit($id)
    {
        $question = Question::findOrFail($id);

        return view('question.edit', compact('question'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param  int  $id
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request, $id)
    {

        $requestData = $request->all();

        $question = Question::findOrFail($id);
        $question->update($requestData);

        return redirect('question')->with('flash_message', 'Question updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy($id)
    {
        Question::destroy($id);

        return redirect('question')->with('flash_message', 'Question deleted!');
    }

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
