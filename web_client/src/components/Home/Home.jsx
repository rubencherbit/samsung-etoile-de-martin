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
				<p>Répondez correctement aux 3 questions du Quizz, et faites monter la donation à l’Etoile de Martin !</p>
				<p>D’avance merci de votre participation,</p>
				<p>Les étudiants du Samsung Campus</p>
			</div>
			<div className="container-btn">
				<div className="btn btn-play">
					<a href="/quiz" className="btn-home">Quizz</a>
				</div>
				<div className="btn btn-tweet-container">
					<a href="https://mobile.twitter.com/home?status=Soutenez%20l'Etoile%20de%20Martin%20avec%20%23grandirsanscancer%20%3A%20100%20euros%20vers%C3%A9s%20%C3%A0%20l%E2%80%99association%20ce%20soir%20par%20hashtag%20publi%C3%A9%20!%20(dans%20la%20limite%20de%20100.000%20euros)%20" target="_blank" title="twitter #grandirsanscancer" className="btn-tweete">Je tweete</a>
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
		}
		h3 {
			margin:0;
			opacity:0;
			animation: animationAppear .25s ease-out forwards;
			animation-delay: .25s;
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
		p {
			opacity:0;
			padding: 0 1.25rem;
			animation: animationAppear .45s ease-out forwards;
			animation-delay: .5s;
		}
		.container-btn {
			text-align:center;
			margin: 0 0 100px;
			.btn {
				min-height: 100%;
				display: block;
				margin: 20px 0;
				opacity:0;
				&-play {
					animation: animationAppear .65s ease-out forwards;
					animation-delay: .75s;
				}
				&-tweet-container {
					animation: animationAppear .65s ease-out forwards;
					animation-delay: 1s;
				}
  				a {
  					display: block;
  				}
			}
			.btn-home, .btn-tweete {
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
			.btn-tweete {
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
		}
	}
`;