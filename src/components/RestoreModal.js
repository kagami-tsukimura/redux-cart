import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/CartSlice';
import { closeRestoreModal } from '../features/modal/ModalSlice';

const RestoreModal = () => {
  const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>買い物かごを復元しますか？</h4>
        <div className='btn-container'>
          <button
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeRestoreModal());
            }}
          >
            復元する
          </button>
          <button
            className='btn clear-btn'
            onClick={() => dispatch(closeRestoreModal())}
          >
            やめておく
          </button>
        </div>
      </div>
    </aside>
  );
};

export default RestoreModal;
