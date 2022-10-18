import React from 'react';
import { useSelector } from 'react-redux';

const Postres = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className='container'>
      <h4 className='text-info mt-4 text-center'>Postres</h4>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='row'>
          {tasks.products.map((item) => {
            if(item.category === "Postres") {
              return(
                <div className='col-md-6 mt-4' key={item.id}>
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='text-warning d-flex'>ID:<div className='text-info mx-1'>{item.id}</div></div>
                    <img src={item.imgUrl} alt={item.title} className="w-75 rounded"/>
                    <div className='text-info mt-1'>{item.title}</div>
                    <div className='text-white'>{item.description}</div>
                    <div className='text-warning'>$ {item.price}</div>
                    <button className='btn btn-outline-primary mt-2'>Agregar</button>
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

export default Postres;