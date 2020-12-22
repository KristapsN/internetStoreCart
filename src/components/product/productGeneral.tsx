import React from 'react';
import style from './product.module.scss';
import { Button } from '../buttons/addBasket';


type Props = {
  id: number
  name: string
  brand: string
  price: number
  inCart: boolean
  addHandler: () => void;
  text: string
};

export const ProductGeneral = ({ id, name, brand, price, inCart, addHandler, text }: Props) => {

  return (
    <>
      {
        !inCart ? (
          <div
            className={style.productWrapper}
            
          >
            <span>{id} id</span>
            <h3>{name}</h3>
            <h4>{brand}</h4>
            <span>{price}</span>
            <Button
              addHandler={() => addHandler()}
              text='Add to cart'
            />
          </div>
        ) :
          (
            <div className={style.productWrapper2}>
              <h3>{name}</h3>
              <h4>{brand}</h4>
              <span>{price}</span>
              <Button
                addHandler={() => addHandler()}
                text='Remove from cart'
              />
            </div>
          )
      }
    </>
  );
};