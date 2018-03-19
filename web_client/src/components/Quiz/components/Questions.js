import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/**
 * 
 * @param {*} param0 
 */
const Questions = ({ className }) => (
    <div className={className}>
        <div className="row" >
            <div className="grid-container" >
                <div className="col-6">
                    <p>Question N°</p>
                </div>
            </div>
        </div>
    </div>
)

Questions.propTypes = {
    className: PropTypes.string,
};

export default styled(Questions)`

`;
