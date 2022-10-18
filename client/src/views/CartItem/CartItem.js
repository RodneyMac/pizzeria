import React, {useState} from 'react';
import {connect} from "react-redux";
import { adjustItemQuantity, removeFromCart } from '../../redux/actions/actions';

const Checkout = ({item, adjustQty, removeFromCart}) => {
  const [input, setInput] = useState(item.qty);

  const handleChange = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  }

  return (
    <div>
      <div className='mt-4 d-flex flex-column align-items-center'>
        <h4 className='text-info text-center'>Pago en efectivo con delivery</h4>
        <div className='mt-2 text-center'>
          <img src={item.imgUrl} alt={item.title} className="rounded w-25"/>
          <div className='text-info mt-2'>{item.title}</div>
          <div className='text-white'>{item.description}</div>
          <div className='text-warning'>$ {item.price}</div>
        </div>
        <div className='d-flex align-items-center justify-content-center mt-4'>
          <label htmlFor='qty' className='text-info mx-2'>Cantidad</label>
          <input min="1" type="number" id="qty" name="qty" className='w-25 form-control'value={input} onChange={handleChange}/>
        </div>
        <button className='btn btn-outline-danger mt-4' onClick={() => removeFromCart(item.id)}>Eliminar</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQuantity(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
  }
}

export default connect(null, mapDispatchToProps)(Checkout);