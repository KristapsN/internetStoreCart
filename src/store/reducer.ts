import { RootState, AllActions, ADD_TOCART } from './type';

const initialStore: RootState = {
  id: 0,
};

export const reducer = (state = initialStore, action: AllActions) => {
  switch (action.type) {
    case ADD_TOCART: {
      console.log('1', action.id); 
      console.log('2', state); 
      
      return {
        
        id: action.id,
      };
    }
    default:
      console.log('3');
      return state;
  }
};
