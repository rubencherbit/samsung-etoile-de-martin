<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Answer;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
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
            $answer = Answer::where('description', 'LIKE', "%$keyword%")
                ->orWhere('score', 'LIKE', "%$keyword%")
                ->paginate($perPage);
        } else {
            $answer = Answer::paginate($perPage);
        }

        return view('answer.index', compact('answer'));
    }

    /**
     * Show the form for creating a new resource.
     * @param \Illuminate\Http\Request $request
     * @param  int  $id
     *
     * @return \Illuminate\View\View
     */
    public function create($id)
    {

        return view('answer.create')->with('questionId',$id);
        
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
        $answer = new Answer();
        $answer->description = $requestData['description'];
        $answer->score = $requestData['score'];
        $answer->question_id = $requestData['question_id'];
        $answer->save();

        return view('answer.create')->with('questionId',$requestData['question_id']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\View\View
     */
    public function show($id)
    {
        $answer = Answer::findOrFail($id);

        return view('answer.show', compact('answer'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\View\View
     */
    public function edit($id, $questionId)
    {

        $answer = Answer::findOrFail($id);
        return view('answer.edit', compact('answer','questionId'));
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
        
        $answer = Answer::findOrFail($id);
        $answer->update($requestData);

        return redirect('answer')->with('flash_message', 'Answer updated!');
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
        Answer::destroy($id);

        return redirect('answer')->with('flash_message', 'Answer deleted!');
    }
}
