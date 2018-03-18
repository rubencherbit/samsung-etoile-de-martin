<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'description'
    ];
    /**
     * Get the answers for the Questions.
     */
    public function answers()
    {
        return $this->hasMany('App\Answer');
    }
}
