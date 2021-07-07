import React from 'react';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
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
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Navibar;
