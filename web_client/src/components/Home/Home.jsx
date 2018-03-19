import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Home = ({ className }) => (
    <div className={className}>
        <div className="container">
            <a href="/register" className="btn normal">JOUER</a> 
        </div>
    </div>
)

Home.propTypes = {
    className: PropTypes.string,
};

export default styled(Home)`

`;
