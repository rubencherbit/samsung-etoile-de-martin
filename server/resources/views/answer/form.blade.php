<div class="form-group {{ $errors->has('description') ? 'has-error' : ''}}">
    <label for="description" class="col-md-4 control-label">{{ 'Description' }}</label>
    <div class="col-md-6">
        <input class="form-control" name="description" type="text" id="description" value="{{ $answer->description or ''}}" >
        {!! $errors->first('description', '<p class="help-block">:message</p>') !!}
    </div>
</div><div class="form-group {{ $errors->has('score') ? 'has-error' : ''}}">
    <label for="score" class="col-md-4 control-label">{{ 'Score' }}</label>
    <div class="col-md-6">
        <input class="form-control" name="score" type="number" id="score" value="{{ $answer->score or ''}}" >
        {!! $errors->first('score', '<p class="help-block">:message</p>') !!}
    </div>
    <div class="col-md-6">
        <input class="form-control" name="question_id" type="hidden" id="questionId" value="{{ $questionId }}" >
    </div>
</div>
<div class="form-group">
    <div class="col-md-offset-4 col-md-4">
        <input class="btn btn-primary" type="submit" value="{{ $submitButtonText or 'Create' }}">
    </div>
</div>
