/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer as LC } from 'react-router-bootstrap';

const ModelCard = ({ title, desc, link, img }) => {
  return (
    <Card className='mb-4' style={{ width: '25rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <LC to={link}>
          <Button size='block' variant="info">3D Modell zeigen</Button>
        </LC>
      </Card.Body>
    </Card>
  );
};

export default ModelCard;