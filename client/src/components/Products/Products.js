// import React, {useEffect, useState} from 'react';
import React from 'react';
// import { useSelector } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { addToCart } from '../../features/task/taskSlice';

const Products = () => {
  // const tasks = useSelector((state) => state.tasks);
  // const [listItem, setListItem] = useState();
  // const [itemProduct, setItemProduct] = useState({});
  
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // console.log(tasks.products);
  // console.log(tasks);

  // useEffect(() => {
  //   fetch("/api/fproduct/")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setListItem(data);
  //     console.log(data);
  //   })
  // }, []);

  // const handleSubmitProduct = (e) => {
  //   setItemProduct({
  //     ...itemProduct,
  //     [e.target.value] : e.target.value
  //   });
  //   dispatch(addToCart());
  //   navigate("/checkout");
  // }

  return (
    <div>
      <h2 className='text-info text-center mt-4'>Productos</h2>
      {/* <div className='d-flex justify-content-center align-items-center'>
        {tasks.products.map((item) => (
          <div key={item.id} className='d-flex flex-column justify-content-center align-items-center'>
            <div className='text-info'>{item.id}</div>
            <img src={item.imgUrl} alt={item.title} className="w-25 rounded"/>
            <div className='text-info'>{item.title}</div>
            <div className='text-white'>{item.description}</div>
            <div className='text-warning'>$ {item.price}</div>
            <div className='d-flex mt-2'>
              <button className='btn btn-outline-secondary mx-2'>Ver</button>
              <button className='btn btn-outline-primary mx-2'>Agregar</button>
            </div>
          </div>
        ))}
      </div> */}
      {/* {listItem && listItem.map((item) => (
        <div key={item.id} className="d-flex flex-column justify-content-center align-items-center">
          <img src={item.imgUrl} alt={item.title} className="text-white text-center mt-4 w-25 rounded"/>
          <div className="text-info d-flex mt-4">ID:
            <div className="text-white mx-1">{item.id}</div>
          </div>
          <div className="text-info">{item.title}</div>
          <div className="text-white">{item.description}</div>
          <div className="text-info d-flex">Precio:
            <div className="text-warning mx-1">$ {item.price}</div>
          </div>
          <div className="d-flex mt-2">
            <button className="btn btn-outline-secondary mx-4">Ver</button>
            <button className="btn btn-outline-primary mx-4" onClick={handleSubmitProduct}>Agregar</button>
          </div>
        </div>
      ))} */}
    </div>
  )
}

export default Products;