import { ACTIONS } from "../actions";

const initialState = {
    details: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case ACTIONS.SET_CURRENCY_PAIR:
            return {
                ...state,
                details: action.payload
            };
        default:
            return state;
    }
}

