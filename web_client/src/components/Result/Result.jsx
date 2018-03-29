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
                {/* <h3>Resultats</h3> */}
                <div className="container-result">
                    <div className="row">
                        <p>Merci d’avoir participé! Pour générer plus de dons n’oubliez pas de tweeter!</p>
                    </div>
                    <div className="row">
                        <div className="btn btn-tweet-container">
                        <a href="https://twitter.com/intent/tweet?text=Soutenez+l'Etoile+de+Martin+avec:+100+euros+versés+à+l'association+ce+soir+par+hashtag+publié+!+(dans+la+limite+de+100.000+euros)&hashtags=grandirsanscancer" target="_blank" title="twitter #grandirsanscancer" className="btn-tweete">Je tweete</a>
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
        padding: 0 2rem;
        margin-bottom: 1rem;
    }

    .btn-tweete {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 3px;
        padding: 1rem 3rem;
        margin: 0;
        color: #ffffff;
        font-size: 20px;
        font-family: 'Quicksand',sans-serif;
        border-radius: 10px;
        transition: .15s ease-out;
        background: #1da1f2;
        box-shadow: 0px 10px 0px 0px #0d8ddb, 0px 0px 20px 0px #bbb;
        &:focus {
            transition: .15s ease-out;
            box-shadow: 0px 7px 0px 0px #0d8ddb, 0px 0px 20px 0px #bbb;
            font-size: 1.1rem;
        }
        &:hover {
            transition: .15s ease-out;
            box-shadow: 0px 7px 0px 0px #0d8ddb, 0px 0px 20px 0px #bbb;
            font-size: 1.1rem;
        }
    }

`;
