import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('app'));
const OptionModal = (props) => (
  <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      onRequestClose={props.handleCloseModal}
      closeTimeoutMS = {50}
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleCloseModal}>Okay!</button>
  </Modal>

);

export default OptionModal;
