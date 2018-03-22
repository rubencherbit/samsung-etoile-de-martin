import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CheckStart from '../../handlers/CheckStart';
/**
 * 
 * @param {*} param0 
 */
const Home = ({ className }) => (
	<div className={className}>
		<div className="wrapper wrapper-home">
			<div className="intro-container">
				<h3 className="intro-text intro-text-first"><CheckStart /></h3>
				<h3 className="intro-text intro-text-second">à la soirée bla bla bla!</h3>
			</div>
			<div className="intro-container intro-container-detail">
				<p>Explication, Morbi pretium turpis at sapien vehicula condimentum. Praesent a urna in diam consectetur dapibus. Duis sollicitudin tincidunt efficitur. Curabitur molestie odio arcu, non dapibus sapien malesuada ut. Fusce fermentum massa nisi, eget fermentum metus sagittis vel. Pellentesque molestie magna ante, aliquet sagittis leo mattis sed.</p>
			</div>
			<div className="container-btn">
				<div className="btn btn-play">
					<a href="/register" className="btn-home">Quizz</a> 
				</div>
			</div>
		</div>
	</div>
)

Home.propTypes = {
	className: PropTypes.string,
};

export default styled(Home)`
	.wrapper-home {
		width: 100%;
		height: 100%;
		padding:5px 10px;
		margin-bottom: 50px;
		.intro-container {
			margin-bottom: 50px;
			margin: 50px 0;
		}
		h3 {
			margin:0;
			&.intro-text {
				margin: auto;
				color:#545454;
				font-size: 1.5rem;
				&-second {
					text-align: right;
				}
			}
		}
		.container-btn {
			text-align:center;
			.btn-home {
				text-decoration: none;
				text-transform: uppercase;
				font-weight: bold;
				letter-spacing: 3px;
				padding: 1rem 3rem;
				margin: 0;
				color: #ffffff;
				font-size: 20px;
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
		}
	}
`;