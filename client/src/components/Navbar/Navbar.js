import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import {BsCart3} from "react-icons/bs";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const tasks = useSelector((state) => state.tasks);
  const [cartCount, setCartCount] = useState(0);
  
  useEffect(() => {
    let count = 0;
    tasks.cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [tasks.cart, cartCount]);

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="m-auto">
        <div className=''></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse my-2" id="navbarSupportedContent">
          <div className=''>
            <Link to="/" className='btn btn-outline-primary'>Inicio</Link>
          </div>
          <Link to="/checkout" className='d-flex align-items-center mx-5 text-decoration-none' role="button">
            <BsCart3 className="text-warning"/>
            <div className='text-info mx-2'>{cartCount}</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;