import React from 'react';

const Checkout = () => {
  return (
    <div>
      <div className='mt-4 d-flex flex-column align-items-center'>
        <h4 className='text-info mt-4 text-center'>Checkout</h4>
        <h4 className='text-info text-center'>Pago en efectivo con delivery</h4>
        <div className='mt-4 text-center'>
          {/* <img src={item.img} alt={item.title} className="rounded w-25"/> */}
          <div className='text-info mt-2'>Title</div>
          <div className='text-white'>Description</div>
          <div className='text-warning'>$ Price</div>
        </div>
        <div className='d-flex align-items-center justify-content-center mt-4'>
          <label htmlFor='qty' className='text-info mx-2'>Cantidad</label>
          <input min="1" type="number" id="qty" name="qty" className='w-25 form-control'/>
        </div>
        <button className='btn btn-outline-danger mt-4'>Eliminar</button>
      </div>
    </div>
  )
}

export default Checkout;