const initialState = {
  cart: [], // [{ count: 1, product: { id: "1235", ... } }]
  payment: {},
  address: {},
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: action.payload };
    case "SET_PAYMENT":
      return { ...state, payment: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    default:
      return state;
  }
}

export default cartReducer;
