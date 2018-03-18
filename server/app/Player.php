<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'score',
    ];
    /**
     * Get the comments for the blog post.
     */
    public function results()
    {
        return $this->hasMany('App\Result');
    }
}
