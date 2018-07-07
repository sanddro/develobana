import { ERRORS } from '../../redux/types';

const initial = {};

export default function(state = initial, action) {
    if(action.type === ERRORS){
        return action.data;
    }
    return state;
}