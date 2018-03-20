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
                <a className="btn pink don" href="https://letoiledemartin.fr/nous-soutenir/faire-un-don-intro/" title="faire un don" target="_blank" rel="noopener noreferrer">don en ligne</a>
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
            	position: relative;
				color:#fff;
				text-decoration: none;
		        font-weight: bold;
		        text-tranform: capitalize;
		        font-size: .9rem;
				background-color: #d13581;
				padding: 10px;
				border-radius: 2px;
				box-shadow: 0 0 1px 0px rgba(0,0,0, .1);
				border:1px solid #e5e5e5;
				cursor: pointer;
        	}
        }  
		img {
            width: 100px;
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
