import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/**
 * 
 * @param {*} param0 
 */
const Result = ({ className }) => (
    <div className={className}>
        <p>Result</p>
    </div>
)

Result.propTypes = {
    className: PropTypes.string,
};

export default styled(Result) `

`;
