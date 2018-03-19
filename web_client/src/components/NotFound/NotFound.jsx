import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/**
 * 
 * @param {*} param0 
 */
const NotFound = ({ className }) => (
    <div className={className}>
        <div className="container">
            <p>Home</p>
        </div>
    </div>
)

NotFound.propTypes = {
    className: PropTypes.string,
};

export default styled(NotFound) `

`;
