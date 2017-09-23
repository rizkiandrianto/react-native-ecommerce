/**
 * @providesModule redux/reducers/MainReducer
 */

import store from 'redux/stores/MainStore';

export default function(state=store, action) {
    switch (action.type) {
        case 'SET_INCREASE_COUNTER':
            return {
                ...state,
                counter: state.counter+1
            }
            break;
        default:
            return {
                ...state
            }
            break;
    }
}