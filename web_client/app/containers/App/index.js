/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import QuizPage from 'containers/QuizPage/Loadable';
import Register from 'containers/Register/Loadable';
import { Row, Col } from 'react-bootstrap';

export default function App() {
  return (
    <Row>
      <Col>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/quiz" component={QuizPage} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFoundPage} />
        </Switch>
      </Col>
    </Row>
  );
}
