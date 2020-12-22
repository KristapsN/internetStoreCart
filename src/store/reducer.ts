import { AllActions, ADD_TOCART } from './type';
import { Products, OneProduct } from '../productData/product';

export const reducer = (state: OneProduct[] = Products, action: AllActions) => {
  switch (action.type) {
    case ADD_TOCART: {
      const newProducts = [...Products];
      const indexID = newProducts.findIndex((item)=> item.id === action.id);
      newProducts[indexID].inCart = !newProducts[indexID].inCart;
  
      return newProducts;
          
    }
    default:

      return state;
  }
};
