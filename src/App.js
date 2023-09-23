import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CartContainer from './components/CartContainer';
import DeleteModal from './components/DeleteModal';
import Navbar from './components/Navbar';
import RestoreModal from './components/RestoreModal';
import { calculateTotals } from './features/cart/CartSlice';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { deleteIsOpen, restoreIsOpen } = useSelector((state) => state.modal);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  return (
    <main>
      {deleteIsOpen && <DeleteModal />}
      {restoreIsOpen && <RestoreModal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
