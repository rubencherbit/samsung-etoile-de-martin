<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Dingo\Api\Routing\Helpers;
use App\Setting;
use Carbon\Carbon;

class SettingController extends Controller
{
    use Helpers;

    public function show()
    {
        $setting = Setting::where('id', 1)->first();
        $nb_question = 3;
        if ($setting) {
            if ($setting->created_at) {
                $now = Carbon::now();
                $diff = $setting->created_at->diffInSeconds($now);
                if ($diff >= $setting->question_id * 30) {
                    $setting->question_id = $setting->question_id + 1;
                    if ($setting->question_id >= 3) {
                        $setting->end = 1;
                    }
                    $setting->save();
                }
                return $setting;
            }
        }

        return $this->response->errorNotFound();
    }
}
