import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Register = ({ className }) => (
    <div className={className}>
        <form action="/quiz">
            <input type="text" placeholder="entrer votre N° de vestiaire"/>
            <button type="submit" >s identifier</button>
        </form>
    </div>
)

Register.propTypes = {
    className: PropTypes.string,
};

export default styled(Register) `

`;
