import * as actions from '../action/itemAction/actionTypes';

const initalState = {
    itemList:[],
    searchItem:'',
    selectedItem:null,
    sortTerm:"default",
}

export default function itemReducer(state=initalState, action) {
    const {type, payload} = action;
    switch(type) {
        case actions.FETCH_ALL_ITEMS: return{...state, itemList:payload}
        case actions.UPDATE_SEARCH_ITEM:return{...state, searchItem:payload}
        case actions.SELECT_ITEM:return{...state, selectedItem:payload};
        case actions.SORT_ITEM:return {...state, sortTerm:payload};
        default:return state;
    }
}