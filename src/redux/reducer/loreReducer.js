import * as actions from '../action/loreAction/actionType';

const initialState = {
    loreList:null,
}

export default function loreReducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case actions.FETCH_ALL_LORES:return{...state, loreList:payload};
        default:return state;
    }
}