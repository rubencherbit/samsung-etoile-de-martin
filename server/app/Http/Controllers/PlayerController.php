<?php

namespace App\Http\Controllers;

use Dingo\Api\Routing\Helpers;
use Illuminate\Http\Request;
use App\Player;
use App\Http\Requests\StorePlayer;

class PlayerController extends Controller
{
    use Helpers;

    public function store(StorePlayer $request)
    {
        if ($player = Player::Create($request->all())) {
            return $this->response->created('players', $player);
        }
        return $this->response->errorBadRequest();
    }
}
