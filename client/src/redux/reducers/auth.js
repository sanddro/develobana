import { LOGIN_USER } from '../types';

const initial = { logged: false, user: {} };

export default function(state = initial, action) {
    if(action.type === LOGIN_USER ){
        return {
            ...state,
            user: action.data,
            logged: Object.keys(action.data).length > 0
        }
    }
    return state;
}