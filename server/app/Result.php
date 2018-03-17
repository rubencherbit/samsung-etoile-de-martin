<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    /**
     * Get the phone record associated with the user.
     */
    public function question()
    {
        return $this->hasOne('App\Question');
    }
    /**
     * Get the phone record associated with the user.
     */
    public function answer()
    {
        return $this->hasOne('App\Answer');
    }
    /**
     * Get the phone record associated with the user.
     */
    public function player()
    {
        return $this->hasOne('App\Player');
    }
}
