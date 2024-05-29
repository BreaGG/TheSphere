
import React from 'react';
import './ConfirmDeleteModal.css';

function ConfirmDeleteModal({ isOpen, onClose, onConfirm, item, type }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div>
                <h2>Confirm Deletion</h2>
                {type === 'user' ? (
                    <div>
                        <p>Are you sure you want to delete this user?</p>
                        <p>Username: {item.username}</p>
                        <p>Email: {item.email}</p>
                    </div>
                ) : (
                    <div>
                        <p>Are you sure you want to delete this post?</p>
                        <p>Title: {item.title}</p>
                        <p>Description: {item.description}</p>
                    </div>
                )}
                </div>
                <div className="modal-buttons">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={onConfirm}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDeleteModal;
