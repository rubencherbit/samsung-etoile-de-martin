<div class="col-md-3">
    <div class="card">
        <div class="card-header">
            Sidebar
        </div>

        <div class="card-body">
            <ul class="nav" role="tablist" style="display: flex;flex-direction: column;">
                <li role="presentation">
                    <a href="{{ url('/question') }}">
                        Questions
                    </a>
                </li>
                <li role="presentation">
                    <a href="{{ url('/answer') }}">
                        Answers
                    </a>
                </li>
                <li role="presentation">
                    <a href="{{ url('/display') }}">
                        display
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
