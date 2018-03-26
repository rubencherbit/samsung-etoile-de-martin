import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * 
 * @param {*} param0 
 */
const Home = ({ className }) => (
	<div className={className}>
		<div className="wrapper wrapper-home">
			<div className="intro-container intro-container-detail">
				<h3 className="intro-text intro-text-first">Bonsoir,</h3>
				<p>Répondez correctement à 3 questions, vous pouvez faire monter la donation à l’Etoile de Martin. </p>
				<p>N’hésitez pas à vous faire aider ! </p>
				<p>D’avance merci de votre participation ! </p>
			</div>
			<div className="container-btn">
				<div className="btn btn-play">
					<a href="/quiz" className="btn-home">Quizz</a> 
				</div>
				<div className="btn">
					<a href="https://twitter.com/intent/tweet?text=Soutenez+l'association+L'etoile+de+Martin&hashtags=grandirsanscancer" title="twitter #grandirsanscancer" className="btn-twitte">Je twitte</a> 
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
		min-height: 100%;
		min-height: 100vh;
		padding:5px 10px;
		.intro-container {
			margin: 20px 0 50px;
			p {
				padding: 0 1.25rem;
				animation: animationAppear .45s ease-out forwards;
			}
		}
		h3 {
			margin:0;
			animation: animationAppear .25s ease-out forwards;
			&.intro-text {
				margin: auto;
				color:#545454;
				font-size: 1.25rem;
				padding: 0 .5rem;
				text-align: left;
				&-second {
					text-align: right;
					padding-left: 0;
					padding-right: 1rem;
				}
			}
		}
		.container-btn {
			text-align:center;
			animation: animationAppear .65s ease-out forwards;
			margin: 0 0 100px;
			.btn {
				min-height: 100%;
				display: block;
				margin: 20px 0;
  				a {
  					display: block;
  				}
			}
			.btn-home, .btn-twitte {
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
			.btn-twitte {
				background: #1da1f2;
  				box-shadow: 0px 10px 0px 0px #0d8ddb, 0px 0px 20px 0px #bbb;
			}
		}
	}
`;