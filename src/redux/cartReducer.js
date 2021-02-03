import allProducts from './allProducts';

const initialState = allProducts.map(item => ({...item, qty: 0}));

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":

      return state.map(item => {
        item.id === action.id && item.qty++;
        return item;
      });
    
    case "REMOVE_FROM_CART":
      
      return state.map(item => {
        item.id === action.id && item.qty--;
        return item;
      });

    case "CLEAN_CART":
      
      return state.map(item => {
        item.qty = 0;
        return item;
      });

  
    default:
      return state;
  }
}