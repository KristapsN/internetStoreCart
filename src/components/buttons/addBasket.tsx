import React from 'react';
import style from './product.module.scss';

type Props = {
  addHandler: () => void;
  text: string

};

export const Button = ({ addHandler, text }: Props) => {
  return (
    <>
      <button
        type='button'
        onClick={() => addHandler()}
      >
        {text}
      </button>

    </>
  );
};