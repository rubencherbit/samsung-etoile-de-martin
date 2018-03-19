import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Questions from './components/Questions';
import Responses from './components/Responses';
/**
 * 
 */
class Quiz extends React.Component{ 
    render() {
        return (
        <div className={this.props.className}>
            <div className="container">
                <div className="row">
                    <Questions />
                </div>
                <div className="row">
                    <Responses />
                </div>
            </div>
        </div>
        )
    }
}

Quiz.propTypes = {
    className: PropTypes.string,
};

export default styled(Quiz) `

`;
