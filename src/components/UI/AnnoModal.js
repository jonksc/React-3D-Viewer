/* eslint-disable react/prop-types */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AnnoModal = ({ show, handleClose, annotation }) => {

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leberzirrhose</Modal.Title>
        </Modal.Header>
        <Modal.Body>{annotation}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AnnoModal;