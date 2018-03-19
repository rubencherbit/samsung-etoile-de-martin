import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <Row>
            <Col xs={6} md={4}>
              <Image src="https://stockagehelloassoprod.blob.core.windows.net/images/logos/l-etoile-de-martin.jpg" rounded />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Button bsStyle="success">Jouer</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
