
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loading from '../../Loading';
import Result from '../../Result';
/**
 *
 * @param {*} param0
 */
class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer_id: null,
            current_question: 1,
            user_id: this.props.user_id,
            question: null,
            result: null,
            time: false,
            next: null,
            end: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        setInterval(() => this.getCurrent(), 1000)    }

    getQuestion() {
        fetch('https://api.quizzetoile.fr/api/questions/' + this.state.current_question, {
            method: 'GET',
            headers: {

                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(json => {
                this.setState({ question: json.data })
            })
    }
    getCurrent() {
        fetch('https://api.quizzetoile.fr/api/setting', {
            method: 'GET',
            headers: {

                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(json => {
                this.setState({ next: json.question_id, end: json.end })
            })
        if (this.state.next == this.state.current_question) {
            if(this.state.end != 1) {
                this.getQuestion();
            }
        }
    }

    giveResult() {
        fetch('https://api.quizzetoile.fr/api/questions/'+this.state.current_question+"/result", {
            method: 'POST',
            body: JSON.stringify({
                question_id: this.state.current_question,
                answer_id: this.state.answer_id,
                player_id: this.state.user_id,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(json => {
                this.setState({ result: json.status_code, current_question: this.state.current_question + 1})
            })

    }

    handleChange(event) {
        this.setState({ answer_id: event.target.answer_id });
    }

    handleClick(event) {
        this.setState({ answer_id: event.target.value, question: null }, () => {
            this.giveResult();
        })
        event.preventDefault();
    }


    render() {
        if (this.state.question) {
            if(this.state.question.id != 0 && this.state.question.id === this.state.current_question){
                const answers = this.state.question.answers;
                return (
                    <div className={this.props.className}>
                        <div className="row">
                            <div className="grid-container" >
                                <div className="col-6">
                                    <h3>Question N° {this.state.question.id}</h3>
                                    <h2>{this.state.question.description}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row container-answer">
                            <div className="row" >
                                <div className="grid-container" >
                                    <div className="col-6">
                                        <div className="row">
                                                {answers.map((answer, key) => {
                                                    if(key < 2){
                                                        return (
                                                        <div className="col-4 container-center" >
                                                            <button key={key} onClick={this.handleClick} value={answer.id} className="btn-answer" >{answer.description}</button>
                                                        </div>
                                                        )
                                                    }
                                                })}
                                            </div>
                                            <div className="row">
                                                    {answers.map((answer, key) => {
                                                        if (key > 1) {
                                                            return (
                                                            <div className="col-4 container-center" >
                                                                <button key={key} onClick={this.handleClick} value={answer.id} className="btn-answer" >{answer.description}</button>
                                                            </div>
                                                            )
                                                        }
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
        } else if(this.state.result){
            setInterval(() => this.getCurrent(), 1000);
            return (
                <Loading />
            )
        }
        if(this.state.end !== 0) {
            return (
                <Result />
            )
        }
        // setInterval(() => this.getCurrent(), 1000);
        return (
            <Loading />
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
        margin: 20px 0 0;
        font-size: .75rem;
        opacity: 0;
        animation: animationAppear .25s ease-out forwards;
        animation-delay: .25s;
    }
    h2 {
        font-size: 1rem;
        color:#545454;
        opacity: 0;
        animation: animationAppear .25s ease-out forwards;
        animation-delay: .5s;
    }
    .container-center {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: .25rem 0 0;
        color:#545454;
        font-size: .75rem;
        opacity: 0;
        animation: animationAppear .25s ease-out forwards;
        animation-delay: .75s;
    }
    .btn-answer {
        width: 100%;
        color: #ffffff;
        font-size: 1rem;
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
    .container-answer {
        margin: 0 0 3rem;
    }

`;
