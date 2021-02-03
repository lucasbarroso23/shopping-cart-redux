import allProducts from "./allProducts";

const initialState = [...allProducts];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  return state;
};
