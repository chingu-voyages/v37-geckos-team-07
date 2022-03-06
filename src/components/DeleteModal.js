import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteModal({
  showDeleteModal,
  handleDeleteModalClose,
  handleSave,
  itemCategory,
  itemAmount,
  itemDate,
}) {
  return (
    <Modal show={showDeleteModal} onHide={handleDeleteModalClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm changes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Delete <span className="fw-bold">{itemCategory}</span> in amount of{' '}
        <span className="fw-bold">${itemAmount}</span> from{' '}
        <span className="fw-bold">{itemDate}</span> ?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleDeleteModalClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
