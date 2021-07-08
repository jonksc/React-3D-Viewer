import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ModelCard from '../components/UI/ModelCard';

const MainPage = () => {
  return (
    <>
      <Container fluid className='mt-4'>
        <Row className='justify-content-center align-items-center'>
          <Col xs='auto'>
            <ModelCard
              title='Leberzirrhose'
              desc='Die Leber ist das zentrale Organ des Stoffwechsels und die größte Drüse des Körpers bei Wirbeltieren.'
              img='https://images.indianexpress.com/2016/08/liver-main.jpg'
              link='/leberzirrhose' />
          </Col>
          <Col xs='auto'>
            <ModelCard
              title='Gehirn'
              desc='Als Gehirn oder Hirn wird bei Wirbeltieren einschließlich des Menschen und bei einigen Wirbellosen der im Kopf gelegene Teil des zentralen Nervensystems bezeichnet.'
              img='https://images.unsplash.com/photo-1559757175-5700dde675bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2978&q=80'
              link='/placeholder' />
          </Col>
          <Col xs='auto'>
            <ModelCard
              title='Gehirn'
              desc='Als Gehirn oder Hirn wird bei Wirbeltieren einschließlich des Menschen und bei einigen Wirbms bezeichnet.'
              img='https://images.unsplash.com/photo-1559757175-5700dde675bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2978&q=80'
              link='/placeholder' />
          </Col>
          <Col xs='auto'>
            <ModelCard
              title='Gehirn'
              desc='Als Gehirn oder Hirn wird bei Wirbeltieren einschließlich des Menschen und bei einigen Wirbellosen der im Kopf gelegene Teil des zentralen Nervensystems bezeichnet.'
              img='https://images.unsplash.com/photo-1559757175-5700dde675bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2978&q=80'
              link='/placeholder' />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
