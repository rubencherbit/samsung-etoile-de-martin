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
                        <div className="col-4 container-center" >
                            <a className="btn-answer" href="/result">A</a>
                            <a className="btn-answer" href="/result">B</a>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-4 container-center" >
                            <a className="btn-answer" href="/result">C</a>
                            <a className="btn-answer" href="/result">D</a>
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
    .container-center {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: .5rem 0;
    }
    .btn-answer {
        color: #ffffff;
        font-size: 20px;
        text-transform: uppercase;
        font-weight: bold;
        text-decoration: none;
        letter-spacing: 3px;
        padding: 1rem 2rem;
        margin: 0 1rem;
        border:none;
        background: #5db2b6;
        font-family: 'Quicksand',sans-serif;
        border-radius: 10px;
        box-shadow: 0px 10px 0px 0px #499fa3, 0px 0px 20px 0px #bbb;
        transition: .15s ease-out;
        &:focus {
            transition: .15s ease-out;
            box-shadow: 0px 7px 0px 0px #499fa3, 0px 0px 20px 0px #bbb;
            font-size: 1.1rem;
        }
        &:hover {
            transition: .15s ease-out;
            box-shadow: 0px 7px 0px 0px #499fa3, 0px 0px 20px 0px #bbb;
            font-size: 1.1rem;
        }
    }
`;
