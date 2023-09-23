import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/CartSlice';
import { closeDeleteModal } from '../features/modal/ModalSlice';

const DeleteModal = () => {
  const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>買い物かごをすべて空にしますか？</h4>
        <div className='btn-container'>
          <button
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeDeleteModal());
            }}
          >
            OK
          </button>
          <button
            className='btn clear-btn'
            onClick={() => dispatch(closeDeleteModal())}
          >
            やめておく
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DeleteModal;
