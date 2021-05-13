import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions";

const initState = {
  products: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        products: state.products.concat(action.type.productData),
      };
    }
    case REMOVE_PRODUCT: {
      const newProdutsList = state.produts.filter((product) => product.id !== action.payload.productId);
      
      return {
        ...state,
        products: newProdutsList,
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
