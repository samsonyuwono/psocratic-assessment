import { RECEIVE_TOKEN } from '../action-types/token';

const initialState = null;

export default function token(state = initialState, action) {
    switch(action.type) {
    case RECEIVE_TOKEN:
        return action.authToken;
    default:
        return state;
    }
}
