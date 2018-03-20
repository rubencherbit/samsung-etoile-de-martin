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
                    <h3>Question N°</h3>
                </div>
            </div>
        </div>
    </div>
)

Questions.propTypes = {
    className: PropTypes.string,
};

export default styled(Questions)`
    h3 {
        color:#545454;
        font-size: 2rem;
        margin: 20px 0;
    }
`;
