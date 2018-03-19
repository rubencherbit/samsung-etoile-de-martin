import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/**
 * 
 * @param {*} param0 
 */
const Home = ({ className }) => (
    <div className={className}>
        <div className="grid-container">
            <div className="col-1">
                <a href="/register" className="btn normal">JOUER</a> 
            </div>
        </div>
    </div>
)

Home.propTypes = {
    className: PropTypes.string,
};

export default styled(Home)`

`;
