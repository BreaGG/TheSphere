
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
                        <p><span>Username:</span> {item.username}</p>
                        <p><span>Country:</span> {item.country}</p>
                        <p><span>Email:</span> {item.email}</p>
                    </div>
                ) : (
                    <div>
                        <p>Are you sure you want to delete this post?</p>
                        <p><span>Title:</span> {item.title}</p>
                        <p><span>Description:</span> {item.description}</p>
                        <p><span>User:</span> {item.user.username}</p>
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
