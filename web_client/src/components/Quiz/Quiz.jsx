import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Questions from './components/Questions';
import Responses from './components/Responses';

const Quiz = ({ className }) => (
    <div className={className}>
        <div>
            <Questions />
        </div>
        <br />
        <div>
            <Responses />
        </div>
    </div>
)

Quiz.propTypes = {
    className: PropTypes.string,
};

export default styled(Quiz) `

`;
