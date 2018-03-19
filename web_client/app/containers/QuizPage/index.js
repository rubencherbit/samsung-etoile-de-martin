import React from 'react';
import States from './States';
import { Row, ButtonGroup, Col, Panel, Button } from 'react-bootstrap';

export default class QuizPage extends React.Component {
    render() {
        return(
            <Row>
                <Col>
                    <Panel>
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Question N°</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body><States /></Panel.Body>
                    </Panel>
                    <Row>
                        <ButtonGroup justified>
                            <Button>A</Button>
                            <Button>B</Button>
                        </ButtonGroup>
                        <ButtonGroup justified>
                            <Button>C</Button>
                            <Button>D</Button>
                        </ButtonGroup>
                    </Row>
                </Col>
            </Row>
        )
    }
}