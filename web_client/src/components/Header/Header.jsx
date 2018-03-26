import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/**
 * 
 * @param {*} param0 
 */
const HeaderComponent = ({ className }) => (
    <div className={className} >
        <div className="wrapper-header">
            <div className="header">
                <a href="/" ><img src="https://letoiledemartin.fr/wp-content/uploads/2018/01/logo_etoile_de_martin.jpg" alt="L'Etoile de Martin logo" /></a>
                <a className="btn pink don" href="https://letoiledemartin.fr/nous-soutenir/faire-un-don-intro/" title="faire un don" target="_blank" rel="noopener noreferrer">Don en ligne<span className="heart"></span></a>
            </div>
        </div>
    </div>
)

HeaderComponent.propTypes = {
    className: PropTypes.string,
};

export default styled(HeaderComponent)`
		.header {	
			background-color:#fff;
			border:1px solid #e5e5e5;
			box-shadow: 0 0 1px 0px rgba(0,0,0, .1);
			align-items:center;
			display: flex;
			justify-content:space-between;
			padding: 0 5px;
		}
        .btn {
        	&.pink {
            	position: fixed;
            	left: 0;
            	bottom:0;
            	width:100%;
            	text-align:center;
				color:#fff;
				text-decoration: none;
		        font-weight: bold;
		        text-tranform: capitalize;
		        font-size: .9rem;
				background-color: #d13581;
				padding: 10px;
				border-radius: 2px;
				box-shadow: 0px 0px 20px 0px #bbb;
				border:1px solid #e5e5e5;
				cursor: pointer;

        	}
        	.heart {
				background-color: #5db2b6;
				display: inline-block;
				height: 10px;
				margin: 0 5px;
				position: relative;
				top: 1px;
				transform: rotate(-45deg);
				width: 10px;
				left: 10px;
			}

			.heart:before,
			.heart:after {
				content: "";
				background-color: #5db2b6;
				border-radius: 50%;
				height: 10px;
				position: absolute;
				width: 10px;
			}

			.heart:before {
				top: -5px;
				left: 0;
			}

			.heart:after {
				left: 5px;
				top: 0;
			}
        }  
		img {
            width: 10rem;
            max-width: 100%;
            margin: 1rem 1rem 1rem 1rem;
		}

		& p {
			font-size: .9rem;
			background-color: #d13581;
			margin 0;
			padding: 10px;
			border-radius: 2px;
			box-shadow: 0 0 1px 0px rgba(0,0,0, .1);
			border:1px solid #e5e5e5;
			cursor: pointer;
		}

`;
