import React from 'react';

export default class States extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 'tutututututukqjsdbclkqjbdsvkjbdkvj',
            nbQuestion: '1',

        };
    }

    render() {
        return (
            <div>
                {this.state.currentQuestion}
            </div>
        )
    }

}