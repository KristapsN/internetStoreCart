export const Products: OneProduct[] = [
  { id: 1, name: 'AA43', brand: 'Panasonic', price: 455, inCart: false },
  { id: 2, name: 'I3', brand: 'LG', price: 210, inCart: false },
  { id: 3, name: 'QLED', brand: 'Samsung', price: 1005, inCart: false }
];
export interface OneProduct {
  id: number
  name: string
  brand: string
  price: number
  inCart: boolean

}