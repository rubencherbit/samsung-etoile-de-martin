<?php
namespace App\Transformers;

use App\Question;
use League\Fractal\TransformerAbstract;

class QuestionTransformers extends TransformerAbstract
{
    public function transform(Question $question)
    {
        return [
            'id'         => (int) $question->id,
            'description'=> $question->description,
            'answers'     => $question->answers()->get()
        ];
    }
}
