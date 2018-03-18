/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import HeaderComponent from '../HeaderComponent/index';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    
    <div>    
      <HeaderComponent></HeaderComponent>
      <div className="wrapper wrapper-text-header grid-x align-center">
          <div className="container container-text cell large-8 medium-8 small-10">
            <h1> 
              <FormattedMessage {...messages.header} />
            </h1>
          </div>
      </div>
    </div>    
    );
  }
}
