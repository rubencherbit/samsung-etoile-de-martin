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
        if ($setting) {
            return $setting;
        }
        return $this->response->errorNotFound();
    }

    public function next_question()
    {
        $setting = Setting::where('id', 1)->first();
        if ($setting) {
            $setting->question_id = $setting->question_id + 1;
            $setting->save();

            return $setting;
        }
        return $this->response->errorNotFound();
    }

    public function reset()
    {
        $setting = Setting::where('id', 1)->first();
        if ($setting) {
            $setting->question_id = 0;
            $setting->end = 0;
            $setting->save();

            return $setting;
        }
        return $this->response->errorNotFound();
    }


    public function end()
    {
        $setting = Setting::where('id', 1)->first();
        if ($setting) {
            $setting->end = 1;
            $setting->save();

            return $setting;
        }
        return $this->response->errorNotFound();
    }
}
