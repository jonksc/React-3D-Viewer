import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ModelCard from '../components/UI/ModelCard';

const MainPage = () => {
  return (
    <>
      <Container className='mt-4'>
        <Row className='justify-content-center'>
          <Col xs='auto'>
            <ModelCard 
              title='Leberzirrhose'
              desc='Some quick example text to build on the card title and make up the bulk of the card&apos;s content.'
              link='/leberzirrhose' />
          </Col>
          <Col xs='auto'>
            <ModelCard
              title='Gehirn'
              desc='Some quick example text to build on the card title and make up the bulk of the card&apos;s content.'
              link='/leberzirrhose' />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
