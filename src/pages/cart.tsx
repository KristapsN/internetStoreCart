import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/type';
import { ProductGeneral } from '../components/product/productGeneral';
import { addToCart } from '../store/actions';
import { Products } from '../productData/product';

const Home: FC = () => {
  const cart = useSelector((state: RootState) => state.id);
  const dispatch = useDispatch();
  console.log('Cart', cart);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
            {Products.filter(item=> item.id === cart).map((item) => 
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