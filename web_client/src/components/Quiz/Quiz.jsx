/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Questions from './components/Questions';

/**
 * 
 */
class Quiz extends React.Component{

    render() {
        const id = this.props.user.id;

        return (
            <div className={this.props.className}>
                <div className="container">
                    <div className="row">
                        <Questions user_id={id}/>
                    </div>
                </div>
            </div>
        )
    }
}

Quiz.propTypes = {
    className: PropTypes.string,
    user: PropTypes.object,
};

export default styled(Quiz) `

`;
