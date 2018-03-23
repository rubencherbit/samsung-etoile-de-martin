@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            @include('admin.sidebar')

            <div class="col-md-9">
                <div class="card">
                    <div class="current">
                        <h2>Question <span></span> en cours</h2>
                        <div class="statResult">
                            <p class="response"></p>
                        </div>
                    </div>
                    <div class="actions">
                        <button class="nextQuestion">Next</button>
                        <button class="endQuestion">End</button>
                        <button class="resetQuestion">Reset</button>
                        <button class="statQuestion">Stat</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
