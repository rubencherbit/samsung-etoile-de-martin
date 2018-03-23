/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API = 'http://api.quizzetoile.fr/api/settings';
const opt = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
}
const withFetching = (url) => (Comp) =>
    class WithFetching extends Component {
        constructor(props) {
            super(props);

            this.state = {
                data: {},
                isLoading: false,
                error: null,
            };
        }

        componentDidMount() {
            this.setState({ isLoading: true });
            setInterval(() => {
                fetch(url, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                    method: 'POST',
                    body: {
                        "username": "12345"
                    }
                })
                    .then(response => {
                        if (response.ok) {
                            console.log(response.json());
                            return response.json();
                        } else {
                            throw new Error('Something went wrong ...');
                        }
                    })
                    .then(data => this.setState({ data, isLoading: false }))
                    .catch(error => this.setState({ error, isLoading: false }));
            }, 1000); 
        }

        render() {
            return <Comp {...this.props} {...this.state} />
        }
    }

const App = ({ data, isLoading, error }) => {
    const hits = data.hits || [];

    if (error) {
        return <p>{error.message}</p>;
    }

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    return (
        <div>
        </div>
    );
}

App.propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool,
    error: PropTypes.object,
}

export default withFetching(API)(App);