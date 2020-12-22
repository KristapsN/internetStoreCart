import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { OneProduct } from '../../productData/product';




export const Nav: FC = () => {
  const store = useSelector((state: OneProduct[]) => state.filter(item => item.inCart));
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      &nbsp; &nbsp;
      <NavLink to="/basket">Basket ({store.length})</NavLink>
    </nav>
  );
};
