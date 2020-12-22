export const ADD_TOCART = 'ADD_TOCART';

export type AllProduct = number;

interface InitialStore {
  id: AllProduct;
}

export type AddToCart = {
  type: typeof ADD_TOCART;
  id: AllProduct;

};

export type AllActions = AddToCart;

export interface RootState extends InitialStore { }

// interface OneProduct {
//   id: number
//   name: string
//   brand: string
//   price: number
//   inCart: boolean

// }