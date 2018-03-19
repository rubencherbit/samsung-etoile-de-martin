import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/**
 * 
 * @param {*} param0 
 */
const Register = ({ className }) => (
    <div className={className}>
        <form action="/quiz">
            <input type="text" placeholder="entrer votre N° de vestiaire"/>
            <button className="btn normal" type="submit" >jouer</button>
        </form>
    </div>
)

Register.propTypes = {
    className: PropTypes.string,
};

export default styled(Register) `

`;
