import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductGeneral } from '../components/product/productGeneral';
import { addToCart } from '../store/actions';
import { OneProduct } from '../productData/product';

const Home: FC = () => {
  const store = useSelector((state: OneProduct[]) =>
    state.filter(item => item.inCart));
  const dispatch = useDispatch();

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
            {store.map((item) =>
              <div key={item.id}>
                <ProductGeneral
                  id={item.id}
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                  inCart={item.inCart}
                  addHandler={() => dispatch(addToCart(item.id))}
                  text='Add'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;