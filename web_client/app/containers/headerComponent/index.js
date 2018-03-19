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

export default class HeaderComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (

      <div className="header gid-x">
      	<a className="cell large-6 medium-6 small-6" href="/" title="home">
      		<img src="https://letoiledemartin.fr/wp-content/uploads/2018/01/logo_etoile_de_martin.jpg" alt="L'Etoile de Martin logo" / >
      	</a>
      	<a className="cell large-6 medium-6 small-6" href="https://letoiledemartin.fr/nous-soutenir/faire-un-don-intro/" title="faire un don" target="_blank">
      	    <p>don en ligne</p>
      	</a>
      </div>
    );
  }
}
