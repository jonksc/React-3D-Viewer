import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const MainPage = () => {
  return (
    <>
      <Container className='mt-4'>
        <Row className='justify-content-center'>
          <Col xs='auto'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/logo512.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card&apos;s content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs='auto'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/logo512.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card&apos;s content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
