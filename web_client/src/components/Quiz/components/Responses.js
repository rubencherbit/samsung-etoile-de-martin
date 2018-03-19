import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Responses = ({ className }) => (
    <div className={className}>
    <form action="/result" >
        <button>Responses 1</button><button>Responses 2</button>
        <br />
        <button>Responses 3</button><button>Responses 4</button>
    </form>
    </div>
)

Responses.propTypes = {
    className: PropTypes.string,
};

export default styled(Responses) `

`;
