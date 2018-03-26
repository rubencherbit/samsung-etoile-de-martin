/* eslint-disable */
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Quiz from '../Quiz';

/**
 *
 * @param {*} param0
 */

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			user: {},
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	getUser() {
		fetch('https://api.quizzetoile.fr/api/players', {
			method: 'POST',
			body: JSON.stringify({
				username: this.state.value
			}),
			headers: {

				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(json => {
				this.setState({ user: json.player })
			});
	}

	handleSubmit(event) {
		this.getUser();
		event.preventDefault();
	}

	render() {
		if (this.state.user.id) {
			return <Quiz user={this.state.user} />
		} else {
			return (
				<div className={this.props.className}>
					<div className="wrapper wrapper-register">
						<h3 class="intro-text intro-text-first">Merci de bien vouloir nous indiquer votre numéro de table :</h3>
						<form onSubmit={this.handleSubmit}>
							<input type="text" value={this.state.value} onChange={this.handleChange} placeholder="EX : 1-7" />
							<div className="container-btn">
								<div className="btn">
									<button className="btn-play" type="submit">Jouer</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			);
		}
	}
 }

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
		font-size: 2rem;
		margin: 50px 10px;
		animation: animationAppear .25s ease-out forwards;
		text-align: center;
	}
	input {
		padding: 15px 20px;
		border: 1px solid #5db2b6;
		box-shadow: 0px 0px 20px 0px rgba(0,0,0, .1);
		margin-bottom: 50px;
		font-size: 1rem;
		font-family: 'Quicksand',sans-serif;
		animation: animationAppear .45s ease-out forwards;
	}
	.container-btn {
		text-align:center;
		animation: animationAppear .45s ease-out forwards;
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
