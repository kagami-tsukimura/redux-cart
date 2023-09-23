import React from 'react';
import { useDispatch } from 'react-redux';
import { MinusIcon, PlusIcon } from '../HeroIcons';
import { decrease, increase, removeItem } from '../features/cart/CartSlice';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}円</h4>
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>
          削除
        </button>
        {/* <a href={img} download={`penguin_${id}.png`}>
          <button>画像をダウンロード</button>
        </a> */}
      </div>
      <div>
        <button className='amount-btn' onClick={() => dispatch(increase(id))}>
          <PlusIcon />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn'
          onClick={() => {
            amount === 1 ? dispatch(removeItem(id)) : dispatch(decrease(id));
          }}
        >
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
