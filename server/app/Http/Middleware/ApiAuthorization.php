<?php

namespace App\Http\Middleware;

use Closure;
use Dingo\Api\Routing\Helpers;

class ApiAuthorization
{
    use Helpers;
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->header('Authorization') === "NxxECWhsC+ekvXrqs8+atZp0jMw4nJOPhoe8CR5XHTw=") {
            return $next($request);
        } else {
            return $this->response->errorForbidden();
        }
    }
}
