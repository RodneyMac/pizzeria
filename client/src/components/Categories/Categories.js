import React from 'react';
import {Link} from "react-router-dom";

const Categories = () => {
  return (
    <div className='container mt-4'>
      <div className="d-flex justify-content-around mt-4">
        <div className="mx-1">
          <Link
            to="/pizzas"
            className="btn btn-outline-info"
          >
            Pizzas
          </Link>
        </div>
        <div className="mx-1">
          <Link
            to="/empanadas"
            className="btn btn-outline-info"
          >
            Empanadas
          </Link>
        </div>
        <div className="mx-1">
          <Link
            className="btn btn-outline-info"
            to="/bebidas"
          >
            Bebidas
          </Link>
        </div>
        <div className="mx-1">
          <Link
            to="/postres"
            className="btn btn-outline-info"
          >
            Postres
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories;