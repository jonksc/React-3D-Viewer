import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer as LC } from 'react-router-bootstrap';

const Navibar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <LC to='/'>
          <Navbar.Brand href="#home">3D Model</Navbar.Brand>
        </LC>
        <Nav className="mr-auto">
          <LC to='/leberzirrhose'>
            <Nav.Link href="/">Leberzirrhose</Nav.Link>
          </LC>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navibar;
