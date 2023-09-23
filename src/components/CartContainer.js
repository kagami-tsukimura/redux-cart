import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/ModalSlice';
import CartItem from './CartItem';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>買い物かご</h2>
          <h4 className='empty-cart'>何も入っていません・・・🐧</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            合計 <span>{total}円</span>
          </h4>
        </div>
        <button
          className='btn clear-button'
          onClick={() => dispatch(openModal())}
        >
          全削除
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
