import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('app'));
const OptionModal = (props) => (
  <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      onRequestClose={props.handleCloseModal}
      closeTimeoutMS = {200}
      className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__text">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleCloseModal}>Okay!</button>
  </Modal>

);

export default OptionModal;
