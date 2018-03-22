import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/**
 * 
 * @param {*} param0 
 */
class Responses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount() {

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
                        <form className="col-6" >
                            <div className="row">
                                <div className="col-4 container-center" >
                                    <a className="btn-answer" href="/result">{this.props.question.answers[0]}</a>
                                    <a className="btn-answer" href="/result">B</a>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-4 container-center" >
                                    <a className="btn-answer" href="/result">C</a>
                                    <a className="btn-answer" href="/result">D</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Responses.propTypes = {
    className: PropTypes.string,
    current_question: PropTypes.number,
    answer_id: PropTypes.number,
    user_id: PropTypes.number,
    question: PropTypes.object,
};

export default styled(Responses) `
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
