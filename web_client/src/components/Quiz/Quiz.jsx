/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CheckStart from '../../handlers/CheckStart';
import Questions from './components/Questions';
import Loading from '../Loading';

/**
 * 
 */
class Quiz extends React.Component{

    render() {
        const id = this.props.user.id;
        return (
            <div className={this.props.className}>
            { CheckStart ? 
                <div className="container">
                    <div className="row">
                        <Questions user_id={id}/>
                    </div>
                </div>
                    : <div className="container">
                        <div className="row">
                            <Loading />
                        </div>
                    </div>
            }
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
