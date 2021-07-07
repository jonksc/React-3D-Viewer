/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer as LC } from 'react-router-bootstrap';

const ModelCard = ({ title, desc, link }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/logo512.png" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <LC to={link}>
          <Button variant="primary">3D Model</Button>
        </LC>
      </Card.Body>
    </Card>
  );
};

export default ModelCard;
