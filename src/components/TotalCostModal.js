import React from "react";
import './modal.css';
function TotalCostModal({ totalCost, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <h3>Total Estimate</h3>
          <h2>Rs.{totalCost}(approximately)</h2>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default TotalCostModal;
