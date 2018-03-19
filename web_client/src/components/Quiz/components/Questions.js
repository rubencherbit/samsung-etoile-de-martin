import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Questions = ({ className }) => (
    <div className={className}>
        <p>Questions N°</p> 
    </div>
)

Questions.propTypes = {
    className: PropTypes.string,
};

export default styled(Questions)`

`;
