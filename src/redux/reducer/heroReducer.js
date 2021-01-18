import * as actions from '../action/heroAction/actionTypes';

const initialState = {
    heroList:[],
    selectedHero:null,
    searchTerm:'',
    type:"all",
}

export default function heroReducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case actions.FETCH_ALL_HEROS: return{...state, heroList: payload};
        case actions.SWITCH_TYPE:return{...state,type:payload};
        case actions.UPDATE_SEARCH_TERM:return{...state,searchTerm:payload};
        case actions.SELECT_HERO:return{...state, selectedHero:payload};
        default: return state;
    }
}