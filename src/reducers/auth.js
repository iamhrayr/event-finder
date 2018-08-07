import {FETCH_USER} from '../actions/actionTypes';

// const defaultState = {
//     isAuthenticated: 
// };

export default function(state = false, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload;
        default:
            return state;
    }
}