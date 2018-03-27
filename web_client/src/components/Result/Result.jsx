import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/**
 * 
 * @param {*} param0 
 */
const Result = ({ className }) => (
    <div className={className}>
    
        <div className="wrapper wrapper-result">
            <h3>Resultats</h3>            
            <div className="container-result">
                <div className="row">
                    <div className="good-result">
                        <div className="result">
                            <div className="container-percentage">
                                <div className="percentage percentage-good" style={{ height: 30 + '%' }}></div>
                            </div>
                            <p> 30% </p>
                        </div>
                    </div>
                    <div className="bad-result">
                        <div className="result">
                            <div className="container-percentage">
                                <div className="percentage percentage-bad" style={{ height: 70 +'%' }}></div>
                            </div>
                            <p> 70% </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

Result.propTypes = {
    className: PropTypes.string,
};

export default styled(Result) `
    h3 {
        color:#545454;
        margin: 20px 0 0;
        font-size: 2rem;
        padding-left: 1rem;
    }
    .container-result {
        padding: 1rem 0 0;
    }
    .row {
        display: flex;
        justify-content:center;
        flex-wrap:wrap;
    }
    .good-result, .bad-result {
        width: 50%;
        display:inline-block;
        padding: 0 .75rem;
    }
    .container-percentage {
        height: 170px;
        position:relative;
        .percentage {
            width: 20px;
            position: absolute;
            bottom: 0;
            left: -10px;
            box-shadow: 0px 0px 20px 0px rgba(150,150,150, .2);
            height:0%;
            transition: .35s ease-out; 
            &-good {
                background:#00abb5;
                border-bottom: 3px solid #499fa3;
            }
            &-bad {
                background:#c32148;
                border-bottom: 3px solid #a11b3c;
            }
        }
    }
    .result {
        display: flex;
        justify-content:center;
        flex-direction: column;
        align-items:center;
        width: 100%;
        text-align:center;
        &:first-child {
            border-bottom: 1px solid rgba(0,0,0, .1);
        }
    }

`;
