import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/**
 * 
 * @param {*} param0 
 */
const Responses = ({ className }) => (
    <div className={className}>
        <div className="row" >
            <div className="grid-container" >
                <div className="col-6" >
                    <div className="row">
                        <div className="col-4" >
                            <a className="btn normal" href="/result">reponse A</a>
                            <a className="btn normal" href="/result">reponse B</a>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-4" >
                            <a className="btn normal" href="/result">reponse C</a>
                            <a className="btn normal" href="/result">reponse D</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

Responses.propTypes = {
    className: PropTypes.string,
};

export default styled(Responses) `

`;
