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
}
