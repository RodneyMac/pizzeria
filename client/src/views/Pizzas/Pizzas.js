import React from 'react';
import {connect} from "react-redux";
import {addToCart, loadCurrentItem} from "../../redux/actions/actions";

const Pizzas = ({products, addToCart}) => {
  return (
    <div className='container'>
      <h4 className='text-info mt-4 text-center'>Pizzas</h4>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='row'>
          {products.map((item) => {
            if(item.category === "Pizzas") {
              return(
                <div className='col-md-4 mt-4' key={item.id}>
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='text-warning d-flex'>ID:<div className='text-info mx-1'>{item.id}</div></div>
                    <img src={item.imgUrl} alt={item.title} className="w-50 rounded"/>
                    <div className='text-info mt-1'>{item.title}</div>
                    <div className='text-white'>{item.description}</div>
                    <div className='text-warning'>$ {item.price}</div>
                    <button className='btn btn-outline-primary mt-2' onClick={() => addToCart(item.id)}>Agregar</button>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pizzas);