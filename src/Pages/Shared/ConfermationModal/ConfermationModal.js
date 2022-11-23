import React from 'react';

const ConfermationModal = ({ title, message, closeModal, successAction, modalData, deleteButtonData }) => {
    return (
        <div>
            <input type="checkbox" id="Confermation-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="Confermation-Modal" 
                        className="btn btn-sm btn-primary bg-red-500">{deleteButtonData}</label>
                        <button onClick={closeModal} className='btn btn-sm btn-primary text-white'>Cencel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfermationModal;