import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/**
 * 
 * @param {*} param0 
 */
const Register = ({ className }) => (
	<div className={className}>
		<div className="wrapper wrapper-register">
			<h3>N° de vestiaire</h3>
			<form action="/quiz">
				<input type="text" placeholder="EX : 4548947"/>
				<div className="container-btn">
					<div className="btn">
						<button className="btn-play" type="submit">Jouer</button>
					</div>
				</div>
			</form>
		</div>
	</div>
)

Register.propTypes = {
	className: PropTypes.string,
};

export default styled(Register) `
	.wrapper-register {
		width: 100%;
		height: 100%;
		display: flex;
	    flex-direction: column;
	    align-items: center;
	}
	h3 {
		color:#545454;
		font-size: 2.25rem;
		margin: 50px 0;
	}
	input {
		padding: 15px 20px;
		border: 1px solid #5db2b6;
		box-shadow: 0px 0px 20px 0px rgba(0,0,0, .1);
		margin-bottom: 50px;
		font-size: 1rem;
		font-family: 'Quicksand',sans-serif;
	}
	.container-btn {
		text-align:center;
		.btn-play {
			color: #ffffff;
			font-size: 20px;
			text-transform: uppercase;
			font-weight: bold;
			letter-spacing: 3px;
			padding: 1rem 3rem;
			margin: 0;
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
	}
`;
