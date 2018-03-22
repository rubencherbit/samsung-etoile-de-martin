/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GetQuestion from '../../../handlers/GetQuestion';
/**
 * 
 * @param {*} param0 
 */
class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer_id: '',
            current_question: 1,
            user_id: this.props.user_id,
            question: {},
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount() {
        fetch('http://api.quizzetoile.fr/api/questions/' + this.state.current_question, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                this.setState({ question: json.data, current_question: this.state.current_question + 1})
            });
    }
    handleChange(event) {
        this.setState({ answer_id: event.target.answer_id });
    }

    handleSubmit(event) {
        event.preventDefault();
    }


    render() {
        return (
            <div className={this.props.className}>
                <div className="row" >
                    <div className="grid-container" >
                        <div className="col-6">
                            <h3>Question N° {this.state.question.id}</h3>
                            <br />
                            <h2>{this.state.question.description}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row" >
                        <div className="grid-container" >
                            <form onSubmit={this.handleSubmit} className="col-6">
                                <div className="row">
                                    <div className="col-4 container-center" >
                                    {this.state.question.answers && this.state.question.answers.forEach(answer => {
                                        <button value={answer.id} type="submit" className="btn-answer" >{answer.description}</button>
                                    })}
                                    </div>
                                </div>
                                <div className="row" >
                                    <div className="col-4 container-center" >
                                        <button className="btn-answer" href="/result">C</button>
                                        <button className="btn-answer" href="/result">D</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Questions.propTypes = {
    className: PropTypes.string,
    current_question: PropTypes.number,
    answer_id: PropTypes.number,
    user_id: PropTypes.number,
};

export default styled(Questions)`
    h3 {
        color:#545454;
        font-size: 2rem;
        margin: 20px 0;
    }
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
