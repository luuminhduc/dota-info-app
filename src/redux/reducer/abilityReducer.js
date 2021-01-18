import * as actions from '../action/abilityAction/actionTypes';

const initialState = {
    abilityList:null,
}

export default function abilityReducer(state=initialState, action) {
    const {type,payload} = action;
    switch(type) {
        case actions.FETCH_ALL_ABILITIES:return{...state, abilityList:payload};
        default:return state;
    }
}