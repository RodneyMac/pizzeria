import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import CartItem from '../../views/CartItem/CartItem';

const Cart = ({cart}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  
  return (
    <div>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item}/>
        ))}
      </div>
      <div className='d-flex flex-column align-items-center mt-4'>
        <h4 className='text-white'>Resumen de compra</h4>
        <div>
          <div className='text-info mt-2'>Total: {totalItems}</div>
          <div className='text-warning mt-2 text-center'>$ {totalPrice}</div>
        </div>
        <button className='btn btn-outline-primary mt-4 mb-4'>Confirmar</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Cart);