import React from 'react';
import Modal from 'react-modal'; // Import the modal component

const modalStyles = {
  content: {
    width: '500px',
    height: '300px', // Reduce the modal height
    margin: 'auto',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column', // Set flex direction to column
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow
  },
};

function AddRowModal(props) {
  const {
    isOpen,
    onClose,
    onAddRow,
    position,
    setPosition,
    numberOfCopies,
    setNumberOfCopies,
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Row Modal"
      style={modalStyles}
    >
      <div className="modal-content" style={{ height: 'auto' }}>
        <div className="modal-header">
          <h5 className="modal-title">Add Row/Rows at Certain Position</h5>
        </div>
        <div className="modal-body">
          <label htmlFor="position">Enter Position:</label>
          <input
            type="number"
            className="form-control"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <br></br>
          <label htmlFor="numberOfCopies">Number of Copies:</label>
          <input
            type="number"
            className="form-control"
            id="numberOfCopies"
            value={numberOfCopies}
            onChange={(e) => setNumberOfCopies(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary add-row-modal" onClick={onAddRow}>
            Add Row
          </button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default AddRowModal;
