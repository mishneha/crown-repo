import CartActionTypes from './cart.types';

const INIT_STATE = {
    hidden: true
};
const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_HIDDEN_CART:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
}
export default cartReducer;