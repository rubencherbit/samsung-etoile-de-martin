import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Congratulation = ({ className }) => (
    <div className={className}>
        <p>congratulation vous avez raporter XXXXXX €</p>
    </div>
)

Congratulation.propTypes = {
    className: PropTypes.string,
}

export default styled(Congratulation)`

`;